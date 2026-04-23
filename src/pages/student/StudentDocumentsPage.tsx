import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { studentApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type StudentDocument = {
  _id: string;
  title: string;
  type?: string;
  originalFileName?: string;
  fileName?: string;
  fileUrl?: string;
  resourceType?: string;
  status: string;
  notes?: string;
  reviewNotes?: string;
  uploadedAt?: string | null;
  reviewedAt?: string | null;
  bytes?: number;
  mimeType?: string;
};

const DEFAULT_DOCUMENT_TYPES = ["passport", "transcript", "certificate", "cv", "sop", "lor", "other"];

const STATUS_STYLES: Record<string, string> = {
  uploaded: "bg-blue-100 text-blue-800",
  "under-review": "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-rose-100 text-rose-800",
  "needs-resubmission": "bg-orange-100 text-orange-800",
};

const formatLabel = (value?: string) =>
  String(value || "other")
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
    : "Not available";

const formatFileSize = (bytes?: number) => {
  if (!bytes) return "Unknown size";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getDocumentLinkMeta = (document: StudentDocument) => {
  const mimeType = String(document.mimeType || "").toLowerCase();
  const fileName = String(document.originalFileName || document.fileName || "").toLowerCase();
  const resourceType = String(document.resourceType || "").toLowerCase();
  const isImage = resourceType === "image" || mimeType.startsWith("image/");
  const isPdf = mimeType === "application/pdf" || fileName.endsWith(".pdf");

  if (isImage) {
    return { label: "Open image", shouldDownload: false };
  }

  if (isPdf) {
    return { label: "Open PDF", shouldDownload: false };
  }

  return { label: "Download file", shouldDownload: true };
};

export default function StudentDocumentsPage() {
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [documentTypes, setDocumentTypes] = useState<string[]>(DEFAULT_DOCUMENT_TYPES);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [replaceSaving, setReplaceSaving] = useState(false);
  const [replaceTarget, setReplaceTarget] = useState<StudentDocument | null>(null);
  const [formState, setFormState] = useState({
    title: "",
    type: "passport",
    notes: "",
    file: null as File | null,
  });
  const [replaceState, setReplaceState] = useState({
    title: "",
    type: "other",
    notes: "",
    file: null as File | null,
  });

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const response = await studentApi.getDocuments();
      setDocuments(Array.isArray(response.data?.documents) ? response.data.documents : []);
      setDocumentTypes(
        Array.isArray(response.data?.documentTypes) && response.data.documentTypes.length > 0
          ? response.data.documentTypes
          : DEFAULT_DOCUMENT_TYPES
      );
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load your document vault.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const summary = useMemo(
    () => ({
      total: documents.length,
      approved: documents.filter((doc) => doc.status === "approved").length,
      waiting: documents.filter((doc) => ["uploaded", "under-review"].includes(doc.status)).length,
      resubmission: documents.filter((doc) => ["rejected", "needs-resubmission"].includes(doc.status)).length,
    }),
    [documents]
  );

  const resetUploadForm = () => {
    setFormState({
      title: "",
      type: documentTypes[0] || "passport",
      notes: "",
      file: null,
    });
  };

  const openReplaceModal = (document: StudentDocument) => {
    setReplaceTarget(document);
    setReplaceState({
      title: document.title || "",
      type: document.type || "other",
      notes: document.notes || "",
      file: null,
    });
  };

  const closeReplaceModal = () => {
    setReplaceTarget(null);
    setReplaceState({
      title: "",
      type: "other",
      notes: "",
      file: null,
    });
  };

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading documents...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Documents</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Upload your core study-abroad documents, track review status, and respond quickly when our team requests a replacement or resubmission.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Total documents</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{summary.total}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Approved</p>
            <p className="mt-2 text-3xl font-semibold text-emerald-700">{summary.approved}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Waiting for review</p>
            <p className="mt-2 text-3xl font-semibold text-blue-700">{summary.waiting}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Need action</p>
            <p className="mt-2 text-3xl font-semibold text-orange-700">{summary.resubmission}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="space-y-4 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Upload a document</h2>
              <p className="text-sm text-slate-600">
                Supported formats include PDF, images, Word files, Excel files, and plain text documents up to 15 MB.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Document title</label>
              <Input
                value={formState.title}
                onChange={(e) => setFormState((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Passport copy"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Document type</label>
              <select
                value={formState.type}
                onChange={(e) => setFormState((prev) => ({ ...prev, type: e.target.value }))}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {documentTypes.map((type) => (
                  <option key={type} value={type}>
                    {formatLabel(type)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Document notes</label>
            <Textarea
              value={formState.notes}
              onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder="Optional notes for our admissions team"
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Choose file</label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.doc,.docx,.xls,.xlsx,.txt"
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  file: e.target.files?.[0] || null,
                }))
              }
            />
            <p className="text-xs text-slate-500">
              {formState.file ? `Selected: ${formState.file.name}` : "No file selected yet."}
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              disabled={saving}
              onClick={async () => {
                if (!formState.title.trim()) {
                  toast.error("Document title is required.");
                  return;
                }

                if (!formState.file) {
                  toast.error("Please choose a file before uploading.");
                  return;
                }

                try {
                  setSaving(true);
                  const response = await studentApi.addDocument({
                    title: formState.title.trim(),
                    type: formState.type,
                    notes: formState.notes.trim(),
                    file: formState.file,
                  });
                  setDocuments(response.data.documents || []);
                  setDocumentTypes(response.data.documentTypes || DEFAULT_DOCUMENT_TYPES);
                  resetUploadForm();
                  toast.success("Document uploaded successfully.");
                } catch (error: any) {
                  toast.error(error?.response?.data?.message || "Failed to upload document.");
                } finally {
                  setSaving(false);
                }
              }}
            >
              {saving ? "Uploading..." : "Upload Document"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Review notes</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-8 text-center text-slate-500">
                    No documents uploaded yet. Add your first document to start review.
                  </TableCell>
                </TableRow>
              ) : (
                documents.map((doc) => {
                  const linkMeta = getDocumentLinkMeta(doc);

                  return (
                    <TableRow key={doc._id}>
                      <TableCell className="align-top">
                        <div className="space-y-1">
                          <p className="font-medium text-slate-900">{doc.title}</p>
                          <p className="text-xs text-slate-500">
                            {doc.originalFileName || doc.fileName || "Uploaded file"} - {formatFileSize(doc.bytes)}
                          </p>
                          {doc.fileUrl ? (
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noreferrer"
                              download={linkMeta.shouldDownload ? (doc.originalFileName || doc.fileName || true) : undefined}
                              className="text-sm font-medium text-blue-700 underline underline-offset-2"
                            >
                              {linkMeta.label}
                            </a>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className="align-top">{formatLabel(doc.type)}</TableCell>
                      <TableCell className="align-top">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[doc.status] || "bg-slate-100 text-slate-700"}`}>
                          {formatLabel(doc.status)}
                        </span>
                      </TableCell>
                      <TableCell className="align-top">
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>{doc.reviewNotes || "No review notes yet."}</p>
                          {doc.reviewedAt ? (
                            <p className="text-xs text-slate-500">Reviewed {formatDateTime(doc.reviewedAt)}</p>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className="align-top text-sm text-slate-600">{formatDateTime(doc.uploadedAt)}</TableCell>
                      <TableCell className="align-top text-right">
                        {["rejected", "needs-resubmission"].includes(doc.status) ? (
                          <Button variant="outline" size="sm" onClick={() => openReplaceModal(doc)}>
                            Replace / Resubmit
                          </Button>
                        ) : (
                          <span className="text-xs text-slate-400">No action needed</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {replaceTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50" onClick={closeReplaceModal} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 space-y-1">
              <h2 className="text-xl font-semibold text-slate-950">Replace or resubmit document</h2>
              <p className="text-sm text-slate-600">
                Upload a new version for <span className="font-medium text-slate-900">{replaceTarget.title}</span>.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Document title</label>
                <Input
                  value={replaceState.title}
                  onChange={(e) => setReplaceState((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Document type</label>
                <select
                  value={replaceState.type}
                  onChange={(e) => setReplaceState((prev) => ({ ...prev, type: e.target.value }))}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>
                      {formatLabel(type)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-slate-700">Notes for the team</label>
              <Textarea
                value={replaceState.notes}
                onChange={(e) => setReplaceState((prev) => ({ ...prev, notes: e.target.value }))}
                className="min-h-24"
                placeholder="Add any context about this replacement document"
              />
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-slate-700">Replacement file</label>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.doc,.docx,.xls,.xlsx,.txt"
                onChange={(e) =>
                  setReplaceState((prev) => ({
                    ...prev,
                    file: e.target.files?.[0] || null,
                  }))
                }
              />
              <p className="text-xs text-slate-500">
                {replaceState.file ? `Selected: ${replaceState.file.name}` : "Choose the updated file to continue."}
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={closeReplaceModal}>
                Cancel
              </Button>
              <Button
                disabled={replaceSaving}
                onClick={async () => {
                  if (!replaceState.file) {
                    toast.error("Please choose a replacement file.");
                    return;
                  }

                  try {
                    setReplaceSaving(true);
                    const response = await studentApi.resubmitDocument(replaceTarget._id, {
                      title: replaceState.title.trim(),
                      type: replaceState.type,
                      notes: replaceState.notes.trim(),
                      file: replaceState.file,
                    });
                    setDocuments(response.data.documents || []);
                    setDocumentTypes(response.data.documentTypes || DEFAULT_DOCUMENT_TYPES);
                    closeReplaceModal();
                    toast.success("Document resubmitted successfully.");
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to resubmit document.");
                  } finally {
                    setReplaceSaving(false);
                  }
                }}
              >
                {replaceSaving ? "Submitting..." : "Submit replacement"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
