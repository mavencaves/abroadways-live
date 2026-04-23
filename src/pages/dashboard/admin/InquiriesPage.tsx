import { type ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
  BellRing,
  CalendarClock,
  CheckCheck,
  ClipboardList,
  Copy,
  ExternalLink,
  Mail,
  MessageCircle,
  Search,
  SlidersHorizontal,
  UserRoundCheck,
} from "lucide-react";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type InquiryStatus = "new" | "contacted" | "follow-up" | "qualified" | "closed" | "lost";
type TaskStatus = "pending" | "in-progress" | "completed" | "cancelled";

type AssignedUser = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "content-manager";
  status?: "active" | "inactive";
};

type InquiryNote = {
  _id: string;
  body: string;
  createdAt: string;
  createdByName?: string;
  createdByRole?: string;
};

type InquiryActivity = {
  _id: string;
  type: "created" | "status" | "assignment" | "note" | "reminder" | "task" | "template";
  message: string;
  createdAt: string;
  createdByName?: string;
  createdByRole?: string;
};

type InquiryTask = {
  _id: string;
  title: string;
  dueDate: string;
  status: TaskStatus;
  assignedTo?: AssignedUser | null;
  completedAt?: string | null;
  createdAt: string;
};

type Inquiry = {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  source: string;
  destination?: string;
  qualification?: string;
  intake?: string;
  examInterest?: string;
  message?: string;
  status: InquiryStatus;
  adminNotes?: string;
  assignedTo?: AssignedUser | null;
  notes?: InquiryNote[];
  activity?: InquiryActivity[];
  tasks?: InquiryTask[];
  nextFollowUpAt?: string | null;
  followUpCompletedAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

type InquiryMeta = {
  assignableUsers: AssignedUser[];
  destinations: string[];
  examInterests: string[];
  sources: string[];
  statuses: InquiryStatus[];
  taskStatuses: TaskStatus[];
};

type InquiryMetrics = {
  total: number;
  new: number;
  contacted: number;
  followUp: number;
  qualified: number;
  closed: number;
  lost: number;
  overdueFollowUps: number;
  unassigned: number;
  tasksDueToday: number;
};

type InquiryNotificationAssignee = {
  _id: string;
  name: string;
  role: string;
};

type InquiryNotifications = {
  overdueFollowUps: {
    count: number;
    sample: {
      id: string;
      name: string;
      status: string;
      nextFollowUpAt: string;
      assignedTo: InquiryNotificationAssignee | null;
    }[];
  };
  unassignedInquiries: {
    count: number;
    sample: {
      id: string;
      name: string;
      status: string;
      source: string;
      createdAt: string;
    }[];
  };
  staleInquiries: {
    count: number;
    sample: {
      id: string;
      name: string;
      status: string;
      updatedAt: string;
    }[];
  };
  tasksDueToday: {
    count: number;
    sample: {
      inquiryId: string;
      inquiryName: string;
      taskId: string;
      title: string;
      dueDate: string;
      status: string;
      assignedTo: InquiryNotificationAssignee | null;
    }[];
  };
};

type InquiryTemplate = {
  key: string;
  label: string;
  channel: "email" | "whatsapp";
  subject: string;
  body: string;
};

const emptyMetrics: InquiryMetrics = {
  total: 0,
  new: 0,
  contacted: 0,
  followUp: 0,
  qualified: 0,
  closed: 0,
  lost: 0,
  overdueFollowUps: 0,
  unassigned: 0,
  tasksDueToday: 0,
};

const emptyNotifications: InquiryNotifications = {
  overdueFollowUps: { count: 0, sample: [] },
  unassignedInquiries: { count: 0, sample: [] },
  staleInquiries: { count: 0, sample: [] },
  tasksDueToday: { count: 0, sample: [] },
};

const statusClasses: Record<InquiryStatus, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-amber-100 text-amber-700",
  "follow-up": "bg-violet-100 text-violet-700",
  qualified: "bg-emerald-100 text-emerald-700",
  closed: "bg-slate-200 text-slate-700",
  lost: "bg-rose-100 text-rose-700",
};

const taskStatusClasses: Record<TaskStatus, string> = {
  pending: "bg-blue-100 text-blue-700",
  "in-progress": "bg-amber-100 text-amber-700",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-slate-200 text-slate-700",
};

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "follow-up", label: "Follow-up" },
  { value: "qualified", label: "Qualified" },
  { value: "closed", label: "Closed" },
  { value: "lost", label: "Lost" },
] as const;

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
] as const;

const notificationCards = [
  {
    key: "overdueFollowUps",
    title: "Overdue follow-ups",
    description: "Leads needing immediate action",
  },
  {
    key: "unassignedInquiries",
    title: "Unassigned leads",
    description: "Leads waiting for owner assignment",
  },
  {
    key: "staleInquiries",
    title: "Stale leads",
    description: "Records with no recent CRM activity",
  },
  {
    key: "tasksDueToday",
    title: "Tasks due today",
    description: "Operational actions due before day-end",
  },
] as const;

