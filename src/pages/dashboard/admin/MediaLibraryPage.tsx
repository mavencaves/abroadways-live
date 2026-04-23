import { useEffect, useRef, useState } from "react";
import { Copy, ImageIcon, LoaderCircle, ShieldCheck, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { mediaApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MediaItem = {
  publicId: string;
  url: string;
  secureUrl: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
  createdAt?: string;
  folder?: string;
};

const formatDate = (value?: string) =>
  value
    ? new Date(value).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "N/A";

const formatBytes = (value?: number) => {
  if (!value) return "Unknown size";
  const units = ["B", "KB", "MB", "GB"];
  let size = value;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
};

export default function MediaLibraryPage() {
  const { user } = useAuth();
  const canManageMedia = user ? ["admin", "content-manager"].includes(user.role) : false;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);

  const loadMedia = async () => {
    if (!canManageMedia) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setLoadError(null);
      const response = await mediaApi.getAll();
      setItems(Array.isArray(response.data?.items) ? response.data.items : []);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to load the media library.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, [canManageMedia]);

  const handleUpload = async (file?: File) => {
    if (!file) return;

    try {
      setUploading(true);
      const response = await mediaApi.upload(file);
      const uploaded = response.data as MediaItem;
      setItems((prev) => [uploaded, ...prev]);
      toast.success("Image uploaded successfully.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to upload image.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (publicId: string) => {
    if (!confirm("Are you sure you want to delete this image from Cloudinary?")) return;

    try {
      setDeletingId(publicId);
      await mediaApi.delete(publicId);
      setItems((prev) => prev.filter((item) => item.publicId !== publicId));
      if (previewItem?.publicId === publicId) {
        setPreviewItem(null);
      }
      toast.success("Image deleted successfully.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete image.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Image URL copied.");
    } catch {
      toast.error("Unable to copy the image URL.");
    }
  };

  if (!canManageMedia) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Media Library</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Media</h1>
        </div>
        <Card>
          <CardContent className="space-y-4 p-8">
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Only admin and content-manager accounts can manage media.</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Media Library</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Media</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Upload, preview, copy, and delete Cloudinary-hosted images for blogs, events, and future CMS modules.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => handleUpload(event.target.files?.[0])}
          />
          <Button onClick={() => fileInputRef.current?.click()} disabled={uploading} className="gap-2">
            {uploading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {uploading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
      </div>

      {loading ? (
        <Card>
          <CardContent className="p-8 text-sm text-slate-500">Loading media library...</CardContent>
        </Card>
      ) : loadError ? (
        <Card>
          <CardContent className="space-y-4 p-8">
            <p className="text-sm font-medium text-red-600">{loadError}</p>
            <Button onClick={loadMedia}>Try Again</Button>
          </CardContent>
        </Card>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-12 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <ImageIcon className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No media uploaded yet.</p>
            <p className="max-w-xl text-sm text-slate-500">
              Upload your first Cloudinary image here to reuse it across blog posts and events.
            </p>
            <Button onClick={() => fileInputRef.current?.click()} className="mt-1 gap-2">
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Card key={item.publicId} className="overflow-hidden border-slate-200 shadow-sm">
              <button
                type="button"
                className="block w-full text-left"
                onClick={() => setPreviewItem(item)}
              >
                <img src={item.secureUrl || item.url} alt={item.publicId} className="h-52 w-full object-cover" />
              </button>
              <CardContent className="space-y-4 p-4">
                <div className="space-y-1">
                  <p className="truncate text-sm font-medium text-slate-900">{item.publicId.split("/").pop()}</p>
                  <p className="text-xs text-slate-500">
                    {item.width || "?"} × {item.height || "?"} • {formatBytes(item.bytes)}
                  </p>
                  <p className="text-xs text-slate-500">{formatDate(item.createdAt)}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" onClick={() => handleCopyUrl(item.secureUrl || item.url)}>
                    <Copy className="h-4 w-4" />
                    Copy URL
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-red-600"
                    onClick={() => handleDelete(item.publicId)}
                    disabled={deletingId === item.publicId}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={Boolean(previewItem)} onOpenChange={(open) => !open && setPreviewItem(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Media Preview</DialogTitle>
          </DialogHeader>
          {previewItem ? (
            <div className="space-y-4">
              <img
                src={previewItem.secureUrl || previewItem.url}
                alt={previewItem.publicId}
                className="max-h-[65vh] w-full rounded-2xl object-contain bg-slate-50"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-medium text-slate-900">{previewItem.publicId}</p>
                  <p>{formatDate(previewItem.createdAt)}</p>
                  <p>{previewItem.width || "?"} × {previewItem.height || "?"} • {formatBytes(previewItem.bytes)}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => handleCopyUrl(previewItem.secureUrl || previewItem.url)} className="gap-2">
                    <Copy className="h-4 w-4" />
                    Copy URL
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 text-red-600"
                    onClick={() => handleDelete(previewItem.publicId)}
                    disabled={deletingId === previewItem.publicId}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
