import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  Copy,
  ImagePlus,
  LoaderCircle,
  MapPin,
  Save,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { eventsApi, mediaApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type EventRecord = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

type FormState = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
};

const DEFAULT_FORM: FormState = {
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
  image: "",
};

export default function EventEditorPage() {
  const { user } = useAuth();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(eventId);
  const canManageEvents = user ? ["admin", "content-manager"].includes(user.role) : false;
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (!isEditing || !eventId || !canManageEvents) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const loadEvent = async () => {
      try {
        setLoading(true);
        setLoadError(null);
        const response = await eventsApi.getById(eventId);
        const event: EventRecord = response.data;

        if (!isMounted) return;

        setForm({
          title: event.title || "",
          description: event.description || "",
          date: event.date ? new Date(event.date).toISOString().split("T")[0] : "",
          time: event.time || "",
          location: event.location || "",
          image: event.image || "",
        });
      } catch (error: any) {
        if (!isMounted) return;
        const message = error?.response?.data?.message || "Failed to load the event editor.";
        setLoadError(message);
        toast.error(message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadEvent();

    return () => {
      isMounted = false;
    };
  }, [canManageEvents, eventId, isEditing]);

  const handleImageUpload = async (file?: File) => {
    if (!file) return;

    try {
      setUploadingImage(true);
      const response = await mediaApi.upload(file);
      const media = response.data;
      setForm((prev) => ({ ...prev, image: media.secureUrl || media.url }));
      toast.success("Event image uploaded successfully.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to upload the event image.");
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    }
  };

  const handleCopyUrl = async () => {
    if (!form.image) return;
    try {
      await navigator.clipboard.writeText(form.image);
      toast.success("Event image URL copied.");
    } catch {
      toast.error("Unable to copy the image URL.");
    }
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.description.trim() || !form.date || !form.time || !form.location.trim()) {
      toast.error("Title, description, date, time, and location are required.");
      return;
    }

    try {
      setSaving(true);
      if (isEditing && eventId) {
        await eventsApi.update(eventId, form);
        toast.success("Event updated successfully.");
      } else {
        await eventsApi.create(form);
        toast.success("Event created successfully.");
      }
      navigate("/dashboard/events");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save the event.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!eventId || !confirm("Are you sure you want to delete this event?")) return;

    try {
      setDeleting(true);
      await eventsApi.delete(eventId);
      toast.success("Event deleted successfully.");
      navigate("/dashboard/events");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete the event.");
    } finally {
      setDeleting(false);
    }
  };

  if (!canManageEvents) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Event Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Event Editor</h1>
        </div>
        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin and content-manager accounts can access the event editor.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return <div className="space-y-6 text-sm text-slate-500">Loading event editor...</div>;
  }

  if (loadError) {
    return (
      <Card>
        <CardContent className="space-y-4 p-8">
          <p className="text-sm font-medium text-red-600">{loadError}</p>
          <Button asChild>
            <Link to="/dashboard/events">Back to Events</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Button asChild variant="ghost" className="-ml-3 mb-3 text-slate-600">
            <Link to="/dashboard/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Event Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">
            {isEditing ? "Edit Event" : "Create Event"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Manage event details, timing, venue, and Cloudinary-hosted imagery from one clean publishing workspace.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {isEditing ? (
            <Button variant="outline" onClick={handleDelete} disabled={deleting || saving} className="gap-2 text-red-600">
              <Trash2 className="h-4 w-4" />
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          ) : null}
          <Button onClick={handleSave} disabled={saving} className="gap-2">
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : isEditing ? "Update Event" : "Create Event"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                placeholder="Study abroad fair 2026"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
                placeholder="Describe the audience, event agenda, and why students should attend."
                rows={10}
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="time"
                    type="time"
                    value={form.time}
                    onChange={(event) => setForm((prev) => ({ ...prev, time: event.target.value }))}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="location"
                    value={form.location}
                    onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
                    placeholder="Dhaka Office or Online"
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => handleImageUpload(event.target.files?.[0])}
              />

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => imageInputRef.current?.click()}
                  disabled={uploadingImage}
                  className="gap-2"
                >
                  {uploadingImage ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <ImagePlus className="h-4 w-4" />
                  )}
                  {uploadingImage ? "Uploading..." : "Upload Event Image"}
                </Button>
                <Button asChild variant="outline">
                  <Link to="/dashboard/media">Open Media Library</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCopyUrl}
                  disabled={!form.image}
                  className="gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy URL
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input value={form.image} readOnly placeholder="Upload an image to store it in Cloudinary" />
              </div>

              {form.image ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src={form.image}
                    alt="Event preview"
                    className="h-56 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-500">
                  <ImagePlus className="mb-3 h-6 w-6 text-slate-400" />
                  Upload an event image to store it in Cloudinary and reuse it later.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
