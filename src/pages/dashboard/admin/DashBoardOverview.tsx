import { type ReactNode, useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpenText,
  CalendarClock,
  Funnel,
  MailQuestion,
  Target,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { inquiriesApi } from "@/lib/api";
import type { InquiryDashboardAnalytics, LeadTrendPoint } from "@/types/DashBoardTypes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TREND_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
] as const;

const trendBarColor = "#2563eb";
const destinationColors = ["#1d4ed8", "#3b82f6", "#60a5fa", "#0f766e", "#14b8a6", "#f59e0b"];
const examColors = ["#1e40af", "#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];

const formatStatusLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <p className="text-xs text-slate-500">{payload[0]?.payload?.label || payload[0]?.name}</p>
      <p className="text-sm font-medium text-slate-900">{payload[0]?.value}</p>
    </div>
  );
};

export default function DashboardOverview() {
  const [data, setData] = useState<InquiryDashboardAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [trendView, setTrendView] = useState<(typeof TREND_OPTIONS)[number]["value"]>("daily");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await inquiriesApi.getDashboardAnalytics();
        setData(response.data);
      } catch (error: any) {
        const message = error?.response?.data?.message || "Failed to load dashboard analytics.";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const leadTrendData: LeadTrendPoint[] = useMemo(() => {
    if (!data) return [];
    return data.leadTrends[trendView] || [];
  }, [data, trendView]);

  if (loading) {
    return <p className="mt-10 text-center text-gray-500">Loading dashboard analytics...</p>;
  }

  if (!data) {
    return <p className="mt-10 text-center text-red-500">Dashboard analytics are unavailable right now.</p>;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        <MetricCard title="Total leads" value={data.summary.totalLeads} icon={<MailQuestion className="h-5 w-5" />} />
        <MetricCard title="New leads" value={data.summary.newLeads} />
        <MetricCard title="Contacted" value={data.summary.contactedLeads} />
        <MetricCard title="Qualified" value={data.summary.qualifiedLeads} />
        <MetricCard title="Closed" value={data.summary.closedLeads} />
        <MetricCard title="Lost" value={data.summary.lostLeads} />
        <MetricCard title="Published blogs" value={data.summary.publishedBlogs} icon={<BookOpenText className="h-5 w-5" />} />
        <MetricCard title="Upcoming events" value={data.summary.upcomingEvents} icon={<CalendarClock className="h-5 w-5" />} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Lead Velocity</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">Leads per day, week, and month</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {TREND_OPTIONS.map((option) => (
                  <Button
                    key={option.value}
                    variant={trendView === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTrendView(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="total" fill={trendBarColor} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-2 text-slate-900">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-semibold">Alerts</h2>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-medium text-amber-900">Uncontacted leads older than 48 hours</p>
              <p className="mt-2 text-3xl font-semibold text-amber-900">{data.alerts.uncontactedOver48h.count}</p>
              {data.alerts.uncontactedOver48h.sample.length ? (
                <div className="mt-3 space-y-2 text-sm text-amber-900">
                  {data.alerts.uncontactedOver48h.sample.map((lead) => (
                    <p key={lead.id}>
                      {lead.name} • {lead.ageHours}h • {formatStatusLabel(lead.source)}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-amber-800">No overdue leads right now.</p>
              )}
            </div>

            <div className="space-y-2 rounded-xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-sm font-medium text-rose-900">High drop-off warnings</p>
              {data.alerts.highDropOffWarnings.length ? (
                <ul className="space-y-2 text-sm text-rose-900">
                  {data.alerts.highDropOffWarnings.map((warning) => (
                    <li key={warning}>• {warning}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-rose-800">No major drop-off warnings detected.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center gap-2">
              <Funnel className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Conversion Funnel</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">Lead progression</h2>
              </div>
            </div>

            <div className="space-y-4">
              {data.funnel.map((step) => {
                const maxCount = Math.max(...data.funnel.map((item) => item.count), 1);
                const widthPercent = `${(step.count / maxCount) * 100}%`;
                return (
                  <div key={step.status} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-900">{formatStatusLabel(step.status)}</span>
                      <span className="text-slate-500">
                        {step.count} leads {step.status !== "new" ? `• ${step.dropOffPercent}% drop-off` : ""}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-blue-700" style={{ width: widthPercent }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-700" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Lead Sources</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">Source performance</h2>
              </div>
            </div>

            <div className="space-y-3">
              {data.sourceAnalytics.length === 0 ? (
                <p className="text-sm text-slate-500">No source analytics available yet.</p>
              ) : (
                data.sourceAnalytics.map((source) => (
                  <div key={source.source} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-slate-900">{source.label}</p>
                        <p className="text-sm text-slate-500">
                          {source.total} leads • {source.closed} closed • {source.qualified} qualified
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">Conversion</p>
                        <p className="font-semibold text-slate-900">{source.conversionRate}%</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <BreakdownChartCard
          title="Top destinations"
          subtitle="Where lead interest is concentrating"
          data={data.topDestinations}
          colors={destinationColors}
        />
        <BreakdownChartCard
          title="Top exam interests"
          subtitle="What students are asking about most"
          data={data.topExamInterests}
          colors={examColors}
        />
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Staff Performance</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">Assigned lead performance</h2>
          </div>

          {data.staffPerformance.length === 0 ? (
            <p className="text-sm text-slate-500">No staff assignments recorded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Staff</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Assigned Leads</th>
                    <th className="px-4 py-3">Contacted</th>
                    <th className="px-4 py-3">Qualified</th>
                    <th className="px-4 py-3">Closed</th>
                    <th className="px-4 py-3">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {data.staffPerformance.map((staff) => (
                    <tr key={staff.id} className="border-b bg-white hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{staff.name}</td>
                      <td className="px-4 py-3 text-slate-600">{formatStatusLabel(staff.role)}</td>
                      <td className="px-4 py-3 text-slate-600">{staff.total}</td>
                      <td className="px-4 py-3 text-slate-600">{staff.contacted}</td>
                      <td className="px-4 py-3 text-slate-600">{staff.qualified}</td>
                      <td className="px-4 py-3 text-slate-600">{staff.closed}</td>
                      <td className="px-4 py-3 font-medium text-slate-900">{staff.conversionRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-gray-600">{title}</p>
        {icon ? <div className="text-blue-700">{icon}</div> : null}
      </div>
      <h2 className="mt-2 text-2xl font-bold text-blue-700">{value}</h2>
    </div>
  );
}

function BreakdownChartCard({
  title,
  subtitle,
  data,
  colors,
}: {
  title: string;
  subtitle: string;
  data: { name: string; total: number }[];
  colors: string[];
}) {
  const chartData = data.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="space-y-4 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{title}</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">{subtitle}</h2>
        </div>

        {chartData.length === 0 ? (
          <p className="text-sm text-slate-500">No data available yet.</p>
        ) : (
          <>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} dataKey="total" nameKey="name" outerRadius={100} innerRadius={55}>
                    {chartData.map((entry, index) => (
                      <Cell key={`${entry.name}-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-sm text-slate-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{item.total}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
