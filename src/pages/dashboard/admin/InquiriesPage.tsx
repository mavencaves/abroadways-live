import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

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
  status: "new" | "contacted" | "closed";
  adminNotes?: string;
  createdAt: string;
};

const statusClasses: Record<Inquiry["status"], string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-amber-100 text-amber-700",
  closed: "bg-emerald-100 text-emerald-700",
};

const statusOptions = [
  { value: "all", label: "All statuses" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
] as const;

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
] as const;

const formatSource = (source: string) =>
  source
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export default function InquiriesPage() {
  const { user } = useAuth();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<(typeof statusOptions)[number]["value"]>("all");
  const [sortOrder, setSortOrder] = useState<(typeof sortOptions)[number]["value"]>("newest");
  const canManageInquiries = user ? ["admin", "content-manager"].includes(user.role) : false;

  const loadInquiries = async () => {
    if (!canManageInquiries) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await inquiriesApi.getAll();
      setInquiries(Array.isArray(response.data) ? response.data : []);
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

  const filteredInquiries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const results = inquiries.filter((inquiry) => {
      const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;

      if (!normalizedSearch) {
        return matchesStatus;
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
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesStatus && haystack.includes(normalizedSearch);
    });

    return results.sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
    });
  }, [inquiries, searchTerm, sortOrder, statusFilter]);

  const handleStatusChange = async (inquiry: Inquiry, status: Inquiry["status"]) => {
    try {
      setSavingId(inquiry._id);
      const response = await inquiriesApi.update(inquiry._id, {
        status,
        adminNotes: inquiry.adminNotes || "",
      });
      setInquiries((prev) => prev.map((item) => (item._id === inquiry._id ? response.data : item)));
      toast.success("Inquiry updated.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to update inquiry.");
    } finally {
      setSavingId(null);
    }
  };

  const handleNotesBlur = async (inquiry: Inquiry, adminNotes: string) => {
    try {
      setSavingId(inquiry._id);
      const response = await inquiriesApi.update(inquiry._id, {
        status: inquiry.status,
        adminNotes,
      });
      setInquiries((prev) => prev.map((item) => (item._id === inquiry._id ? response.data : item)));
      toast.success("Notes saved.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save notes.");
    } finally {
      setSavingId(null);
    }
  };

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lead Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Inquiries</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Review callback requests, consultation bookings, and contact form submissions from across the Abroadways site.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{filteredInquiries.length}</span> of{" "}
          <span className="font-medium text-slate-900">{inquiries.length}</span> inquiries
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Total inquiries</p>
            <p className="mt-2 text-3xl font-semibold">{inquiries.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">New</p>
            <p className="mt-2 text-3xl font-semibold">{inquiries.filter((item) => item.status === "new").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Contacted</p>
            <p className="mt-2 text-3xl font-semibold">
              {inquiries.filter((item) => item.status === "contacted").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Closed</p>
            <p className="mt-2 text-3xl font-semibold">{inquiries.filter((item) => item.status === "closed").length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by student, email, phone, destination, exam, or message"
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
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
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
                Try a different search term or switch back to all statuses to see more submissions.
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredInquiries.map((inquiry) => (
            <Card key={inquiry._id} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-5 p-6">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-slate-950">{inquiry.name}</h2>
                      <Badge className={statusClasses[inquiry.status]}>{inquiry.status}</Badge>
                      <Badge variant="outline">{formatSource(inquiry.source)}</Badge>
                    </div>
                    <p className="text-sm text-slate-500">{formatDateTime(inquiry.createdAt)}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      disabled={savingId === inquiry._id}
                      onClick={() => handleStatusChange(inquiry, "new")}
                    >
                      Mark New
                    </Button>
                    <Button
                      variant="outline"
                      disabled={savingId === inquiry._id}
                      onClick={() => handleStatusChange(inquiry, "contacted")}
                    >
                      Mark Contacted
                    </Button>
                    <Button
                      variant="outline"
                      disabled={savingId === inquiry._id}
                      onClick={() => handleStatusChange(inquiry, "closed")}
                    >
                      Mark Closed
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
                  <p className="md:col-span-2 xl:col-span-2">
                    <span className="font-medium">Lead source:</span> {formatSource(inquiry.source)}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-900">Student message</p>
                  <p className="mt-2 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    {inquiry.message || "No additional message provided."}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-900">Admin notes</p>
                  <Textarea
                    defaultValue={inquiry.adminNotes || ""}
                    placeholder="Add follow-up notes for the team..."
                    className="min-h-24"
                    onBlur={(event) => handleNotesBlur(inquiry, event.target.value)}
                  />
                  {savingId === inquiry._id ? (
                    <p className="mt-2 text-xs text-slate-500">Saving update...</p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
