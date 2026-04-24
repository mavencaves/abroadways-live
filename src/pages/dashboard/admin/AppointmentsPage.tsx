import { useEffect, useMemo, useState } from "react";
import { CalendarClock, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { appointmentsApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

type AppointmentStatus = "requested" | "confirmed" | "completed" | "cancelled" | "no-show";

type AppointmentRecord = {
  _id: string;
  date: string;
  time: string;
  type: "online" | "office";
  status: AppointmentStatus;
  notes?: string;
  studentId?: {
    _id: string;
    fullName?: string;
    email?: string;
    phone?: string;
    preferredCountry?: string;
    linkedInquiry?: string | null;
  } | null;
  inquiryId?: {
    _id: string;
    status?: string;
    destination?: string;
  } | null;
  assignedStaff?: {
    _id: string;
    name: string;
    email?: string;
    role?: string;
  } | null;
  createdAt?: string;
};

type StaffOption = {
  _id: string;
  name: string;
  email?: string;
  role?: string;
};

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  requested: "bg-blue-100 text-blue-800",
  confirmed: "bg-emerald-100 text-emerald-800",
  completed: "bg-slate-100 text-slate-800",
  cancelled: "bg-rose-100 text-rose-800",
  "no-show": "bg-amber-100 text-amber-800",
};

const formatStatus = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const formatDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const getTodayDate = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export default function AppointmentsPage() {
  const { user } = useAuth();
  const canManageAppointments = user ? ["admin", "content-manager"].includes(user.role) : false;
  const [items, setItems] = useState<AppointmentRecord[]>([]);
  const [staffOptions, setStaffOptions] = useState<StaffOption[]>([]);
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [staffFilter, setStaffFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState<AppointmentRecord | null>(null);
  const [saving, setSaving] = useState(false);
  const [formState, setFormState] = useState({
    assignedStaff: "",
    date: "",
    time: "",
    type: "online" as "online" | "office",
    status: "requested" as AppointmentStatus,
    notes: "",
  });

  const loadAppointments = async () => {
    if (!canManageAppointments) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await appointmentsApi.getAdminAppointments({
        q: searchTerm.trim() || undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        staffId: staffFilter !== "all" ? staffFilter : undefined,
        date: dateFilter || undefined,
      });
      setItems(Array.isArray(response.data?.items) ? response.data.items : []);
      setStaffOptions(Array.isArray(response.data?.staffOptions) ? response.data.staffOptions : []);
      setSlots(Array.isArray(response.data?.slots) ? response.data.slots : []);
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again."
          : status === 403
            ? "Only admin and content-manager accounts can manage appointments."
            : error?.response?.data?.message || "Failed to load appointments.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [canManageAppointments, searchTerm, statusFilter, staffFilter, dateFilter]);

  useEffect(() => {
    if (!selectedItem) return;
    setFormState({
      assignedStaff: selectedItem.assignedStaff?._id || "",
      date: selectedItem.date,
      time: selectedItem.time,
      type: selectedItem.type,
      status: selectedItem.status,
      notes: selectedItem.notes || "",
    });
  }, [selectedItem]);

  const summary = useMemo(
    () => ({
      total: items.length,
      today: items.filter((item) => item.date === getTodayDate()).length,
      requested: items.filter((item) => item.status === "requested").length,
      confirmed: items.filter((item) => item.status === "confirmed").length,
    }),
    [items]
  );

  if (!canManageAppointments) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Appointments</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Appointments</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage requested and confirmed consultations across the student portal and CRM.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin and content-manager accounts can manage appointments.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Appointments</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Appointments</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Track requests, confirm schedules, reschedule consultations, and keep student appointments organized.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total</p><p className="mt-2 text-3xl font-semibold">{summary.total}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Today</p><p className="mt-2 text-3xl font-semibold text-blue-700">{summary.today}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Requested</p><p className="mt-2 text-3xl font-semibold text-amber-700">{summary.requested}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Confirmed</p><p className="mt-2 text-3xl font-semibold text-emerald-700">{summary.confirmed}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_220px_220px_220px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by student, email, staff, or notes" className="pl-10" />
            </div>
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All statuses</option>
              {["requested", "confirmed", "completed", "cancelled", "no-show"].map((status) => (
                <option key={status} value={status}>
                  {formatStatus(status)}
                </option>
              ))}
            </select>
            <select value={staffFilter} onChange={(event) => setStaffFilter(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
              <option value="all">All staff</option>
              {staffOptions.map((staff) => (
                <option key={staff._id} value={staff._id}>
                  {staff.name}
                </option>
              ))}
            </select>
            <Input type="date" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)} />
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card><CardContent className="p-8 text-sm text-slate-500">Loading appointments...</CardContent></Card>
      ) : loadError ? (
        <Card><CardContent className="space-y-4 p-8"><p className="text-sm font-medium text-red-600">{loadError}</p><Button onClick={loadAppointments}>Try Again</Button></CardContent></Card>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <CalendarClock className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No appointments match the current filters.</p>
            <p className="max-w-xl text-sm text-slate-500">Adjust the filters to see booked consultations.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item._id} className="border-slate-200 shadow-sm">
              <CardContent className="space-y-4 p-5">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={STATUS_STYLES[item.status]}>{formatStatus(item.status)}</Badge>
                      <Badge variant="outline">{formatStatus(item.type)}</Badge>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">{item.studentId?.fullName || "Student"}</p>
                      <p className="text-sm text-slate-500">{item.studentId?.email || "No email available"}</p>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                      <p><span className="font-medium text-slate-900">Schedule:</span> {formatDate(item.date)} at {item.time}</p>
                      <p><span className="font-medium text-slate-900">Staff:</span> {item.assignedStaff?.name || "Unassigned"}</p>
                      <p><span className="font-medium text-slate-900">Destination:</span> {item.inquiryId?.destination || item.studentId?.preferredCountry || "Not specified"}</p>
                      <p><span className="font-medium text-slate-900">Inquiry status:</span> {item.inquiryId?.status ? formatStatus(item.inquiryId.status) : "Not linked"}</p>
                    </div>
                    <p className="text-sm text-slate-600">{item.notes || "No notes added for this appointment."}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" onClick={() => setSelectedItem(item)}>
                      Manage
                    </Button>
                    {item.status === "confirmed" ? (
                      <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Ready
                      </div>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setSelectedItem(null)} />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Manage Appointment</p>
              <h2 className="text-2xl font-semibold text-slate-950">{selectedItem.studentId?.fullName || "Student appointment"}</h2>
              <p className="text-sm text-slate-600">{selectedItem.studentId?.email || "No email available"}</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Assigned staff</label>
                <select value={formState.assignedStaff} onChange={(event) => setFormState((prev) => ({ ...prev, assignedStaff: event.target.value }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option value="">Auto assign</option>
                  {staffOptions.map((staff) => (
                    <option key={staff._id} value={staff._id}>
                      {staff.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Status</label>
                <select value={formState.status} onChange={(event) => setFormState((prev) => ({ ...prev, status: event.target.value as AppointmentStatus }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  {["requested", "confirmed", "completed", "cancelled", "no-show"].map((status) => (
                    <option key={status} value={status}>
                      {formatStatus(status)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Date</label>
                <Input type="date" value={formState.date} onChange={(event) => setFormState((prev) => ({ ...prev, date: event.target.value }))} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Time slot</label>
                <select value={formState.time} onChange={(event) => setFormState((prev) => ({ ...prev, time: event.target.value }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Type</label>
                <select value={formState.type} onChange={(event) => setFormState((prev) => ({ ...prev, type: event.target.value as "online" | "office" }))} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option value="online">Online</option>
                  <option value="office">Office</option>
                </select>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-slate-700">Notes</label>
              <Textarea value={formState.notes} onChange={(event) => setFormState((prev) => ({ ...prev, notes: event.target.value }))} className="min-h-24" />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedItem(null)}>Close</Button>
              <Button
                disabled={saving}
                onClick={async () => {
                  try {
                    setSaving(true);
                    await appointmentsApi.updateAdminAppointment(selectedItem._id, {
                      assignedStaff: formState.assignedStaff || null,
                      date: formState.date,
                      time: formState.time,
                      type: formState.type,
                      status: formState.status,
                      notes: formState.notes,
                    });
                    toast.success("Appointment updated.");
                    setSelectedItem(null);
                    await loadAppointments();
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to update appointment.");
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
