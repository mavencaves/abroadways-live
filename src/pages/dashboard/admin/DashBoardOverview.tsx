import React, { useEffect, useState } from "react";
import CardsSection from "@/components/DashBoardOverviewComponents/CardSection";
import UpdatesTable from "@/components/DashBoardOverviewComponents/UpdatesTable";
import type { DashboardData } from "@/types/DashBoardTypes";
import { CountriesChart } from "@/components/dashboard/admin/overview/CountriesChart.tsx";
import { VisitorsChart } from "@/components/dashboard/admin/overview/VisitorsChart.tsx";
import { adminApi } from "@/lib/api";
import { toast } from "sonner";

const DashboardOverview: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await adminApi.getDashboardOverview();
        setData(response.data);
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VisitorsChart data={data.visitors} />
        <CountriesChart data={data.countries} />
      </div>

      <UpdatesTable updates={data.updates} />
    </div>
  );
};

export default DashboardOverview;
