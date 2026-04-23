import { useEffect, useState } from "react";
import { toast } from "sonner";
import { studentApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ApplicationData = {
  applicationStage: string;
  applicationStages: string[];
  linkedInquiry?: {
    status?: string;
    destination?: string;
    nextFollowUpAt?: string | null;
  } | null;
  documentsCount: number;
};

const formatStage = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function StudentApplicationsPage() {
  const [data, setData] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await studentApi.getApplications();
        setData(response.data);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Failed to load application tracking.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading applications...</div>;
  }

  if (!data) {
    return <div className="container mx-auto p-6 text-red-600">Application tracking is unavailable right now.</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Applications</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Track your current application stage and keep your study-abroad progress aligned with your counselor.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Current stage</p><p className="text-lg font-semibold text-slate-950">{formatStage(data.applicationStage)}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Linked inquiry status</p><p className="text-lg font-semibold text-slate-950">{data.linkedInquiry?.status ? formatStage(data.linkedInquiry.status) : "Not linked yet"}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Documents recorded</p><p className="text-3xl font-semibold text-slate-950">{data.documentsCount}</p></CardContent></Card>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">Application stage</p>
              <p className="mt-1 text-sm text-slate-500">
                Keep your self-service status updated while your counselor manages the CRM side.
              </p>
            </div>
            <Badge variant="outline">{data.linkedInquiry?.destination || "Destination pending"}</Badge>
          </div>

          <select
            value={data.applicationStage}
            onChange={(e) => setData((prev) => (prev ? { ...prev, applicationStage: e.target.value } : prev))}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
          >
            {data.applicationStages.map((stage) => (
              <option key={stage} value={stage}>
                {formatStage(stage)}
              </option>
            ))}
          </select>

          <div className="grid gap-3">
            {data.applicationStages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className={`h-9 w-9 rounded-full text-sm font-semibold flex items-center justify-center ${stage === data.applicationStage ? "bg-blue-700 text-white" : "bg-white text-slate-600 border border-slate-200"}`}>
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{formatStage(stage)}</p>
                  <p className="text-sm text-slate-500">
                    {stage === data.applicationStage ? "Your current student-facing stage." : "Available next-stage marker."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              disabled={saving}
              onClick={async () => {
                try {
                  setSaving(true);
                  const response = await studentApi.updateApplications({ applicationStage: data.applicationStage });
                  setData(response.data);
                  toast.success("Application stage updated.");
                } catch (error: any) {
                  toast.error(error?.response?.data?.message || "Failed to update your application stage.");
                } finally {
                  setSaving(false);
                }
              }}
            >
              Save Stage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
