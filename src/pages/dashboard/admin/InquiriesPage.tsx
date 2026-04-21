import { useEffect, useState } from "react";
import { Link } from "react-router";
import { inquiriesApi } from "@/lib/api";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadInquiries = async () => {
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
          : error?.response?.data?.message || "Failed to load inquiries.";

      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

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
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save notes.");
    } finally {
      setSavingId(null);
    }
  };

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading inquiries...</div>;
  }

  if (loadError) {
    return (
      <div className="container mx-auto space-y-6 p-6">
        <div>
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
      <div>
        <h1 className="text-3xl font-semibold text-slate-950">Inquiries</h1>
        <p className="mt-2 text-sm text-slate-600">
          Review callback requests, consultation inquiries, and contact form submissions from the public site.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total inquiries</p><p className="mt-2 text-3xl font-semibold">{inquiries.length}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">New</p><p className="mt-2 text-3xl font-semibold">{inquiries.filter((item) => item.status === "new").length}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Contacted</p><p className="mt-2 text-3xl font-semibold">{inquiries.filter((item) => item.status === "contacted").length}</p></CardContent></Card>
      </div>

      <div className="space-y-4">
        {inquiries.length === 0 ? (
          <Card>
            <CardContent className="p-10 text-center text-slate-500">No inquiries yet.</CardContent>
          </Card>
        ) : (
          inquiries.map((inquiry) => (
            <Card key={inquiry._id}>
              <CardContent className="space-y-5 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-slate-950">{inquiry.name}</h2>
                      <Badge className={statusClasses[inquiry.status]}>{inquiry.status}</Badge>
                      <Badge variant="outline">{inquiry.source}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">
                      {new Date(inquiry.createdAt).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" disabled={savingId === inquiry._id} onClick={() => handleStatusChange(inquiry, "new")}>Mark New</Button>
                    <Button variant="outline" disabled={savingId === inquiry._id} onClick={() => handleStatusChange(inquiry, "contacted")}>Mark Contacted</Button>
                    <Button variant="outline" disabled={savingId === inquiry._id} onClick={() => handleStatusChange(inquiry, "closed")}>Mark Closed</Button>
                  </div>
                </div>

                <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                  <p><span className="font-medium">Email:</span> {inquiry.email || "Not provided"}</p>
                  <p><span className="font-medium">Phone:</span> {inquiry.phone || "Not provided"}</p>
                  <p><span className="font-medium">Destination:</span> {inquiry.destination || "Not provided"}</p>
                  <p><span className="font-medium">Qualification:</span> {inquiry.qualification || "Not provided"}</p>
                  <p><span className="font-medium">Expected intake:</span> {inquiry.intake || "Not provided"}</p>
                  <p><span className="font-medium">Exam interest:</span> {inquiry.examInterest || "Not provided"}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-900">Student message</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
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
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
