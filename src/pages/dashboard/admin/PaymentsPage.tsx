import { useEffect, useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { serviceOrdersApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type OrderStatus = "draft" | "pending-payment" | "paid" | "cancelled" | "refunded";
type PaymentState = "initiated" | "success" | "failed" | "cancelled" | "manual-submitted" | "refunded";

type PaymentOrder = {
  _id: string;
  serviceType: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  paymentMethod?: string;
  transactionReference?: string;
  gatewayTransactionId?: string;
  paymentGateway?: string;
  adminNotes?: string;
  createdAt?: string;
  paymentLogs?: Array<{
    status: PaymentState;
    gateway?: string;
    message?: string;
    transactionReference?: string;
    createdAt?: string;
  }>;
  studentId?: {
    fullName?: string;
    email?: string;
  } | null;
};

type SummaryPayload = {
  summary: {
    totalOrders: number;
    openOrders: number;
    pendingPayments: number;
    paidRevenue: number;
    monthlyRevenue: number;
  };
  pendingPayments: PaymentOrder[];
};

const STATUS_STYLES: Record<OrderStatus, string> = {
  draft: "bg-slate-100 text-slate-800",
  "pending-payment": "bg-amber-100 text-amber-800",
  paid: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-rose-100 text-rose-800",
  refunded: "bg-blue-100 text-blue-800",
};

const formatLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const formatCurrency = (amount: number, currency = "BDT") =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

export default function PaymentsPage() {
  const { user } = useAuth();
  const canManagePayments = user ? ["admin", "content-manager"].includes(user.role) : false;
  const [items, setItems] = useState<PaymentOrder[]>([]);
  const [summary, setSummary] = useState<SummaryPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentStateFilter, setPaymentStateFilter] = useState("all");
  const [savingId, setSavingId] = useState<string | null>(null);

  const loadData = async () => {
    if (!canManagePayments) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const [ordersResponse, summaryResponse] = await Promise.all([
        serviceOrdersApi.getAdminOrders({
          q: searchTerm.trim() || undefined,
          status: statusFilter !== "all" ? statusFilter : undefined,
          paymentState: paymentStateFilter !== "all" ? paymentStateFilter : undefined,
        }),
        serviceOrdersApi.getAdminSummary(),
      ]);
      setItems(Array.isArray(ordersResponse.data?.items) ? ordersResponse.data.items : []);
      setSummary(summaryResponse.data);
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again."
          : status === 403
            ? "Only admin and content-manager accounts can manage payments."
            : error?.response?.data?.message || "Failed to load payments.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [canManagePayments, searchTerm, statusFilter, paymentStateFilter]);

  const pendingTotal = useMemo(
    () =>
      items
        .filter((item) => item.status === "pending-payment")
        .reduce((sum, item) => sum + Number(item.amount || 0), 0),
    [items]
  );

  if (!canManagePayments) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Payments</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Payments</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Track pending payments, revenue, and gateway activity from one place.</p>
        </div>
        <Card><CardContent className="space-y-4 p-8"><div className="flex items-center gap-3 text-amber-700"><ShieldCheck className="h-5 w-5" /><p className="text-sm font-medium">Only admin and content-manager accounts can manage payments.</p></div></CardContent></Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Payments</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Payments</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Review SSLCommerz and manual payment activity, verify paid orders, and monitor revenue.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Pending payments</p><p className="mt-2 text-3xl font-semibold text-amber-700">{summary?.summary.pendingPayments || 0}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Open orders</p><p className="mt-2 text-3xl font-semibold">{summary?.summary.openOrders || 0}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Paid revenue</p><p className="mt-2 text-3xl font-semibold text-emerald-700">{formatCurrency(summary?.summary.paidRevenue || 0)}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Monthly revenue</p><p className="mt-2 text-3xl font-semibold text-blue-700">{formatCurrency(summary?.summary.monthlyRevenue || 0)}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_200px_220px_auto]">
            <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by student, service, reference, or notes" />
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All order statuses</option>
              {["draft", "pending-payment", "paid", "cancelled", "refunded"].map((status) => (
                <option key={status} value={status}>{formatLabel(status)}</option>
              ))}
            </select>
            <select value={paymentStateFilter} onChange={(event) => setPaymentStateFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All payment states</option>
              {["initiated", "success", "failed", "cancelled", "manual-submitted", "refunded"].map((status) => (
                <option key={status} value={status}>{formatLabel(status)}</option>
              ))}
            </select>
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
              Pending total: <span className="font-semibold">{formatCurrency(pendingTotal)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card><CardContent className="p-8 text-sm text-slate-500">Loading payments...</CardContent></Card>
      ) : loadError ? (
        <Card><CardContent className="space-y-4 p-8"><p className="text-sm font-medium text-red-600">{loadError}</p><Button onClick={loadData}>Try Again</Button></CardContent></Card>
      ) : items.length === 0 ? (
        <Card><CardContent className="p-10 text-center text-slate-500">No payments matched the current filters.</CardContent></Card>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item._id} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className={STATUS_STYLES[item.status]}>{formatLabel(item.status)}</Badge>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-950">{formatLabel(item.serviceType)}</h2>
                    <p className="text-sm text-slate-500">{item.studentId?.fullName || "Student"} • {item.studentId?.email || "No email available"}</p>
                  </div>
                  <p className="text-xl font-semibold text-blue-700">{formatCurrency(item.amount, item.currency)}</p>
                </div>

                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                  <p><span className="font-medium text-slate-900">Payment method:</span> {item.paymentMethod ? formatLabel(item.paymentMethod) : "Not submitted"}</p>
                  <p><span className="font-medium text-slate-900">Reference:</span> {item.transactionReference || "Not submitted"}</p>
                  <p><span className="font-medium text-slate-900">Gateway transaction:</span> {item.gatewayTransactionId || "Not available"}</p>
                  <p><span className="font-medium text-slate-900">Gateway:</span> {formatLabel(item.paymentGateway || "manual")}</p>
                  <p className="md:col-span-2"><span className="font-medium text-slate-900">Internal notes:</span> {item.adminNotes || "No internal notes yet."}</p>
                </div>

                {item.paymentLogs?.length ? (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slate-900">Transaction history</p>
                    <div className="mt-3 space-y-2">
                      {[...item.paymentLogs].slice(-3).reverse().map((log, index) => (
                        <div key={`${item._id}-log-${index}`} className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
                          <p className="font-medium text-slate-900">
                            {formatLabel(log.status)} via {formatLabel(log.gateway || "manual")}
                          </p>
                          <p>{log.message || "Payment activity recorded."}</p>
                          <p className="text-xs text-slate-500">
                            {log.transactionReference || "No transaction reference"} •{" "}
                            {log.createdAt
                              ? new Date(log.createdAt).toLocaleString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                  hour: "numeric",
                                  minute: "2-digit",
                                })
                              : "Recent activity"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-wrap justify-end gap-2">
                  {item.status !== "paid" ? (
                    <Button
                      disabled={savingId === item._id}
                      onClick={async () => {
                        try {
                          setSavingId(item._id);
                          await serviceOrdersApi.updateAdminOrder(item._id, { status: "paid" });
                          toast.success("Payment marked as paid.");
                          await loadData();
                        } catch (error: any) {
                          toast.error(error?.response?.data?.message || "Failed to update payment status.");
                        } finally {
                          setSavingId(null);
                        }
                      }}
                    >
                      {savingId === item._id ? "Updating..." : "Mark as paid"}
                    </Button>
                  ) : null}
                  <Button
                    variant="outline"
                    disabled={savingId === item._id}
                    onClick={async () => {
                      try {
                        setSavingId(item._id);
                        await serviceOrdersApi.updateAdminOrder(item._id, { status: "refunded" });
                        toast.success("Order marked as refunded.");
                        await loadData();
                      } catch (error: any) {
                        toast.error(error?.response?.data?.message || "Failed to update refund status.");
                      } finally {
                        setSavingId(null);
                      }
                    }}
                  >
                    Mark refunded
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
