import { useEffect, useState } from "react";
import { FileBadge2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { serviceOrdersApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

type ServiceItem = {
  serviceType: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
};

type ServiceOrder = {
  _id: string;
  serviceType: string;
  amount: number;
  currency: string;
  status: string;
};

const formatCurrency = (amount: number, currency = "BDT") =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

const formatStatus = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function StudentServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [recentOrders, setRecentOrders] = useState<ServiceOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestingService, setRequestingService] = useState<string | null>(null);
  const [notesDrafts, setNotesDrafts] = useState<Record<string, string>>({});

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await serviceOrdersApi.getStudentServices();
      setServices(Array.isArray(response.data?.services) ? response.data.services : []);
      setRecentOrders(Array.isArray(response.data?.recentOrders) ? response.data.recentOrders : []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load available services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading services...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Services</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Explore Abroadways services, request support directly, and move into payment tracking once a service order is created.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          {services.map((service) => (
            <Card key={service.serviceType} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Sparkles className="h-4 w-4" />
                      <p className="text-sm font-semibold uppercase tracking-[0.16em]">Service</p>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-950">{service.name}</h2>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">{formatCurrency(service.amount, service.currency)}</Badge>
                </div>

                <Textarea
                  value={notesDrafts[service.serviceType] || ""}
                  onChange={(event) =>
                    setNotesDrafts((prev) => ({
                      ...prev,
                      [service.serviceType]: event.target.value,
                    }))
                  }
                  placeholder="Optional note for the Abroadways team before requesting this service"
                  className="min-h-24"
                />

                <div className="flex justify-end">
                  <Button
                    disabled={requestingService === service.serviceType}
                    onClick={async () => {
                      try {
                        setRequestingService(service.serviceType);
                        await serviceOrdersApi.requestStudentService({
                          serviceType: service.serviceType,
                          notes: notesDrafts[service.serviceType] || "",
                        });
                        toast.success("Service request submitted. You can now track it in Payments.");
                        setNotesDrafts((prev) => ({ ...prev, [service.serviceType]: "" }));
                        await loadData();
                      } catch (error: any) {
                        toast.error(error?.response?.data?.message || "Failed to request the service.");
                      } finally {
                        setRequestingService(null);
                      }
                    }}
                  >
                    {requestingService === service.serviceType ? "Requesting..." : "Request Service"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Recent Orders</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Latest service activity</h2>
            </div>

            {recentOrders.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                No service orders yet. Request a service to create your first order.
              </div>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order._id} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-medium text-slate-900">{formatStatus(order.serviceType)}</p>
                        <p className="text-sm text-slate-500">{formatCurrency(order.amount, order.currency)}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <FileBadge2 className="h-4 w-4 text-blue-700" />
                        {formatStatus(order.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
