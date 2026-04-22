import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Download, Plus, Search, MoreVertical, TrendingUp, Edit, Trash2, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { eventsApi } from "@/lib/api";
import { toast } from "sonner";

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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await eventsApi.getAll();
      setEvents(response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
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

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    const eventDate = new Date(event.date);
    setFormData({
      title: event.title,
      description: event.description,
      date: eventDate.toISOString().split("T")[0],
      time: event.time,
      location: event.location,
      image: event.image || "",
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (editingEvent) {
        await eventsApi.update(editingEvent._id, formData);
        toast.success("Event updated successfully");
      } else {
        await eventsApi.create(formData);
        toast.success("Event created successfully");
      }
      setIsDialogOpen(false);
      loadEvents();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save event");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      await eventsApi.delete(id);
      toast.success("Event deleted successfully");
      loadEvents();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to delete event");
    }
  };

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const upcomingEvents = events.filter((event) => new Date(event.date) >= new Date());
  const pastEvents = events.filter((event) => new Date(event.date) < new Date());

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (loading) {
    return <div className="container mx-auto p-6">Loading events...</div>;
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Total events</h3>
            <p className="mb-2 text-4xl font-bold">{events.length}</p>
            <div className="flex items-center gap-2 text-sm text-teal-500">
              <TrendingUp className="h-4 w-4" />
              <span>{events.length} event records</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Upcoming events</h3>
            <p className="mb-2 text-4xl font-bold">{upcomingEvents.length}</p>
            <div className="flex items-center gap-2 text-sm text-blue-500">
              <Calendar className="h-4 w-4" />
              <span>Planned and upcoming sessions</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <h3 className="mb-2 text-sm text-gray-600">Completed events</h3>
            <p className="mb-2 text-4xl font-bold">{pastEvents.length}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Past event history</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-800">Events</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="gap-2 bg-blue-700 hover:bg-blue-800" onClick={handleCreate}>
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="relative max-w-md flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        <Input
          placeholder="Search events"
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader className="bg-blue-50">
            <TableRow>
              <TableHead className="font-semibold">Event title</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Time</TableHead>
              <TableHead className="font-semibold">Location</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-8 text-center text-gray-500">
                  No events found.
                </TableCell>
              </TableRow>
            ) : (
              filteredEvents.map((event) => {
                const isUpcoming = new Date(event.date) >= new Date();

                return (
                  <TableRow key={event._id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {event.image && (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-12 w-12 rounded-lg object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/48";
                            }}
                          />
                        )}
                        <div>
                          <span className="font-medium">{event.title}</span>
                          <p className="line-clamp-1 text-sm text-gray-500">
                            {event.description.substring(0, 50)}...
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{formatDate(event.date)}</p>
                        <Badge
                          variant="secondary"
                          className={isUpcoming ? "mt-1 bg-green-100 text-green-700" : "mt-1 bg-gray-100 text-gray-700"}
                        >
                          {isUpcoming ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{event.time}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(event)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(event._id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingEvent ? "Edit event" : "Create event"}</DialogTitle>
            <DialogDescription>
              {editingEvent ? "Update the selected event record." : "Add a new event to the Abroadways calendar."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Event title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Event description"
                rows={6}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Event location"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  onPaste={(event) => {
                    const pasted = event.clipboardData.getData("text");
                    if (pasted) {
                      event.preventDefault();
                      setFormData({ ...formData, image: pasted });
                    }
                  }}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800">
              {editingEvent ? "Update Event" : "Create Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
