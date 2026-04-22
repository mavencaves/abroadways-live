import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Clock3,
  Download,
  Edit,
  MapPin,
  MoreVertical,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { eventsApi } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

type TimingFilter = "all" | "upcoming" | "past";
type SortOrder = "date-asc" | "date-desc";

const formatDateTime = (value: string, time?: string) => {
  const datePart = new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return time ? `${datePart} • ${time}` : datePart;
};

const isUpcomingEvent = (value: string) => {
  const eventDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate.getTime() >= today.getTime();
};

export default function EventsPage() {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [timingFilter, setTimingFilter] = useState<TimingFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("date-asc");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: "",
  });

  const canManageEvents = user ? ["admin", "content-manager"].includes(user.role) : false;

  const loadEvents = async () => {
    if (!canManageEvents) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await eventsApi.getAll();
      const list = Array.isArray(response.data) ? response.data : [];
      setEvents(list);
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again to continue managing events."
          : status === 403
            ? "Access denied. Only admin and content-manager accounts can manage events."
            : error?.response?.data?.message || "Failed to load events.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, [canManageEvents]);

  const filteredEvents = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return [...events]
      .filter((entry) => {
        const matchesSearch =
          !normalizedSearch ||
          entry.title.toLowerCase().includes(normalizedSearch) ||
          entry.description.toLowerCase().includes(normalizedSearch) ||
          entry.location.toLowerCase().includes(normalizedSearch);

        const matchesTiming =
          timingFilter === "all" ||
          (timingFilter === "upcoming" && isUpcomingEvent(entry.date)) ||
          (timingFilter === "past" && !isUpcomingEvent(entry.date));

        return matchesSearch && matchesTiming;
      })
      .sort((a, b) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return sortOrder === "date-asc" ? aTime - bTime : bTime - aTime;
      });
  }, [events, searchTerm, timingFilter, sortOrder]);

  const upcomingEvents = events.filter((entry) => isUpcomingEvent(entry.date));
  const pastEvents = events.filter((entry) => !isUpcomingEvent(entry.date));

  const exportCsv = () => {
    if (!filteredEvents.length) {
      toast.error("There are no events to export.");
      return;
    }

    const headers = ["Title", "Date", "Time", "Location", "Status"];
    const rows = filteredEvents.map((entry) =>
      [
        entry.title,
        formatDateTime(entry.date),
        entry.time || "N/A",
        entry.location,
        isUpcomingEvent(entry.date) ? "Upcoming" : "Past",
      ]
        .map((value) => `"${String(value).replace(/"/g, "\"\"")}"`)
        .join(","),
    );

    const blob = new Blob([[headers.join(","), ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "abroadways-events.csv";
    link.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully.");
  };

  const handleCreate = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      image: "",
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (entry: Event) => {
    setEditingEvent(entry);
    const eventDate = new Date(entry.date);
    setFormData({
      title: entry.title,
      description: entry.description,
      date: eventDate.toISOString().split("T")[0],
      time: entry.time,
      location: entry.location,
      image: entry.image || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.description.trim() || !formData.date || !formData.time || !formData.location.trim()) {
      toast.error("Title, description, date, time, and location are required.");
      return;
    }

    try {
      setSaving(true);
      if (editingEvent) {
        await eventsApi.update(editingEvent._id, formData);
        toast.success("Event updated successfully.");
      } else {
        await eventsApi.create(formData);
        toast.success("Event created successfully.");
      }
      setIsDialogOpen(false);
      await loadEvents();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save event.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      setDeletingId(id);
      await eventsApi.delete(id);
      toast.success("Event deleted successfully.");
      await loadEvents();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete event.");
    } finally {
      setDeletingId(null);
    }
  };

  if (!canManageEvents) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Event Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Events</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage event publishing, schedules, and updates from the central admin workspace.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">
                Only admin and content-manager accounts can manage events.
              </p>
            </div>
            <p className="text-sm text-slate-600">
              Your current role is <span className="font-medium text-slate-900">{user?.role || "unknown"}</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Event Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Events</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage upcoming campaigns, keep schedules accurate, and coordinate the public event calendar from one workspace.
          </p>
        </div>
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium text-slate-900">{filteredEvents.length}</span> of{" "}
          <span className="font-medium text-slate-900">{events.length}</span> events
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Total events</p>
            <p className="mt-2 text-3xl font-semibold">{events.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Upcoming</p>
            <p className="mt-2 text-3xl font-semibold">{upcomingEvents.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">Past</p>
            <p className="mt-2 text-3xl font-semibold">{pastEvents.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">This month</p>
            <p className="mt-2 text-3xl font-semibold">
              {
                events.filter((entry) => {
                  const eventDate = new Date(entry.date);
                  const now = new Date();
                  return (
                    eventDate.getMonth() === now.getMonth() &&
                    eventDate.getFullYear() === now.getFullYear()
                  );
                }).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="grid gap-4 xl:grid-cols-[1fr_220px_220px_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title, description, or location"
                className="pl-10"
              />
            </div>
            <Select value={timingFilter} onValueChange={(value: TimingFilter) => setTimingFilter(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Timing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All events</SelectItem>
                <SelectItem value="upcoming">Upcoming only</SelectItem>
                <SelectItem value="past">Past only</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortOrder} onValueChange={(value: SortOrder) => setSortOrder(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-asc">Soonest first</SelectItem>
                <SelectItem value="date-desc">Latest first</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={exportCsv} className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button onClick={handleCreate} className="gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="p-8 text-sm text-slate-500">Loading events...</CardContent>
        </Card>
      ) : loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={loadEvents}>Try Again</Button>
          </CardContent>
        </Card>
      ) : filteredEvents.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <Calendar className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No events match your current filters.</p>
            <p className="max-w-xl text-sm text-slate-500">
              Adjust your search or create a new event to keep the Abroadways calendar up to date.
            </p>
            <Button onClick={handleCreate} className="mt-1 gap-2">
              <Plus className="h-4 w-4" />
              Create Event
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="font-semibold">Event</TableHead>
                    <TableHead className="font-semibold">Date & Time</TableHead>
                    <TableHead className="font-semibold">Location</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Updated</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.map((entry) => {
                    const upcoming = isUpcomingEvent(entry.date);

                    return (
                      <TableRow key={entry._id} className="hover:bg-slate-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {entry.image ? (
                              <img
                                src={entry.image}
                                alt={entry.title}
                                className="h-12 w-12 rounded-lg object-cover"
                                onError={(event) => {
                                  event.currentTarget.src = "https://via.placeholder.com/48";
                                }}
                              />
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                <Calendar className="h-5 w-5" />
                              </div>
                            )}
                            <div className="max-w-[360px]">
                              <p className="font-medium text-slate-900">{entry.title}</p>
                              <p className="line-clamp-2 text-sm text-slate-500">{entry.description}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1 text-sm text-slate-700">
                            <p className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-slate-400" />
                              {formatDateTime(entry.date)}
                            </p>
                            <p className="flex items-center gap-2 text-slate-500">
                              <Clock3 className="h-4 w-4 text-slate-400" />
                              {entry.time || "Time not set"}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            {entry.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={upcoming ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}>
                            {upcoming ? "Upcoming" : "Past"}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDateTime(entry.updatedAt || entry.createdAt)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(entry)}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() => handleDelete(entry._id)}
                                disabled={deletingId === entry._id}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                {deletingId === entry._id ? "Deleting..." : "Delete"}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingEvent ? "Edit event" : "Create event"}</DialogTitle>
            <DialogDescription>
              {editingEvent
                ? "Update the selected event record."
                : "Add a new event to the Abroadways calendar."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                placeholder="Event title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                placeholder="Share the event overview, audience, and main value for attendees"
                rows={6}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(event) => setFormData({ ...formData, time: event.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(event) => setFormData({ ...formData, location: event.target.value })}
                  placeholder="Dhaka, Online, or a venue name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(event) => setFormData({ ...formData, image: event.target.value })}
                  placeholder="https://example.com/event-image.jpg"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800" disabled={saving}>
              {saving ? "Saving..." : editingEvent ? "Update Event" : "Create Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
