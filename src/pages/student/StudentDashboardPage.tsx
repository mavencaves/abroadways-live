import { useEffect, useState } from "react";
import { CalendarClock, CheckCircle2, CircleAlert, FileText, UserRound } from "lucide-react";
import { studentApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type PortalData = {
  profile: {
    fullName?: string;
    preferredCountry?: string;
    examInterest?: string;
  };
  profileCompleteness: number;
  application: {
    currentStage: string;
    currentStageLabel: string;
    linkedInquiryStatus?: string;
    linkedInquiryId?: string | null;
  };
  pendingActions: string[];
  upcoming: {
    followUpAt?: string | null;
    consultationNote?: string;
    assignedStaff?: {
      name: string;
      role: string;
    } | null;
  };
};

export default function StudentDashboardPage() {
  const [data, setData] = useState<PortalData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortal = async () => {
      try {
        const response = await studentApi.getPortal();
        setData(response.data);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Failed to load your student dashboard.");
      } finally {
        setLoading(false);
      }
    };

    loadPortal();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading student dashboard...</div>;
  }

  if (!data) {
    return <div className="container mx-auto p-6 text-red-600">Student dashboard is unavailable right now.</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Welcome back, {data.profile.fullName || "Student"}</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Review your profile readiness, upcoming follow-ups, and the next steps in your application journey.
          </p>
        </div>
        <Badge className="bg-blue-100 text-blue-700">{data.application.currentStageLabel}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card><CardContent className="space-y-2 p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">Profile completeness</p><UserRound className="h-4 w-4 text-blue-700" /></div><p className="text-3xl font-semibold text-slate-950">{data.profileCompleteness}%</p><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-700" style={{ width: `${data.profileCompleteness}%` }} /></div></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">Application stage</p><FileText className="h-4 w-4 text-blue-700" /></div><p className="text-lg font-semibold text-slate-950">{data.application.currentStageLabel}</p><p className="text-sm text-slate-500">{data.application.linkedInquiryStatus ? `CRM status: ${data.application.linkedInquiryStatus}` : "Awaiting counselor progress"}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">Upcoming follow-up</p><CalendarClock className="h-4 w-4 text-blue-700" /></div><p className="text-lg font-semibold text-slate-950">{data.upcoming.followUpAt ? new Date(data.upcoming.followUpAt).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }) : "Not scheduled"}</p><p className="text-sm text-slate-500">{data.upcoming.assignedStaff ? `${data.upcoming.assignedStaff.name} (${data.upcoming.assignedStaff.role})` : "No staff assigned yet"}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">Pending actions</p><CircleAlert className="h-4 w-4 text-amber-600" /></div><p className="text-3xl font-semibold text-slate-950">{data.pendingActions.length}</p><p className="text-sm text-slate-500">{data.pendingActions.length ? "Complete the next steps below" : "You are on track right now"}</p></CardContent></Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Next Steps</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Pending actions</h2>
            </div>
            {data.pendingActions.length === 0 ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                Your current profile and application record do not have urgent pending actions.
              </div>
            ) : (
              <div className="space-y-3">
                {data.pendingActions.map((action) => (
                  <div key={action} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-700" />
                      <p className="text-sm text-slate-700">{action}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Your Focus</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Profile snapshot</h2>
            </div>
            <div className="grid gap-3 text-sm text-slate-700">
              <p><span className="font-medium">Preferred country:</span> {data.profile.preferredCountry || "Not added yet"}</p>
              <p><span className="font-medium">Exam interest:</span> {data.profile.examInterest || "Not added yet"}</p>
              <p><span className="font-medium">Upcoming support:</span> {data.upcoming.consultationNote || "Your counselor will share next-step guidance soon."}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
