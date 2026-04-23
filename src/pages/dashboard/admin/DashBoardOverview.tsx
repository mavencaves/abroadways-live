import React, { useEffect, useState } from "react";
import CardsSection from "@/components/DashBoardOverviewComponents/CardSection";
import UpdatesTable from "@/components/DashBoardOverviewComponents/UpdatesTable";
import type { DashboardData } from "@/types/DashBoardTypes";
import { CountriesChart } from "@/components/dashboard/admin/overview/CountriesChart.tsx";
import { VisitorsChart } from "@/components/dashboard/admin/overview/VisitorsChart.tsx";
import { adminApi, inquiriesApi } from "@/lib/api";
import { toast } from "sonner";

const DashboardOverview: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [inquiryMetrics, setInquiryMetrics] = useState<{
    total: number;
    new: number;
    contacted: number;
    closed: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [response, metricsResponse] = await Promise.all([
          adminApi.getDashboardOverview(),
          inquiriesApi.getMetrics(),
        ]);
        setData(response.data);
        setInquiryMetrics({
          total: metricsResponse.data?.total || 0,
          new: metricsResponse.data?.new || 0,
          contacted: metricsResponse.data?.contacted || 0,
          closed: metricsResponse.data?.closed || 0,
        });
      } catch (error: any) {
        const message = error?.response?.data?.message || "Failed to load dashboard data.";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p className="mt-10 text-center text-gray-500">Loading dashboard...</p>;
  }

  if (!data) {
    return <p className="mt-10 text-center text-red-500">Dashboard data is unavailable right now.</p>;
  }

  return (
    <div className="space-y-6 p-6">
      <CardsSection cards={data.cards} />

      {inquiryMetrics ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
            <p className="text-sm text-gray-600">Total inquiries</p>
            <h2 className="mt-2 text-2xl font-bold text-emerald-600">{inquiryMetrics.total}</h2>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
            <p className="text-sm text-gray-600">New inquiries</p>
            <h2 className="mt-2 text-2xl font-bold text-emerald-600">{inquiryMetrics.new}</h2>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
            <p className="text-sm text-gray-600">Contacted inquiries</p>
            <h2 className="mt-2 text-2xl font-bold text-emerald-600">{inquiryMetrics.contacted}</h2>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
            <p className="text-sm text-gray-600">Closed inquiries</p>
            <h2 className="mt-2 text-2xl font-bold text-emerald-600">{inquiryMetrics.closed}</h2>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VisitorsChart data={data.visitors} />
        <CountriesChart data={data.countries} />
      </div>

      <UpdatesTable updates={data.updates} />
    </div>
  );
};

export default DashboardOverview;
