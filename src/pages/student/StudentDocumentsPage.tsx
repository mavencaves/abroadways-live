import { useEffect, useState } from "react";
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
  fileName?: string;
  fileUrl?: string;
  status: string;
  notes?: string;
  uploadedAt?: string | null;
};

export default function StudentDocumentsPage() {
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    type: "",
    fileName: "",
    fileUrl: "",
    notes: "",
  });

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const response = await studentApi.getDocuments();
      setDocuments(Array.isArray(response.data?.documents) ? response.data.documents : []);
      setStatuses(Array.isArray(response.data?.statuses) ? response.data.statuses : []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load your document vault.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading documents...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Documents</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Keep a structured document vault ready for future upload support. For now, you can record file metadata and share secure links if needed.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input value={formState.title} onChange={(e) => setFormState((prev) => ({ ...prev, title: e.target.value }))} placeholder="Document title" />
            <Input value={formState.type} onChange={(e) => setFormState((prev) => ({ ...prev, type: e.target.value }))} placeholder="Document type" />
            <Input value={formState.fileName} onChange={(e) => setFormState((prev) => ({ ...prev, fileName: e.target.value }))} placeholder="File name (optional)" />
            <Input value={formState.fileUrl} onChange={(e) => setFormState((prev) => ({ ...prev, fileUrl: e.target.value }))} placeholder="Secure document URL (optional)" />
          </div>
          <Textarea value={formState.notes} onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))} placeholder="Document notes" className="min-h-24" />
          <div className="flex justify-end">
            <Button
              disabled={saving}
              onClick={async () => {
                if (!formState.title.trim()) {
                  toast.error("Document title is required.");
                  return;
                }
                try {
                  setSaving(true);
                  const response = await studentApi.addDocument(formState);
                  setDocuments(response.data.documents || []);
                  setStatuses(response.data.statuses || []);
                  setFormState({ title: "", type: "", fileName: "", fileUrl: "", notes: "" });
                  toast.success("Document record added.");
                } catch (error: any) {
                  toast.error(error?.response?.data?.message || "Failed to add document.");
                } finally {
                  setSaving(false);
                }
              }}
            >
              Add Document
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Uploaded</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="py-8 text-center text-slate-500">
                    No document records yet.
                  </TableCell>
                </TableRow>
              ) : (
                documents.map((doc) => (
                  <TableRow key={doc._id}>
                    <TableCell className="font-medium text-slate-900">{doc.title}</TableCell>
                    <TableCell>{doc.type || "General"}</TableCell>
                    <TableCell>
                      <select
                        value={doc.status}
                        onChange={async (e) => {
                          try {
                            const response = await studentApi.updateDocument(doc._id, { status: e.target.value });
                            setDocuments(response.data.documents || []);
                            setStatuses(response.data.statuses || []);
                            toast.success("Document status updated.");
                          } catch (error: any) {
                            toast.error(error?.response?.data?.message || "Failed to update document.");
                          }
                        }}
                        className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-950"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                    <TableCell>
                      {doc.fileUrl ? (
                        <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="text-blue-700 underline underline-offset-2">
                          {doc.fileName || "Open link"}
                        </a>
                      ) : (
                        doc.fileName || "No file link yet"
                      )}
                    </TableCell>
                    <TableCell>{doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Pending"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
