import { useEffect, useMemo, useState } from "react";
import { ReceiptText } from "lucide-react";
import { toast } from "sonner";
import { serviceOrdersApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type StudentOrder = {
  _id: string;
  serviceType: string;
  amount: number;
  currency: string;
  status: "draft" | "pending-payment" | "paid" | "cancelled" | "refunded";
  paymentMethod?: string;
  transactionReference?: string;
  adminNotes?: string;
  createdAt?: string;
};

const STATUS_STYLES: Record<StudentOrder["status"], string> = {
  draft: "bg-slate-100 text-slate-800",
  "pending-payment": "bg-amber-100 text-amber-800",
  paid: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-rose-100 text-rose-800",
  refunded: "bg-blue-100 text-blue-800",
};

const formatCurrency = (amount: number, currency = "BDT") =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

const formatLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function StudentPaymentsPage() {
  const [orders, setOrders] = useState<StudentOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState<string | null>(null);
  const [paymentDrafts, setPaymentDrafts] = useState<Record<string, { paymentMethod: string; transactionReference: string }>>({});

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await serviceOrdersApi.getStudentOrders();
      setOrders(Array.isArray(response.data?.items) ? response.data.items : []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load your payments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const summary = useMemo(
    () => ({
      total: orders.length,
      pending: orders.filter((order) => order.status === "pending-payment").length,
      paid: orders.filter((order) => order.status === "paid").length,
    }),
    [orders]
  );

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading payments...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Payments</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Track invoices and service orders, then submit your manual payment reference so the Abroadways team can verify it.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total orders</p><p className="mt-2 text-3xl font-semibold">{summary.total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Pending payment</p><p className="mt-2 text-3xl font-semibold text-amber-700">{summary.pending}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Paid</p><p className="mt-2 text-3xl font-semibold text-emerald-700">{summary.paid}</p></CardContent></Card>
      </div>

      {orders.length === 0 ? (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <ReceiptText className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No orders yet</p>
            <p className="max-w-xl text-sm text-slate-500">Request a service first to create your first invoice or order.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order._id} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={STATUS_STYLES[order.status]}>{formatLabel(order.status)}</Badge>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-950">{formatLabel(order.serviceType)}</h2>
                    <p className="text-sm text-slate-600">
                      Created {order.createdAt ? new Date(order.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "recently"}
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-blue-700">{formatCurrency(order.amount, order.currency)}</p>
                </div>

                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                  <p><span className="font-medium text-slate-900">Payment method:</span> {order.paymentMethod ? formatLabel(order.paymentMethod) : "Not submitted yet"}</p>
                  <p><span className="font-medium text-slate-900">Transaction reference:</span> {order.transactionReference || "Not submitted yet"}</p>
                  <p className="md:col-span-2"><span className="font-medium text-slate-900">Team notes:</span> {order.adminNotes || "No additional notes from the team yet."}</p>
                </div>

                {["draft", "pending-payment"].includes(order.status) ? (
                  <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[220px_1fr_auto]">
                    <Input
                      value={paymentDrafts[order._id]?.paymentMethod || ""}
                      onChange={(event) =>
                        setPaymentDrafts((prev) => ({
                          ...prev,
                          [order._id]: {
                            paymentMethod: event.target.value,
                            transactionReference: prev[order._id]?.transactionReference || "",
                          },
                        }))
                      }
                      placeholder="Payment method"
                    />
                    <Input
                      value={paymentDrafts[order._id]?.transactionReference || ""}
                      onChange={(event) =>
                        setPaymentDrafts((prev) => ({
                          ...prev,
                          [order._id]: {
                            paymentMethod: prev[order._id]?.paymentMethod || "",
                            transactionReference: event.target.value,
                          },
                        }))
                      }
                      placeholder="Transaction reference"
                    />
                    <Button
                      disabled={submittingId === order._id}
                      onClick={async () => {
                        const draft = paymentDrafts[order._id];
                        if (!draft?.paymentMethod || !draft?.transactionReference) {
                          toast.error("Please enter both payment method and transaction reference.");
                          return;
                        }

                        try {
                          setSubmittingId(order._id);
                          await serviceOrdersApi.submitStudentPaymentReference(order._id, draft);
                          toast.success("Payment reference submitted.");
                          await loadOrders();
                        } catch (error: any) {
                          toast.error(error?.response?.data?.message || "Failed to submit payment reference.");
                        } finally {
                          setSubmittingId(null);
                        }
                      }}
                    >
                      {submittingId === order._id ? "Submitting..." : "Submit payment"}
                    </Button>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