const formatSource = (source: string) =>
  source
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const formatStatusLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const formatDateTime = (value?: string | null) =>
  value
    ? new Date(value).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "Not scheduled";

const toDateTimeLocalValue = (value?: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60000);
  return localDate.toISOString().slice(0, 16);
};

const buildWhatsAppLink = (phone?: string, message?: string) => {
  if (!phone) return null;
  const digits = phone.replace(/[^\d]/g, "");
  if (!digits) return null;
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${encoded}`;
};

const getInquiryOverdueState = (inquiry: Inquiry) => {
  if (!inquiry.nextFollowUpAt) return false;
  if (["closed", "lost"].includes(inquiry.status)) return false;
  const followUpAt = new Date(inquiry.nextFollowUpAt);
  const completedAt = inquiry.followUpCompletedAt ? new Date(inquiry.followUpCompletedAt) : null;
  return followUpAt.getTime() < Date.now() && (!completedAt || completedAt.getTime() < followUpAt.getTime());
};

const buildLeadSummary = (inquiry: Inquiry) =>
  [
    `Lead: ${inquiry.name}`,
    `Email: ${inquiry.email || "Not provided"}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Source: ${formatSource(inquiry.source)}`,
    `Destination: ${inquiry.destination || "Not provided"}`,
    `Qualification: ${inquiry.qualification || "Not provided"}`,
    `Intake: ${inquiry.intake || "Not provided"}`,
    `Exam interest: ${inquiry.examInterest || "Not provided"}`,
    `Status: ${formatStatusLabel(inquiry.status)}`,
    `Assigned to: ${inquiry.assignedTo?.name || "Not assigned"}`,
    `Message: ${inquiry.message || "No additional message provided."}`,
  ].join("\n");

const applyTemplate = (template: InquiryTemplate, inquiry: Inquiry, staffName: string) => {
  const replacements: Record<string, string> = {
    name: inquiry.name || "Student",
    destination: inquiry.destination || "your preferred destination",
    intake: inquiry.intake || "upcoming",
    examInterest: inquiry.examInterest || "your exam planning",
    qualification: inquiry.qualification || "your profile",
    staffName,
  };

  const replaceTokens = (value: string) =>
    value.replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] || "");

  return {
    subject: replaceTokens(template.subject),
    body: replaceTokens(template.body),
  };
};

export default function InquiriesPage() {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [meta, setMeta] = useState<InquiryMeta>({
    assignableUsers: [],
    destinations: [],
    examInterests: [],
    sources: ["homepage-lead", "homepage-consultation", "contact-page", "other"],
    statuses: ["new", "contacted", "follow-up", "qualified", "closed", "lost"],
    taskStatuses: ["pending", "in-progress", "completed", "cancelled"],
  });
  const [metrics, setMetrics] = useState<InquiryMetrics>(emptyMetrics);
  const [notifications, setNotifications] = useState<InquiryNotifications>(emptyNotifications);
  const [templates, setTemplates] = useState<InquiryTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]["value"]>("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [examFilter, setExamFilter] = useState("all");
  const [assignedFilter, setAssignedFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<(typeof sortOptions)[number]["value"]>("newest");
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [followUpDraft, setFollowUpDraft] = useState("");
  const [taskTitleDraft, setTaskTitleDraft] = useState("");
  const [taskDueDateDraft, setTaskDueDateDraft] = useState("");
  const [taskAssigneeDraft, setTaskAssigneeDraft] = useState("unassigned");
  const [selectedEmailTemplate, setSelectedEmailTemplate] = useState("");
  const [selectedWhatsAppTemplate, setSelectedWhatsAppTemplate] = useState("");

  const canManageInquiries = user ? ["admin", "content-manager"].includes(user.role) : false;
  const selectedInquiry = inquiries.find((item) => item._id === selectedInquiryId) || null;
  const emailTemplates = useMemo(
    () => templates.filter((item) => item.channel === "email"),
    [templates]
  );
  const whatsappTemplates = useMemo(
    () => templates.filter((item) => item.channel === "whatsapp"),
    [templates]
  );

  const refreshOperationalData = async () => {
    const [metricsResponse, notificationsResponse] = await Promise.all([
      inquiriesApi.getMetrics(),
      inquiriesApi.getNotifications(),
    ]);

    setMetrics({
      total: metricsResponse.data?.total || 0,
      new: metricsResponse.data?.new || 0,
      contacted: metricsResponse.data?.contacted || 0,
      followUp: metricsResponse.data?.followUp || 0,
      qualified: metricsResponse.data?.qualified || 0,
      closed: metricsResponse.data?.closed || 0,
      lost: metricsResponse.data?.lost || 0,
      overdueFollowUps: metricsResponse.data?.overdueFollowUps || 0,
      unassigned: metricsResponse.data?.unassigned || 0,
      tasksDueToday: metricsResponse.data?.tasksDueToday || 0,
    });
    setNotifications(notificationsResponse.data || emptyNotifications);
  };

  const loadInquiries = async () => {
    if (!canManageInquiries) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const [inquiriesResponse, metaResponse, templatesResponse] = await Promise.all([
        inquiriesApi.getAll(),
        inquiriesApi.getMeta(),
        inquiriesApi.getTemplates(),
      ]);

      setInquiries(Array.isArray(inquiriesResponse.data) ? inquiriesResponse.data : []);
      setMeta({
        assignableUsers: Array.isArray(metaResponse.data?.assignableUsers) ? metaResponse.data.assignableUsers : [],
        destinations: Array.isArray(metaResponse.data?.destinations) ? metaResponse.data.destinations : [],
        examInterests: Array.isArray(metaResponse.data?.examInterests) ? metaResponse.data.examInterests : [],
        sources: Array.isArray(metaResponse.data?.sources) ? metaResponse.data.sources : [],
        statuses: Array.isArray(metaResponse.data?.statuses) ? metaResponse.data.statuses : [],
        taskStatuses: Array.isArray(metaResponse.data?.taskStatuses) ? metaResponse.data.taskStatuses : [],
      });
      setTemplates(Array.isArray(templatesResponse.data) ? templatesResponse.data : []);
      await refreshOperationalData();
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired or you do not have permission to view inquiries. Please sign in again with an admin or content-manager account."
          : status === 403
            ? "Access denied. Only admin and content-manager accounts can view inquiries."
            : status >= 500
              ? "The inquiry service is having trouble right now. Please try again shortly."
              : error?.response?.data?.message || "Failed to load inquiries.";

      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, [canManageInquiries]);

  useEffect(() => {
    if (!selectedInquiry) return;

    setNoteDraft("");
    setFollowUpDraft(toDateTimeLocalValue(selectedInquiry.nextFollowUpAt));
    setTaskTitleDraft("");
    setTaskDueDateDraft("");
    setTaskAssigneeDraft(selectedInquiry.assignedTo?._id || "unassigned");
    setSelectedEmailTemplate(emailTemplates[0]?.key || "");
    setSelectedWhatsAppTemplate(whatsappTemplates[0]?.key || "");
  }, [selectedInquiryId, selectedInquiry?.updatedAt, emailTemplates, whatsappTemplates]);

  const filteredInquiries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const results = inquiries.filter((inquiry) => {
      const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
      const matchesSource = sourceFilter === "all" || inquiry.source === sourceFilter;
      const matchesDestination =
        destinationFilter === "all" || (inquiry.destination || "") === destinationFilter;
      const matchesExam =
        examFilter === "all" || (inquiry.examInterest || "") === examFilter;
      const matchesAssigned =
        assignedFilter === "all" ||
        (assignedFilter === "unassigned"
          ? !inquiry.assignedTo
          : inquiry.assignedTo?._id === assignedFilter);

      if (!normalizedSearch) {
        return matchesStatus && matchesSource && matchesDestination && matchesExam && matchesAssigned;
      }

      const haystack = [
        inquiry.name,
        inquiry.email,
        inquiry.phone,
        inquiry.destination,
        inquiry.qualification,
        inquiry.intake,
        inquiry.examInterest,
        inquiry.message,
        inquiry.source,
        inquiry.assignedTo?.name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesStatus &&
        matchesSource &&
        matchesDestination &&
        matchesExam &&
        matchesAssigned &&
        haystack.includes(normalizedSearch)
      );
    });

    return results.sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
    });
  }, [
    inquiries,
    searchTerm,
    sortOrder,
    statusFilter,
    sourceFilter,
    destinationFilter,
    examFilter,
    assignedFilter,
  ]);

  const refreshWithUpdatedInquiry = async (updatedInquiry: Inquiry) => {
    setInquiries((prev) => prev.map((item) => (item._id === updatedInquiry._id ? updatedInquiry : item)));
    await refreshOperationalData();
  };

  const handleUpdateInquiry = async (
    inquiry: Inquiry,
    payload: Parameters<typeof inquiriesApi.update>[1],
    successMessage = "Inquiry updated."
  ) => {
    try {
      setSavingId(inquiry._id);
      const response = await inquiriesApi.update(inquiry._id, payload);
      await refreshWithUpdatedInquiry(response.data);
      toast.success(successMessage);
      return response.data as Inquiry;
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to update inquiry.";
      toast.error(message);
      throw error;
    } finally {
      setSavingId(null);
    }
  };

  const handleCopy = async (value?: string, label = "Value") => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied.`);
    } catch {
      toast.error(`Unable to copy ${label.toLowerCase()}.`);
    }
  };

  const selectedNotes = selectedInquiry
    ? selectedInquiry.notes && selectedInquiry.notes.length > 0
      ? selectedInquiry.notes
      : selectedInquiry.adminNotes
        ? [
            {
              _id: `${selectedInquiry._id}-legacy-note`,
              body: selectedInquiry.adminNotes,
              createdAt: selectedInquiry.updatedAt || selectedInquiry.createdAt,
              createdByName: "Legacy note",
              createdByRole: "",
            },
          ]
        : []
    : [];

  const selectedTasks = selectedInquiry
    ? (selectedInquiry.tasks || []).slice().sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    : [];

  const selectedEmailTemplateData = emailTemplates.find((item) => item.key === selectedEmailTemplate) || null;
  const selectedWhatsAppTemplateData = whatsappTemplates.find((item) => item.key === selectedWhatsAppTemplate) || null;

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading inquiries...</div>;
  }

  if (!canManageInquiries) {
    return (
      <div className="container mx-auto space-y-6 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lead Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Inquiries</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review callback requests, consultation inquiries, and contact form submissions from the public site.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-amber-700">
              Access denied. Only admin and content-manager accounts can open the inquiries dashboard.
            </p>
            <p className="text-sm text-slate-600">
              Your current role is <span className="font-medium text-slate-900">{user?.role || "unknown"}</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="container mx-auto space-y-6 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lead Management</p>
          <h1 className="text-3xl font-semibold text-slate-950">Inquiries</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review callback requests, consultation inquiries, and contact form submissions from the public site.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={loadInquiries}>Try Again</Button>
              <Button asChild variant="outline">
                <Link to="/login">Go to Sign In</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lead CRM</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Inquiries</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage consultation leads with reminders, task ownership, reusable templates, and cleaner operational follow-up.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{filteredInquiries.length}</span> of{" "}
          <span className="font-medium text-slate-900">{inquiries.length}</span> inquiries
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5 xl:grid-cols-10">
        <MetricCard title="Total" value={metrics.total} />
        <MetricCard title="New" value={metrics.new} />
        <MetricCard title="Contacted" value={metrics.contacted} />
        <MetricCard title="Follow-up" value={metrics.followUp} />
        <MetricCard title="Qualified" value={metrics.qualified} />
        <MetricCard title="Closed" value={metrics.closed} />
        <MetricCard title="Lost" value={metrics.lost} />
        <MetricCard title="Overdue" value={metrics.overdueFollowUps} variant="warning" />
        <MetricCard title="Unassigned" value={metrics.unassigned} variant="warning" />
        <MetricCard title="Tasks due" value={metrics.tasksDueToday} variant="warning" />
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        {notificationCards.map((card) => {
          const bucket = notifications[card.key];
          return (
            <Card key={card.key} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{card.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{card.description}</p>
                  </div>
                  <BellRing className="h-4 w-4 text-blue-700" />
                </div>
                <p className="text-3xl font-semibold text-slate-950">{bucket.count}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        <NotificationListCard
          title="Overdue follow-ups"
          items={notifications.overdueFollowUps.sample}
          renderItem={(item) => (
            <div className="text-sm text-slate-700">
              <p className="font-medium text-slate-900">{item.name}</p>
              <p>{formatDateTime(item.nextFollowUpAt)}</p>
              <p>{item.assignedTo?.name || "Unassigned"}</p>
            </div>
          )}
        />
        <NotificationListCard
          title="Unassigned inquiries"
          items={notifications.unassignedInquiries.sample}
          renderItem={(item) => (
            <div className="text-sm text-slate-700">
              <p className="font-medium text-slate-900">{item.name}</p>
              <p>{formatSource(item.source)}</p>
              <p>{formatDateTime(item.createdAt)}</p>
            </div>
          )}
        />
        <NotificationListCard
          title="Stale inquiries"
          items={notifications.staleInquiries.sample}
          renderItem={(item) => (
            <div className="text-sm text-slate-700">
              <p className="font-medium text-slate-900">{item.name}</p>
              <p>{formatStatusLabel(item.status)}</p>
              <p>Updated {formatDateTime(item.updatedAt)}</p>
            </div>
          )}
        />
        <NotificationListCard
          title="Tasks due today"
          items={notifications.tasksDueToday.sample}
          renderItem={(item) => (
            <div className="text-sm text-slate-700">
              <p className="font-medium text-slate-900">{item.title}</p>
              <p>{item.inquiryName}</p>
              <p>{formatDateTime(item.dueDate)}</p>
            </div>
          )}
        />
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1.2fr_repeat(5,minmax(0,1fr))]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by student, contact info, destination, exam, or assignee"
                className="pl-10"
              />
            </div>
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as typeof statusFilter)}
                className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={sourceFilter}
              onChange={(event) => setSourceFilter(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All sources</option>
              {meta.sources.map((source) => (
                <option key={source} value={source}>
                  {formatSource(source)}
                </option>
              ))}
            </select>
            <select
              value={destinationFilter}
              onChange={(event) => setDestinationFilter(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All destinations</option>
              {meta.destinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
            <select
              value={examFilter}
              onChange={(event) => setExamFilter(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All exams</option>
              {meta.examInterests.map((exam) => (
                <option key={exam} value={exam}>
                  {exam}
                </option>
              ))}
            </select>
            <select
              value={assignedFilter}
              onChange={(event) => setAssignedFilter(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All assignees</option>
              <option value="unassigned">Unassigned</option>
              {meta.assignableUsers.map((staff) => (
                <option key={staff._id} value={staff._id}>
                  {staff.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredInquiries.length === 0 ? (
          <Card>
            <CardContent className="p-10 text-center">
              <p className="text-lg font-medium text-slate-900">No inquiries match your current filters.</p>
              <p className="mt-2 text-sm text-slate-500">
                Adjust your search or filters to review more CRM records.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredInquiries.map((inquiry) => {
            const whatsappLink = buildWhatsAppLink(inquiry.phone);
            const isOverdue = getInquiryOverdueState(inquiry);
            const pendingTasks = (inquiry.tasks || []).filter((task) => !["completed", "cancelled"].includes(task.status)).length;

            return (
              <Card key={inquiry._id} className="border-slate-200 shadow-sm">
                <CardContent className="space-y-5 p-6">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-semibold text-slate-950">{inquiry.name}</h2>
                        <Badge className={statusClasses[inquiry.status]}>{formatStatusLabel(inquiry.status)}</Badge>
                        <Badge variant="outline">{formatSource(inquiry.source)}</Badge>
                        {inquiry.assignedTo ? (
                          <Badge variant="outline" className="gap-1">
                            <UserRoundCheck className="h-3.5 w-3.5" />
                            {inquiry.assignedTo.name}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-slate-500">Unassigned</Badge>
                        )}
                        {isOverdue ? <Badge className="bg-rose-100 text-rose-700">Follow-up overdue</Badge> : null}
                        {pendingTasks > 0 ? (
                          <Badge className="bg-slate-100 text-slate-700">{pendingTasks} active task{pendingTasks > 1 ? "s" : ""}</Badge>
                        ) : null}
                      </div>
                      <p className="text-sm text-slate-500">{formatDateTime(inquiry.createdAt)}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {inquiry.email ? (
                        <>
                          <Button variant="outline" size="sm" className="gap-2" onClick={() => handleCopy(inquiry.email, "Email")}>
                            <Copy className="h-4 w-4" />
                            Copy Email
                          </Button>
                          <Button asChild variant="outline" size="sm" className="gap-2">
                            <a href={`mailto:${inquiry.email}`}>
                              <Mail className="h-4 w-4" />
                              Email
                            </a>
                          </Button>
                        </>
                      ) : null}
                      {inquiry.phone ? (
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => handleCopy(inquiry.phone, "Phone")}>
                          <Copy className="h-4 w-4" />
                          Copy Phone
                        </Button>
                      ) : null}
                      {whatsappLink ? (
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href={whatsappLink} target="_blank" rel="noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                          </a>
                        </Button>
                      ) : null}
                      <Button size="sm" className="gap-2" onClick={() => setSelectedInquiryId(inquiry._id)}>
                        <ExternalLink className="h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2 xl:grid-cols-4">
                    <p><span className="font-medium">Email:</span> {inquiry.email || "Not provided"}</p>
                    <p><span className="font-medium">Phone:</span> {inquiry.phone || "Not provided"}</p>
                    <p><span className="font-medium">Destination:</span> {inquiry.destination || "Not provided"}</p>
                    <p><span className="font-medium">Qualification:</span> {inquiry.qualification || "Not provided"}</p>
                    <p><span className="font-medium">Expected intake:</span> {inquiry.intake || "Not provided"}</p>
                    <p><span className="font-medium">Exam interest:</span> {inquiry.examInterest || "Not provided"}</p>
                    <p><span className="font-medium">Follow-up:</span> {formatDateTime(inquiry.nextFollowUpAt)}</p>
                    <p><span className="font-medium">Updated:</span> {formatDateTime(inquiry.updatedAt)}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-900">Student message</p>
                    <p className="mt-2 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                      {inquiry.message || "No additional message provided."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      <Dialog open={Boolean(selectedInquiry)} onOpenChange={(open) => !open && setSelectedInquiryId(null)}>
        <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto">
          {selectedInquiry ? (
            <>
              <DialogHeader>
                <DialogTitle>{selectedInquiry.name}</DialogTitle>
                <DialogDescription>
                  Review the full lead profile, schedule follow-ups, assign staff, manage tasks, and keep the CRM activity timeline current.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge className={statusClasses[selectedInquiry.status]}>
                          {formatStatusLabel(selectedInquiry.status)}
                        </Badge>
                        <Badge variant="outline">{formatSource(selectedInquiry.source)}</Badge>
                        {getInquiryOverdueState(selectedInquiry) ? (
                          <Badge className="bg-rose-100 text-rose-700">Overdue follow-up</Badge>
                        ) : null}
                      </div>

                      <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                        <p><span className="font-medium">Email:</span> {selectedInquiry.email || "Not provided"}</p>
                        <p><span className="font-medium">Phone:</span> {selectedInquiry.phone || "Not provided"}</p>
                        <p><span className="font-medium">Destination:</span> {selectedInquiry.destination || "Not provided"}</p>
                        <p><span className="font-medium">Qualification:</span> {selectedInquiry.qualification || "Not provided"}</p>
                        <p><span className="font-medium">Intake:</span> {selectedInquiry.intake || "Not provided"}</p>
                        <p><span className="font-medium">Exam interest:</span> {selectedInquiry.examInterest || "Not provided"}</p>
                        <p><span className="font-medium">Created:</span> {formatDateTime(selectedInquiry.createdAt)}</p>
                        <p><span className="font-medium">Updated:</span> {formatDateTime(selectedInquiry.updatedAt)}</p>
                        <p><span className="font-medium">Follow-up due:</span> {formatDateTime(selectedInquiry.nextFollowUpAt)}</p>
                        <p><span className="font-medium">Follow-up completed:</span> {formatDateTime(selectedInquiry.followUpCompletedAt)}</p>
                        <p className="sm:col-span-2"><span className="font-medium">Assigned user:</span> {selectedInquiry.assignedTo?.name || "Not assigned"}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-900">Student message</p>
                        <p className="rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                          {selectedInquiry.message || "No additional message provided."}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() => handleCopy(buildLeadSummary(selectedInquiry), "Lead summary")}
                        >
                          <Copy className="h-4 w-4" />
                          Copy Lead Summary
                        </Button>
                        {selectedInquiry.email ? (
                          <Button asChild variant="outline" className="gap-2">
                            <a href={`mailto:${selectedInquiry.email}`}>
                              <Mail className="h-4 w-4" />
                              Email Lead
                            </a>
                          </Button>
                        ) : null}
                        {selectedInquiry.phone ? (
                          <Button asChild variant="outline" className="gap-2">
                            <a href={buildWhatsAppLink(selectedInquiry.phone) || "#"} target="_blank" rel="noreferrer">
                              <MessageCircle className="h-4 w-4" />
                              Open WhatsApp
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-900">Pipeline status</p>
                        <select
                          value={selectedInquiry.status}
                          onChange={(event) =>
                            handleUpdateInquiry(
                              selectedInquiry,
                              {
                                status: event.target.value as InquiryStatus,
                              },
                              "Pipeline status updated."
                            )
                          }
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                          disabled={savingId === selectedInquiry._id}
                        >
                          {meta.statuses.map((status) => (
                            <option key={status} value={status}>
                              {formatStatusLabel(status)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-900">Assign to staff</p>
                        <select
                          value={selectedInquiry.assignedTo?._id || "unassigned"}
                          onChange={(event) =>
                            handleUpdateInquiry(
                              selectedInquiry,
                              {
                                assignedTo: event.target.value === "unassigned" ? null : event.target.value,
                              },
                              "Assignee updated."
                            )
                          }
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                          disabled={savingId === selectedInquiry._id}
                        >
                          <option value="unassigned">Unassigned</option>
                          {meta.assignableUsers.map((staff) => (
                            <option key={staff._id} value={staff._id}>
                              {staff.name} ({staff.role})
                            </option>
                          ))}
                        </select>
                      </div>

                      {savingId === selectedInquiry._id ? (
                        <p className="text-xs text-slate-500">Saving update...</p>
                      ) : null}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Follow-up reminder</p>
                        <p className="mt-1 text-sm text-slate-500">
                          Schedule the next contact point and mark it complete once the conversation is done.
                        </p>
                      </div>
                      <Input
                        type="datetime-local"
                        value={followUpDraft}
                        onChange={(event) => setFollowUpDraft(event.target.value)}
                      />
                      <div className="flex flex-wrap gap-2">
                        <Button
                          className="gap-2"
                          onClick={() => {
                            if (!followUpDraft) {
                              toast.error("Please choose a follow-up date and time.");
                              return;
                            }
                            handleUpdateInquiry(
                              selectedInquiry,
                              { nextFollowUpAt: new Date(followUpDraft).toISOString() },
                              "Follow-up scheduled."
                            );
                          }}
                          disabled={savingId === selectedInquiry._id}
                        >
                          <CalendarClock className="h-4 w-4" />
                          Schedule Follow-up
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() =>
                            handleUpdateInquiry(
                              selectedInquiry,
                              { completeFollowUp: true },
                              "Follow-up marked as completed."
                            )
                          }
                          disabled={savingId === selectedInquiry._id || !selectedInquiry.nextFollowUpAt}
                        >
                          <CheckCheck className="h-4 w-4" />
                          Mark Completed
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() =>
                            handleUpdateInquiry(
                              selectedInquiry,
                              { nextFollowUpAt: null },
                              "Follow-up reminder cleared."
                            )
                          }
                          disabled={savingId === selectedInquiry._id || !selectedInquiry.nextFollowUpAt}
                        >
                          Clear Reminder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Add CRM note</p>
                        <p className="mt-1 text-sm text-slate-500">
                          Save follow-up details, counselor updates, or qualification notes.
                        </p>
                      </div>
                      <Textarea
                        value={noteDraft}
                        onChange={(event) => setNoteDraft(event.target.value)}
                        placeholder="Add a new follow-up note..."
                        className="min-h-28"
                      />
                      <div className="flex justify-end">
                        <Button
                          onClick={() => {
                            if (!noteDraft.trim()) {
                              toast.error("Please write a note before saving.");
                              return;
                            }
                            handleUpdateInquiry(selectedInquiry, { note: noteDraft.trim() }, "CRM note saved.").then(() => {
                              setNoteDraft("");
                            });
                          }}
                          disabled={savingId === selectedInquiry._id}
                        >
                          Save Note
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="h-4 w-4 text-blue-700" />
                        <p className="text-sm font-medium text-slate-900">Tasks</p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-[1.2fr_0.95fr_0.85fr]">
                        <Input
                          value={taskTitleDraft}
                          onChange={(event) => setTaskTitleDraft(event.target.value)}
                          placeholder="Task title"
                        />
                        <Input
                          type="datetime-local"
                          value={taskDueDateDraft}
                          onChange={(event) => setTaskDueDateDraft(event.target.value)}
                        />
                        <select
                          value={taskAssigneeDraft}
                          onChange={(event) => setTaskAssigneeDraft(event.target.value)}
                          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                        >
                          <option value="unassigned">Unassigned</option>
                          {meta.assignableUsers.map((staff) => (
                            <option key={staff._id} value={staff._id}>
                              {staff.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          onClick={() => {
                            if (!taskTitleDraft.trim() || !taskDueDateDraft) {
                              toast.error("Please add a task title and due date.");
                              return;
                            }

                            handleUpdateInquiry(
                              selectedInquiry,
                              {
                                task: {
                                  action: "create",
                                  title: taskTitleDraft.trim(),
                                  dueDate: new Date(taskDueDateDraft).toISOString(),
                                  assignedTo: taskAssigneeDraft === "unassigned" ? null : taskAssigneeDraft,
                                },
                              },
                              "Task created."
                            ).then(() => {
                              setTaskTitleDraft("");
                              setTaskDueDateDraft("");
                              setTaskAssigneeDraft(selectedInquiry.assignedTo?._id || "unassigned");
                            });
                          }}
                          disabled={savingId === selectedInquiry._id}
                        >
                          Create Task
                        </Button>
                      </div>

                      <div className="space-y-3">
                        {selectedTasks.length === 0 ? (
                          <p className="text-sm text-slate-500">No tasks are linked to this inquiry yet.</p>
                        ) : (
                          selectedTasks.map((task) => (
                            <div key={task._id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                <div className="space-y-1">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <p className="font-medium text-slate-900">{task.title}</p>
                                    <Badge className={taskStatusClasses[task.status]}>{formatStatusLabel(task.status)}</Badge>
                                  </div>
                                  <p className="text-sm text-slate-600">Due {formatDateTime(task.dueDate)}</p>
                                  <p className="text-sm text-slate-500">
                                    Assigned to {task.assignedTo?.name || "Unassigned"}
                                  </p>
                                </div>
                                <select
                                  value={task.status}
                                  onChange={(event) =>
                                    handleUpdateInquiry(
                                      selectedInquiry,
                                      {
                                        task: {
                                          action: "update",
                                          taskId: task._id,
                                          status: event.target.value as TaskStatus,
                                        },
                                      },
                                      "Task updated."
                                    )
                                  }
                                  className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                                  disabled={savingId === selectedInquiry._id}
                                >
                                  {meta.taskStatuses.map((status) => (
                                    <option key={status} value={status}>
                                      {formatStatusLabel(status)}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <div>
                        <p className="text-sm font-medium text-slate-900">Communication templates</p>
                        <p className="mt-1 text-sm text-slate-500">
                          Open reusable email or WhatsApp templates and log the action in the CRM timeline.
                        </p>
                      </div>

                      <div className="grid gap-4 xl:grid-cols-2">
                        <div className="space-y-3 rounded-xl border border-slate-200 p-4">
                          <p className="text-sm font-medium text-slate-900">Email template</p>
                          <select
                            value={selectedEmailTemplate}
                            onChange={(event) => setSelectedEmailTemplate(event.target.value)}
                            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                          >
                            {emailTemplates.map((template) => (
                              <option key={template.key} value={template.key}>
                                {template.label}
                              </option>
                            ))}
                          </select>
                          {selectedEmailTemplateData ? (
                            <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                              <p className="font-medium text-slate-900">
                                {applyTemplate(selectedEmailTemplateData, selectedInquiry, user?.name || "Abroadways").subject}
                              </p>
                            </div>
                          ) : null}
                          <Button
                            variant="outline"
                            className="w-full gap-2"
                            disabled={!selectedInquiry.email || !selectedEmailTemplateData || savingId === selectedInquiry._id}
                            onClick={async () => {
                              if (!selectedInquiry.email || !selectedEmailTemplateData) return;
                              const prepared = applyTemplate(selectedEmailTemplateData, selectedInquiry, user?.name || "Abroadways");
                              const updated = await handleUpdateInquiry(
                                selectedInquiry,
                                {
                                  templateAction: {
                                    templateKey: selectedEmailTemplateData.key,
                                    channel: "email",
                                    recipient: selectedInquiry.email,
                                  },
                                },
                                "Email template opened."
                              );
                              setSelectedInquiryId(updated._id);
                              window.open(
                                `mailto:${selectedInquiry.email}?subject=${encodeURIComponent(prepared.subject)}&body=${encodeURIComponent(prepared.body)}`,
                                "_blank"
                              );
                            }}
                          >
                            <Mail className="h-4 w-4" />
                            Open Email Template
                          </Button>
                        </div>

                        <div className="space-y-3 rounded-xl border border-slate-200 p-4">
                          <p className="text-sm font-medium text-slate-900">WhatsApp template</p>
                          <select
                            value={selectedWhatsAppTemplate}
                            onChange={(event) => setSelectedWhatsAppTemplate(event.target.value)}
                            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                          >
                            {whatsappTemplates.map((template) => (
                              <option key={template.key} value={template.key}>
                                {template.label}
                              </option>
                            ))}
                          </select>
                          {selectedWhatsAppTemplateData ? (
                            <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                              {applyTemplate(selectedWhatsAppTemplateData, selectedInquiry, user?.name || "Abroadways").body}
                            </div>
                          ) : null}
                          <Button
                            variant="outline"
                            className="w-full gap-2"
                            disabled={!selectedInquiry.phone || !selectedWhatsAppTemplateData || savingId === selectedInquiry._id}
                            onClick={async () => {
                              if (!selectedInquiry.phone || !selectedWhatsAppTemplateData) return;
                              const prepared = applyTemplate(selectedWhatsAppTemplateData, selectedInquiry, user?.name || "Abroadways");
                              const updated = await handleUpdateInquiry(
                                selectedInquiry,
                                {
                                  templateAction: {
                                    templateKey: selectedWhatsAppTemplateData.key,
                                    channel: "whatsapp",
                                    recipient: selectedInquiry.phone,
                                  },
                                },
                                "WhatsApp template opened."
                              );
                              setSelectedInquiryId(updated._id);
                              const whatsappUrl = buildWhatsAppLink(selectedInquiry.phone, prepared.body);
                              if (whatsappUrl) {
                                window.open(whatsappUrl, "_blank");
                              }
                            }}
                          >
                            <MessageCircle className="h-4 w-4" />
                            Open WhatsApp Template
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <p className="text-sm font-medium text-slate-900">Notes timeline</p>
                      <div className="space-y-4">
                        {selectedNotes.length === 0 ? (
                          <p className="text-sm text-slate-500">No notes have been added yet.</p>
                        ) : (
                          selectedNotes
                            .slice()
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                            .map((note) => (
                              <div key={note._id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                  <span>{note.createdByName || "Team"}</span>
                                  {note.createdByRole ? <span>&bull; {note.createdByRole}</span> : null}
                                  <span>&bull; {formatDateTime(note.createdAt)}</span>
                                </div>
                                <p className="mt-2 text-sm leading-7 text-slate-700">{note.body}</p>
                              </div>
                            ))
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="space-y-4 p-5">
                      <p className="text-sm font-medium text-slate-900">Activity history</p>
                      <div className="space-y-3">
                        {(selectedInquiry.activity || []).length === 0 ? (
                          <p className="text-sm text-slate-500">No CRM activity has been recorded yet.</p>
                        ) : (
                          (selectedInquiry.activity || [])
                            .slice()
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                            .map((activity) => (
                              <div key={activity._id} className="rounded-xl border border-slate-200 bg-white p-4">
                                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                  <span className="font-medium uppercase tracking-[0.16em] text-slate-700">
                                    {activity.type}
                                  </span>
                                  {activity.createdByName ? <span>&bull; {activity.createdByName}</span> : null}
                                  <span>&bull; {formatDateTime(activity.createdAt)}</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-700">{activity.message}</p>
                              </div>
                            ))
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MetricCard({
  title,
  value,
  variant = "default",
}: {
  title: string;
  value: number;
  variant?: "default" | "warning";
}) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="space-y-2 p-5">
        <p className="text-sm text-slate-500">{title}</p>
        <p className={`text-3xl font-semibold ${variant === "warning" ? "text-amber-700" : "text-slate-950"}`}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

function NotificationListCard<T>({
  title,
  items,
  renderItem,
}: {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="space-y-4 p-5">
        <p className="text-sm font-medium text-slate-900">{title}</p>
        {items.length === 0 ? (
          <p className="text-sm text-slate-500">No items right now.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                {renderItem(item)}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
