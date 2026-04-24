import { useEffect, useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { serviceOrdersApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

type OrderStatus = "draft" | "pending-payment" | "paid" | "cancelled" | "refunded";

type ServiceItem = {
  serviceType: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
};

type StudentOption = {
  _id: string;
  fullName?: string;
  email?: string;
};

type OrderItem = {
  _id: string;
  serviceType: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  paymentMethod?: string;
  transactionReference?: string;
  adminNotes?: string;
  createdAt?: string;
  studentId?: {
    _id: string;
    fullName?: string;
    email?: string;
  } | null;
  inquiryId?: {
    _id: string;
    destination?: string;
    status?: string;
  } | null;
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

export default function OrdersPage() {
  const { user } = useAuth();
  const canManageOrders = user ? ["admin", "content-manager"].includes(user.role) : false;
  const [items, setItems] = useState<OrderItem[]>([]);
  const [students, setStudents] = useState<StudentOption[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [studentFilter, setStudentFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [createForm, setCreateForm] = useState({
    studentId: "",
    serviceType: "",
    amount: "",
    currency: "BDT",
    status: "draft" as OrderStatus,
    paymentMethod: "",
    transactionReference: "",
    adminNotes: "",
  });
  const [editForm, setEditForm] = useState({
    status: "draft" as OrderStatus,
    paymentMethod: "",
    transactionReference: "",
    adminNotes: "",
    amount: "",
  });

  const loadOrders = async () => {
    if (!canManageOrders) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await serviceOrdersApi.getAdminOrders({
        q: searchTerm.trim() || undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        serviceType: serviceFilter !== "all" ? serviceFilter : undefined,
        student: studentFilter !== "all" ? studentFilter : undefined,
      });
      setItems(Array.isArray(response.data?.items) ? response.data.items : []);
      setStudents(Array.isArray(response.data?.students) ? response.data.students : []);
      setServices(Array.isArray(response.data?.services) ? response.data.services : []);
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again."
          : status === 403
            ? "Only admin and content-manager accounts can manage orders."
            : error?.response?.data?.message || "Failed to load orders.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, [canManageOrders, searchTerm, statusFilter, serviceFilter, studentFilter]);

  useEffect(() => {
    if (!selectedOrder) return;
    setEditForm({
      status: selectedOrder.status,
      paymentMethod: selectedOrder.paymentMethod || "",
      transactionReference: selectedOrder.transactionReference || "",
      adminNotes: selectedOrder.adminNotes || "",
      amount: String(selectedOrder.amount || ""),
    });
  }, [selectedOrder]);

  useEffect(() => {
    if (!createForm.serviceType) return;
    const service = services.find((item) => item.serviceType === createForm.serviceType);
    if (!service) return;
    setCreateForm((prev) => ({
      ...prev,
      amount: String(service.amount),
      currency: service.currency,
    }));
  }, [createForm.serviceType, services]);

  const summary = useMemo(
    () => ({
      total: items.length,
      open: items.filter((item) => ["draft", "pending-payment"].includes(item.status)).length,
      paid: items.filter((item) => item.status === "paid").length,
      refunded: items.filter((item) => item.status === "refunded").length,
    }),
    [items]
  );

  if (!canManageOrders) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Orders</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Orders</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Manage student service orders and internal payment tracking.</p>
        </div>
        <Card><CardContent className="space-y-4 p-8"><div className="flex items-center gap-3 text-amber-700"><ShieldCheck className="h-5 w-5" /><p className="text-sm font-medium">Only admin and content-manager accounts can manage orders.</p></div></CardContent></Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Orders</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Orders</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">Create service orders, manage payment states, and keep internal order notes organized.</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>Create Order</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total orders</p><p className="mt-2 text-3xl font-semibold">{summary.total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Open orders</p><p className="mt-2 text-3xl font-semibold text-amber-700">{summary.open}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Paid orders</p><p className="mt-2 text-3xl font-semibold text-emerald-700">{summary.paid}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Refunded</p><p className="mt-2 text-3xl font-semibold text-blue-700">{summary.refunded}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_220px_220px_220px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by student, service, reference, or notes" className="pl-10" />
            </div>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All statuses</option>
              {["draft", "pending-payment", "paid", "cancelled", "refunded"].map((status) => (
                <option key={status} value={status}>{formatLabel(status)}</option>
              ))}
            </select>
            <select value={serviceFilter} onChange={(event) => setServiceFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All services</option>
              {services.map((service) => (
                <option key={service.serviceType} value={service.serviceType}>{service.name}</option>
              ))}
            </select>
            <select value={studentFilter} onChange={(event) => setStudentFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All students</option>
              {students.map((student) => (
                <option key={student._id} value={student.email || student.fullName || ""}>
                  {student.fullName || student.email || "Student"}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card><CardContent className="p-8 text-sm text-slate-500">Loading orders...</CardContent></Card>
      ) : loadError ? (
        <Card><CardContent className="space-y-4 p-8"><p className="text-sm font-medium text-red-600">{loadError}</p><Button onClick={loadOrders}>Try Again</Button></CardContent></Card>
      ) : items.length === 0 ? (
        <Card><CardContent className="p-10 text-center text-slate-500">No orders match the current filters.</CardContent></Card>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item._id} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={STATUS_STYLES[item.status]}>{formatLabel(item.status)}</Badge>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-950">{formatLabel(item.serviceType)}</h2>
                    <p className="text-sm text-slate-500">{item.studentId?.fullName || "Student"} • {item.studentId?.email || "No email available"}</p>
                  </div>
                  <p className="text-xl font-semibold text-blue-700">{formatCurrency(item.amount, item.currency)}</p>
                </div>

                <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                  <p><span className="font-medium text-slate-900">Payment method:</span> {item.paymentMethod ? formatLabel(item.paymentMethod) : "Not added"}</p>
                  <p><span className="font-medium text-slate-900">Reference:</span> {item.transactionReference || "Not added"}</p>
                  <p><span className="font-medium text-slate-900">Destination:</span> {item.inquiryId?.destination || "Not linked"}</p>
                  <p><span className="font-medium text-slate-900">Created:</span> {item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "N/A"}</p>
                  <p className="md:col-span-2"><span className="font-medium text-slate-900">Admin notes:</span> {item.adminNotes || "No internal notes yet."}</p>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" onClick={() => setSelectedOrder(item)}>Manage order</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {showCreateModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setShowCreateModal(false)} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">New Order</p>
              <h2 className="text-2xl font-semibold text-slate-950">Create service order</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <select value={createForm.studentId} onChange={(event) => setCreateForm((prev) => ({ ...prev, studentId: event.target.value }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option value="">Select student</option>
                {students.map((student) => (
                  <option key={student._id} value={student._id}>{student.fullName || student.email || "Student"}</option>
                ))}
              </select>
              <select value={createForm.serviceType} onChange={(event) => setCreateForm((prev) => ({ ...prev, serviceType: event.target.value }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service.serviceType} value={service.serviceType}>{service.name}</option>
                ))}
              </select>
              <Input value={createForm.amount} onChange={(event) => setCreateForm((prev) => ({ ...prev, amount: event.target.value }))} placeholder="Amount" />
              <Input value={createForm.currency} onChange={(event) => setCreateForm((prev) => ({ ...prev, currency: event.target.value }))} placeholder="Currency" />
              <select value={createForm.status} onChange={(event) => setCreateForm((prev) => ({ ...prev, status: event.target.value as OrderStatus }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                {["draft", "pending-payment", "paid", "cancelled", "refunded"].map((status) => (
                  <option key={status} value={status}>{formatLabel(status)}</option>
                ))}
              </select>
              <Input value={createForm.paymentMethod} onChange={(event) => setCreateForm((prev) => ({ ...prev, paymentMethod: event.target.value }))} placeholder="Payment method (optional)" />
              <Input value={createForm.transactionReference} onChange={(event) => setCreateForm((prev) => ({ ...prev, transactionReference: event.target.value }))} placeholder="Transaction reference (optional)" className="md:col-span-2" />
            </div>

            <div className="mt-4">
              <Textarea value={createForm.adminNotes} onChange={(event) => setCreateForm((prev) => ({ ...prev, adminNotes: event.target.value }))} placeholder="Internal notes" className="min-h-24" />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>Cancel</Button>
              <Button
                disabled={saving}
                onClick={async () => {
                  if (!createForm.studentId || !createForm.serviceType) {
                    toast.error("Please choose both a student and a service.");
                    return;
                  }

                  try {
                    setSaving(true);
                    await serviceOrdersApi.createAdminOrder({
                      studentId: createForm.studentId,
                      serviceType: createForm.serviceType,
                      amount: Number(createForm.amount || 0),
                      currency: createForm.currency,
                      status: createForm.status,
                      paymentMethod: createForm.paymentMethod || undefined,
                      transactionReference: createForm.transactionReference || undefined,
                      adminNotes: createForm.adminNotes,
                    });
                    toast.success("Order created.");
                    setShowCreateModal(false);
                    setCreateForm({
                      studentId: "",
                      serviceType: "",
                      amount: "",
                      currency: "BDT",
                      status: "draft",
                      paymentMethod: "",
                      transactionReference: "",
                      adminNotes: "",
                    });
                    await loadOrders();
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to create order.");
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                {saving ? "Creating..." : "Create order"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {selectedOrder ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setSelectedOrder(null)} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Manage Order</p>
              <h2 className="text-2xl font-semibold text-slate-950">{formatLabel(selectedOrder.serviceType)}</h2>
              <p className="text-sm text-slate-600">{selectedOrder.studentId?.fullName || "Student"} • {selectedOrder.studentId?.email || "No email available"}</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Input value={editForm.amount} onChange={(event) => setEditForm((prev) => ({ ...prev, amount: event.target.value }))} placeholder="Amount" />
              <select value={editForm.status} onChange={(event) => setEditForm((prev) => ({ ...prev, status: event.target.value as OrderStatus }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                {["draft", "pending-payment", "paid", "cancelled", "refunded"].map((status) => (
                  <option key={status} value={status}>{formatLabel(status)}</option>
                ))}
              </select>
              <Input value={editForm.paymentMethod} onChange={(event) => setEditForm((prev) => ({ ...prev, paymentMethod: event.target.value }))} placeholder="Payment method" />
              <Input value={editForm.transactionReference} onChange={(event) => setEditForm((prev) => ({ ...prev, transactionReference: event.target.value }))} placeholder="Transaction reference" />
            </div>

            <div className="mt-4">
              <Textarea value={editForm.adminNotes} onChange={(event) => setEditForm((prev) => ({ ...prev, adminNotes: event.target.value }))} className="min-h-24" placeholder="Internal notes" />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedOrder(null)}>Close</Button>
              <Button
                disabled={saving}
                onClick={async () => {
                  try {
                    setSaving(true);
                    await serviceOrdersApi.updateAdminOrder(selectedOrder._id, {
                      amount: Number(editForm.amount || selectedOrder.amount),
                      status: editForm.status,
                      paymentMethod: editForm.paymentMethod || undefined,
                      transactionReference: editForm.transactionReference || undefined,
                      adminNotes: editForm.adminNotes,
                    });
                    toast.success("Order updated.");
                    setSelectedOrder(null);
                    await loadOrders();
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to update order.");
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                {saving ? "Saving..." : "Save changes"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
