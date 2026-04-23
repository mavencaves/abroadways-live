import { useEffect, useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { studentApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ReviewStatus = "under-review" | "approved" | "rejected" | "needs-resubmission";

type AdminDocumentItem = {
  profileId: string;
  documentId: string;
  student: {
    userId?: string | null;
    name: string;
    email: string;
  };
  applicationStage?: string;
  document: {
    _id: string;
    title: string;
    type?: string;
    status: string;
    notes?: string;
    reviewNotes?: string;
    fileUrl?: string;
    originalFileName?: string;
    fileName?: string;
    resourceType?: string;
    mimeType?: string;
    uploadedAt?: string | null;
    reviewedAt?: string | null;
    reviewedBy?: {
      _id?: string;
      name?: string;
      email?: string;
      role?: string;
    } | null;
  };
};

const STATUS_STYLES: Record<string, string> = {
  uploaded: "bg-blue-100 text-blue-800",
  "under-review": "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-rose-100 text-rose-800",
  "needs-resubmission": "bg-orange-100 text-orange-800",
};

const formatLabel = (value?: string) =>
  String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || "Unspecified";

const formatDateTime = (value?: string | null) =>
  value
    ? new Date(value).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "Not available";

const getDocumentLinkMeta = (document: AdminDocumentItem["document"]) => {
  const mimeType = String(document.mimeType || "").toLowerCase();
  const fileName = String(document.originalFileName || document.fileName || "").toLowerCase();
  const resourceType = String(document.resourceType || "").toLowerCase();
  const isImage = resourceType === "image" || mimeType.startsWith("image/");
  const isPdf = mimeType === "application/pdf" || fileName.endsWith(".pdf");

  if (isImage) return { label: "Open image", shouldDownload: false };
  if (isPdf) return { label: "Open PDF", shouldDownload: false };
  return { label: "Download file", shouldDownload: true };
};

export default function DocumentsPage() {
  const { user } = useAuth();
  const canReviewDocuments = user?.role === "admin" || user?.role === "content-manager";
  const [items, setItems] = useState<AdminDocumentItem[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [documentTypes, setDocumentTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [studentQuery, setStudentQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<AdminDocumentItem | null>(null);
  const [reviewStatus, setReviewStatus] = useState<ReviewStatus>("under-review");
  const [reviewNotes, setReviewNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    if (!canReviewDocuments) return;

    let isMounted = true;

    const loadDocuments = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        const response = await studentApi.getAdminDocuments({
          q: query.trim() || undefined,
          student: studentQuery.trim() || undefined,
          status: statusFilter !== "all" ? statusFilter : undefined,
          type: typeFilter !== "all" ? typeFilter : undefined,
        });

        if (!isMounted) return;

        setItems(Array.isArray(response.data?.items) ? response.data.items : []);
        setStatuses(Array.isArray(response.data?.statuses) ? response.data.statuses : []);
        setDocumentTypes(Array.isArray(response.data?.documentTypes) ? response.data.documentTypes : []);
      } catch (error: any) {
        if (!isMounted) return;
        const status = error?.response?.status;
        const message =
          status === 401
            ? "Your session has expired. Please sign in again."
            : status === 403
              ? "Only admin and content-manager accounts can review documents."
              : error?.response?.data?.message || "Failed to load student documents.";
        setLoadError(message);
        toast.error(message);
        setItems([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadDocuments();

    return () => {
      isMounted = false;
    };
  }, [canReviewDocuments, query, refreshToken, statusFilter, studentQuery, typeFilter]);

  useEffect(() => {
    if (!selectedItem) return;
    setReviewStatus(
      ["under-review", "approved", "rejected", "needs-resubmission"].includes(selectedItem.document.status)
        ? (selectedItem.document.status as ReviewStatus)
        : "under-review"
    );
    setReviewNotes(selectedItem.document.reviewNotes || "");
  }, [selectedItem]);

  const summary = useMemo(
    () => ({
      total: items.length,
      waiting: items.filter((item) => ["uploaded", "under-review"].includes(item.document.status)).length,
      approved: items.filter((item) => item.document.status === "approved").length,
      actionNeeded: items.filter((item) => ["rejected", "needs-resubmission"].includes(item.document.status)).length,
    }),
    [items]
  );

  if (!canReviewDocuments) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Document Review</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Student Documents</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review uploaded student files, confirm approvals, and request resubmissions from one workspace.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin and content-manager accounts can review student documents.</p>
            </div>
            <p className="text-sm text-slate-600">
              Your current role is <span className="font-medium text-slate-900">{user?.role || "unknown"}</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Document Review</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Student Documents</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Review uploaded student files, confirm approvals, and request resubmissions from one workspace.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total uploads</p><p className="mt-2 text-3xl font-semibold">{summary.total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Waiting review</p><p className="mt-2 text-3xl font-semibold text-blue-700">{summary.waiting}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Approved</p><p className="mt-2 text-3xl font-semibold text-emerald-700">{summary.approved}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Needs action</p><p className="mt-2 text-3xl font-semibold text-orange-700">{summary.actionNeeded}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_220px_220px_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by document title or filename" className="pl-10" />
            </div>
            <Input value={studentQuery} onChange={(event) => setStudentQuery(event.target.value)} placeholder="Filter by student name or email" />
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All statuses</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {formatLabel(status)}
                </option>
              ))}
            </select>
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All document types</option>
              {documentTypes.map((type) => (
                <option key={type} value={type}>
                  {formatLabel(type)}
                </option>
              ))}
            </select>
            <Button variant="outline" onClick={() => setRefreshToken((token) => token + 1)}>
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      {loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={() => setRefreshToken((token) => token + 1)}>Try Again</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="min-h-[320px] overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="min-w-[220px] px-4 py-3">Student</th>
                    <th className="min-w-[240px] px-4 py-3">Document</th>
                    <th className="min-w-[160px] px-4 py-3">Type</th>
                    <th className="min-w-[160px] px-4 py-3">Status</th>
                    <th className="min-w-[170px] px-4 py-3">Uploaded</th>
                    <th className="min-w-[160px] px-4 py-3">Reviewed</th>
                    <th className="min-w-[120px] px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-slate-500">Loading student documents...</td>
                    </tr>
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center">
                        <p className="font-medium text-slate-900">No student documents match the current filters.</p>
                        <p className="mt-2 text-sm text-slate-500">Try another search or filter combination.</p>
                      </td>
                    </tr>
                  ) : (
                    items.map((item) => {
                      const linkMeta = getDocumentLinkMeta(item.document);

                      return (
                        <tr key={item.documentId} className="border-b bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 align-top">
                            <p className="font-medium text-slate-900">{item.student.name}</p>
                            <p className="text-xs text-slate-500">{item.student.email}</p>
                            <p className="mt-1 text-xs text-slate-400">{formatLabel(item.applicationStage)}</p>
                          </td>
                          <td className="px-4 py-3 align-top">
                            <p className="font-medium text-slate-900">{item.document.title}</p>
                            <p className="text-xs text-slate-500">{item.document.originalFileName || item.document.fileName || "Uploaded file"}</p>
                            {item.document.fileUrl ? (
                              <a
                                href={item.document.fileUrl}
                                target="_blank"
                                rel="noreferrer"
                                download={linkMeta.shouldDownload ? (item.document.originalFileName || item.document.fileName || true) : undefined}
                                className="mt-1 inline-block text-xs font-medium text-blue-700 underline underline-offset-2"
                              >
                                {linkMeta.label}
                              </a>
                            ) : null}
                          </td>
                          <td className="px-4 py-3 align-top">{formatLabel(item.document.type)}</td>
                          <td className="px-4 py-3 align-top">
                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[item.document.status] || "bg-slate-100 text-slate-700"}`}>
                              {formatLabel(item.document.status)}
                            </span>
                          </td>
                          <td className="px-4 py-3 align-top text-slate-700">{formatDateTime(item.document.uploadedAt)}</td>
                          <td className="px-4 py-3 align-top text-slate-700">
                            {item.document.reviewedAt ? (
                              <div className="space-y-1">
                                <p>{formatDateTime(item.document.reviewedAt)}</p>
                                <p className="text-xs text-slate-500">{item.document.reviewedBy?.name || "Reviewer recorded"}</p>
                              </div>
                            ) : (
                              "Not reviewed yet"
                            )}
                          </td>
                          <td className="px-4 py-3 align-top text-right">
                            <Button variant="outline" size="sm" onClick={() => setSelectedItem(item)}>
                              Review
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setSelectedItem(null)} />
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Document Review</p>
              <h2 className="text-2xl font-semibold text-slate-950">{selectedItem.document.title}</h2>
              <p className="text-sm text-slate-600">
                {selectedItem.student.name} - {selectedItem.student.email}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 shadow-none">
                <CardContent className="space-y-3 p-5 text-sm">
                  <div>
                    <p className="font-medium text-slate-900">Document type</p>
                    <p className="text-slate-600">{formatLabel(selectedItem.document.type)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Current status</p>
                    <p className="text-slate-600">{formatLabel(selectedItem.document.status)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Uploaded</p>
                    <p className="text-slate-600">{formatDateTime(selectedItem.document.uploadedAt)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Student notes</p>
                    <p className="text-slate-600">{selectedItem.document.notes || "No student notes provided."}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-none">
                <CardContent className="space-y-3 p-5 text-sm">
                  <div>
                    <p className="font-medium text-slate-900">Application stage</p>
                    <p className="text-slate-600">{formatLabel(selectedItem.applicationStage)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Last review</p>
                    <p className="text-slate-600">{formatDateTime(selectedItem.document.reviewedAt)}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Reviewer</p>
                    <p className="text-slate-600">{selectedItem.document.reviewedBy?.name || "Not reviewed yet"}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Open file</p>
                    {selectedItem.document.fileUrl ? (
                      <a
                        href={selectedItem.document.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        download={
                          getDocumentLinkMeta(selectedItem.document).shouldDownload
                            ? (selectedItem.document.originalFileName || selectedItem.document.fileName || true)
                            : undefined
                        }
                        className="text-blue-700 underline underline-offset-2"
                      >
                        {getDocumentLinkMeta(selectedItem.document).label}
                      </a>
                    ) : (
                      <p className="text-slate-600">No file link available.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[220px_1fr]">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Review decision</label>
                <select
                  value={reviewStatus}
                  onChange={(event) => setReviewStatus(event.target.value as ReviewStatus)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="under-review">Under Review</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="needs-resubmission">Needs Resubmission</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Review notes</label>
                <Textarea
                  value={reviewNotes}
                  onChange={(event) => setReviewNotes(event.target.value)}
                  placeholder="Explain what was approved, rejected, or needs to be updated."
                  className="min-h-28"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedItem(null)}>
                Close
              </Button>
              <Button
                disabled={saving}
                onClick={async () => {
                  try {
                    setSaving(true);
                    await studentApi.reviewAdminDocument(selectedItem.profileId, selectedItem.documentId, {
                      status: reviewStatus,
                      reviewNotes: reviewNotes.trim(),
                    });
                    toast.success("Document review updated.");
                    setSelectedItem(null);
                    setRefreshToken((token) => token + 1);
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to update the document review.");
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                {saving ? "Saving..." : "Save review"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
