import { useEffect, useMemo, useState } from "react";
import { CalendarClock, CheckCircle2, Clock3, MapPin, PhoneCall } from "lucide-react";
import { toast } from "sonner";
import { appointmentsApi } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

type StudentAppointment = {
  _id: string;
  date: string;
  time: string;
  type: "online" | "office";
  status: "requested" | "confirmed" | "completed" | "cancelled" | "no-show";
  notes?: string;
  assignedStaff?: {
    _id: string;
    name: string;
    email?: string;
    role?: string;
  } | null;
};

type SlotItem = {
  time: string;
  label: string;
  available: boolean;
  availableStaffCount: number;
};

const STATUS_STYLES: Record<StudentAppointment["status"], string> = {
  requested: "bg-blue-100 text-blue-800",
  confirmed: "bg-emerald-100 text-emerald-800",
  completed: "bg-slate-100 text-slate-800",
  cancelled: "bg-rose-100 text-rose-800",
  "no-show": "bg-amber-100 text-amber-800",
};

const formatDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatStatus = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const getTodayDate = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export default function StudentAppointmentsPage() {
  const [appointments, setAppointments] = useState<StudentAppointment[]>([]);
  const [slots, setSlots] = useState<SlotItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [formState, setFormState] = useState({
    date: getTodayDate(),
    time: "",
    type: "online" as "online" | "office",
    notes: "",
  });

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const response = await appointmentsApi.getStudentAppointments();
      setAppointments(Array.isArray(response.data?.items) ? response.data.items : []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load your appointments.");
    } finally {
      setLoading(false);
    }
  };

  const loadSlots = async (date: string) => {
    if (!date) return;
    try {
      setSlotsLoading(true);
      const response = await appointmentsApi.getStudentSlots(date);
      setSlots(Array.isArray(response.data?.slots) ? response.data.slots : []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load appointment slots.");
      setSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      date: selectedDate,
      time: "",
    }));
    loadSlots(selectedDate);
  }, [selectedDate]);

  const summary = useMemo(
    () => ({
      upcoming: appointments.filter((item) => ["requested", "confirmed"].includes(item.status)).length,
      confirmed: appointments.filter((item) => item.status === "confirmed").length,
      completed: appointments.filter((item) => item.status === "completed").length,
    }),
    [appointments]
  );

  if (loading) {
    return <div className="container mx-auto p-6 text-slate-500">Loading appointments...</div>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Student Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Appointments</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Book a consultation, review your upcoming schedule, and manage requested or confirmed appointments from one place.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Upcoming</p><p className="text-3xl font-semibold text-slate-950">{summary.upcoming}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Confirmed</p><p className="text-3xl font-semibold text-emerald-700">{summary.confirmed}</p></CardContent></Card>
        <Card><CardContent className="space-y-2 p-5"><p className="text-sm text-slate-500">Completed</p><p className="text-3xl font-semibold text-slate-950">{summary.completed}</p></CardContent></Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-5 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Book Consultation</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Choose a slot</h2>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Appointment date</label>
              <Input type="date" min={getTodayDate()} value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Available time slots</label>
              <select
                value={formState.time}
                onChange={(event) => setFormState((prev) => ({ ...prev, time: event.target.value }))}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <option value="">Select a time slot</option>
                {slots.map((slot) => (
                  <option key={slot.time} value={slot.time} disabled={!slot.available}>
                    {slot.label} {slot.available ? `(${slot.availableStaffCount} staff available)` : "(Fully booked)"}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500">
                {slotsLoading ? "Refreshing available slots..." : "Slots are allocated based on counselor availability."}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Consultation type</label>
              <select
                value={formState.type}
                onChange={(event) => setFormState((prev) => ({ ...prev, type: event.target.value as "online" | "office" }))}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <option value="online">Online</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Notes for the team</label>
              <Textarea
                value={formState.notes}
                onChange={(event) => setFormState((prev) => ({ ...prev, notes: event.target.value }))}
                placeholder="Share anything useful before the consultation."
                className="min-h-24"
              />
            </div>

            <div className="flex justify-end">
              <Button
                disabled={saving}
                onClick={async () => {
                  if (!formState.date || !formState.time) {
                    toast.error("Please choose both a date and a time slot.");
                    return;
                  }

                  try {
                    setSaving(true);
                    await appointmentsApi.createStudentAppointment(formState);
                    toast.success("Appointment requested successfully.");
                    setFormState((prev) => ({ ...prev, time: "", notes: "" }));
                    await Promise.all([loadAppointments(), loadSlots(selectedDate)]);
                  } catch (error: any) {
                    toast.error(error?.response?.data?.message || "Failed to book the appointment.");
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                {saving ? "Booking..." : "Book appointment"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="space-y-5 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Your Schedule</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">Upcoming and recent appointments</h2>
            </div>

            {appointments.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                You do not have any appointments yet. Book your first consultation to get started.
              </div>
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment._id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge className={STATUS_STYLES[appointment.status]}>
                            {formatStatus(appointment.status)}
                          </Badge>
                          <Badge variant="outline">{formatStatus(appointment.type)}</Badge>
                        </div>
                        <div className="grid gap-2 text-sm text-slate-600">
                          <p className="flex items-center gap-2">
                            <CalendarClock className="h-4 w-4 text-blue-700" />
                            {formatDate(appointment.date)} at {appointment.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <PhoneCall className="h-4 w-4 text-blue-700" />
                            {appointment.assignedStaff?.name || "Staff assignment pending"}
                          </p>
                          <p className="flex items-center gap-2">
                            {appointment.type === "office" ? <MapPin className="h-4 w-4 text-blue-700" /> : <Clock3 className="h-4 w-4 text-blue-700" />}
                            {appointment.type === "office" ? "Office consultation" : "Online consultation"}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
                          {appointment.notes || "No additional notes added for this appointment."}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {["requested", "confirmed"].includes(appointment.status) ? (
                          <Button
                            variant="outline"
                            disabled={cancellingId === appointment._id}
                            onClick={async () => {
                              try {
                                setCancellingId(appointment._id);
                                await appointmentsApi.cancelStudentAppointment(appointment._id);
                                toast.success("Appointment cancelled.");
                                await loadAppointments();
                                await loadSlots(selectedDate);
                              } catch (error: any) {
                                toast.error(error?.response?.data?.message || "Failed to cancel appointment.");
                              } finally {
                                setCancellingId(null);
                              }
                            }}
                          >
                            {cancellingId === appointment._id ? "Cancelling..." : "Cancel request"}
                          </Button>
                        ) : null}
                        {appointment.status === "completed" ? (
                          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" />
                            Completed
                          </div>
                        ) : null}
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
