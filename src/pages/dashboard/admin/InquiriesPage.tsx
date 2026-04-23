import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import {
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
  type: "created" | "status" | "assignment" | "note";
  message: string;
  createdAt: string;
  createdByName?: string;
  createdByRole?: string;
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
  createdAt: string;
  updatedAt: string;
};

type InquiryMeta = {
  assignableUsers: AssignedUser[];
  destinations: string[];
  examInterests: string[];
  sources: string[];
  statuses: InquiryStatus[];
};

type InquiryMetrics = {
  total: number;
  new: number;
  contacted: number;
  followUp: number;
  qualified: number;
  closed: number;
  lost: number;
};

const calculateMetrics = (records: Inquiry[]): InquiryMetrics => ({
  total: records.length,
  new: records.filter((item) => item.status === "new").length,
  contacted: records.filter((item) => item.status === "contacted").length,
  followUp: records.filter((item) => item.status === "follow-up").length,
  qualified: records.filter((item) => item.status === "qualified").length,
  closed: records.filter((item) => item.status === "closed").length,
  lost: records.filter((item) => item.status === "lost").length,
});

const statusClasses: Record<InquiryStatus, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-amber-100 text-amber-700",
  "follow-up": "bg-violet-100 text-violet-700",
  qualified: "bg-emerald-100 text-emerald-700",
  closed: "bg-slate-200 text-slate-700",
  lost: "bg-rose-100 text-rose-700",
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

const formatSource = (source: string) =>
  source
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const formatStatusLabel = (value: InquiryStatus) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

const buildWhatsAppLink = (phone?: string) => {
  if (!phone) return null;
  const digits = phone.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : null;
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
  });
  const [metrics, setMetrics] = useState<InquiryMetrics>({
    total: 0,
    new: 0,
    contacted: 0,
    followUp: 0,
    qualified: 0,
    closed: 0,
    lost: 0,
  });
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
  const canManageInquiries = user ? ["admin", "content-manager"].includes(user.role) : false;

  const selectedInquiry =
    inquiries.find((item) => item._id === selectedInquiryId) || null;

  const loadInquiries = async () => {
    if (!canManageInquiries) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const [inquiriesResponse, metaResponse, metricsResponse] = await Promise.all([
        inquiriesApi.getAll(),
        inquiriesApi.getMeta(),
        inquiriesApi.getMetrics(),
      ]);

      setInquiries(Array.isArray(inquiriesResponse.data) ? inquiriesResponse.data : []);
      setMeta({
        assignableUsers: Array.isArray(metaResponse.data?.assignableUsers) ? metaResponse.data.assignableUsers : [],
        destinations: Array.isArray(metaResponse.data?.destinations) ? metaResponse.data.destinations : [],
        examInterests: Array.isArray(metaResponse.data?.examInterests) ? metaResponse.data.examInterests : [],
        sources: Array.isArray(metaResponse.data?.sources) ? metaResponse.data.sources : [],
        statuses: Array.isArray(metaResponse.data?.statuses) ? metaResponse.data.statuses : [],
      });
      setMetrics({
        total: metricsResponse.data?.total || 0,
        new: metricsResponse.data?.new || 0,
        contacted: metricsResponse.data?.contacted || 0,
        followUp: metricsResponse.data?.followUp || 0,
        qualified: metricsResponse.data?.qualified || 0,
        closed: metricsResponse.data?.closed || 0,
        lost: metricsResponse.data?.lost || 0,
      });
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
    if (selectedInquiry) {
      setNoteDraft("");
    }
  }, [selectedInquiryId]);

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

  const refreshWithUpdatedInquiry = (updated: Inquiry) => {
    setInquiries((prev) => {
      const updatedList = prev.map((item) => (item._id === updated._id ? updated : item));
      setMetrics(calculateMetrics(updatedList));
      return updatedList;
    });
  };

  const handleUpdateInquiry = async (
    inquiry: Inquiry,
    payload: {
      status?: InquiryStatus;
      note?: string;
      assignedTo?: string | null;
    }
  ) => {
    try {
      setSavingId(inquiry._id);
      const response = await inquiriesApi.update(inquiry._id, payload);
      refreshWithUpdatedInquiry(response.data);
      toast.success("Inquiry updated.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to update inquiry.");
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
    ? (selectedInquiry.notes && selectedInquiry.notes.length > 0
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
          : [])
    : [];

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
            Manage consultation leads with a clearer CRM pipeline, assignment, and follow-up workflow.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{filteredInquiries.length}</span> of{" "}
          <span className="font-medium text-slate-900">{inquiries.length}</span> inquiries
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-7">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total</p><p className="mt-2 text-3xl font-semibold">{metrics.total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">New</p><p className="mt-2 text-3xl font-semibold">{metrics.new}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Contacted</p><p className="mt-2 text-3xl font-semibold">{metrics.contacted}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Follow-up</p><p className="mt-2 text-3xl font-semibold">{metrics.followUp}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Qualified</p><p className="mt-2 text-3xl font-semibold">{metrics.qualified}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Closed</p><p className="mt-2 text-3xl font-semibold">{metrics.closed}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Lost</p><p className="mt-2 text-3xl font-semibold">{metrics.lost}</p></CardContent></Card>
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
                    <p><span className="font-medium">Assigned to:</span> {inquiry.assignedTo?.name || "Not assigned"}</p>
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
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto">
          {selectedInquiry ? (
            <>
              <DialogHeader>
                <DialogTitle>{selectedInquiry.name}</DialogTitle>
                <DialogDescription>
                  Review the full lead profile, update pipeline status, assign staff, and keep the CRM timeline current.
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
                        <p className="sm:col-span-2"><span className="font-medium">Assigned user:</span> {selectedInquiry.assignedTo?.name || "Not assigned"}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-900">Student message</p>
                        <p className="rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                          {selectedInquiry.message || "No additional message provided."}
                        </p>
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
                            handleUpdateInquiry(selectedInquiry, {
                              status: event.target.value as InquiryStatus,
                            })
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
                            handleUpdateInquiry(selectedInquiry, {
                              assignedTo: event.target.value === "unassigned" ? null : event.target.value,
                            })
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
                            handleUpdateInquiry(selectedInquiry, { note: noteDraft.trim() }).then(() => {
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
                                  {note.createdByRole ? <span>• {note.createdByRole}</span> : null}
                                  <span>• {formatDateTime(note.createdAt)}</span>
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
                                  {activity.createdByName ? <span>• {activity.createdByName}</span> : null}
                                  <span>• {formatDateTime(activity.createdAt)}</span>
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
