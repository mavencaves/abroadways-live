import { useEffect, useMemo, useState } from "react";
import { BellRing, CheckCheck, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router";
import { notificationsApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NotificationItem = {
  _id: string;
  type: string;
  title: string;
  message: string;
  link?: string;
  read: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
};

const PRIORITY_STYLES: Record<NotificationItem["priority"], string> = {
  low: "bg-slate-100 text-slate-700",
  medium: "bg-blue-100 text-blue-700",
  high: "bg-amber-100 text-amber-800",
};

const formatLabel = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function NotificationCenterPage({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [highPriorityUnreadCount, setHighPriorityUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [readFilter, setReadFilter] = useState<"all" | "read" | "unread">("all");
  const [priorityFilter, setPriorityFilter] = useState<"" | "low" | "medium" | "high">("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [markingAll, setMarkingAll] = useState(false);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setLoadError(null);
      const response = await notificationsApi.list({
        read: readFilter,
        priority: priorityFilter,
        limit: 100,
      });
      setItems(Array.isArray(response.data?.items) ? response.data.items : []);
      setUnreadCount(Number(response.data?.unreadCount || 0));
      setHighPriorityUnreadCount(Number(response.data?.highPriorityUnreadCount || 0));
    } catch (error: any) {
      const status = error?.response?.status;
      const message =
        status === 401
          ? "Your session has expired. Please sign in again."
          : error?.response?.data?.message || "Failed to load notifications.";
      setLoadError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, [readFilter, priorityFilter]);

  const grouped = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        createdLabel: new Date(item.createdAt).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
      })),
    [items]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">{description}</p>
        </div>
        <Button
          variant="outline"
          disabled={markingAll || unreadCount === 0}
          onClick={async () => {
            try {
              setMarkingAll(true);
              await notificationsApi.markAllRead();
              toast.success("All notifications marked as read.");
              await loadNotifications();
            } catch (error: any) {
              toast.error(error?.response?.data?.message || "Failed to mark notifications as read.");
            } finally {
              setMarkingAll(false);
            }
          }}
        >
          {markingAll ? "Updating..." : "Mark all read"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Total shown</p><p className="mt-2 text-3xl font-semibold">{items.length}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">Unread</p><p className="mt-2 text-3xl font-semibold text-blue-700">{unreadCount}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-slate-500">High priority unread</p><p className="mt-2 text-3xl font-semibold text-amber-700">{highPriorityUnreadCount}</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="grid gap-4 p-5 md:grid-cols-2">
          <select value={readFilter} onChange={(event) => setReadFilter(event.target.value as "all" | "read" | "unread")} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
            <option value="all">All notifications</option>
            <option value="unread">Unread only</option>
            <option value="read">Read only</option>
          </select>
          <select value={priorityFilter} onChange={(event) => setPriorityFilter(event.target.value as "" | "low" | "medium" | "high")} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
            <option value="">All priorities</option>
            <option value="high">High priority</option>
            <option value="medium">Medium priority</option>
            <option value="low">Low priority</option>
          </select>
        </CardContent>
      </Card>

      {loading ? (
        <Card><CardContent className="p-8 text-sm text-slate-500">Loading notifications...</CardContent></Card>
      ) : loadError ? (
        <Card><CardContent className="space-y-4 p-8"><p className="text-sm font-medium text-red-600">{loadError}</p><Button onClick={loadNotifications}>Try Again</Button></CardContent></Card>
      ) : grouped.length === 0 ? (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <div className="rounded-full bg-blue-50 p-3 text-blue-700">
              <BellRing className="h-6 w-6" />
            </div>
            <p className="text-lg font-medium text-slate-900">No notifications found</p>
            <p className="max-w-xl text-sm text-slate-500">You are all caught up for the current filter selection.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {grouped.map((item) => (
            <Card key={item._id} className={`border-slate-200 shadow-sm ${item.read ? "bg-white" : "bg-blue-50/30"}`}>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={PRIORITY_STYLES[item.priority]}>{formatLabel(item.priority)}</Badge>
                      {!item.read ? <Badge variant="outline">Unread</Badge> : null}
                      <Badge variant="secondary">{formatLabel(item.type)}</Badge>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                    <p className="text-sm text-slate-600">{item.message}</p>
                  </div>
                  <p className="text-sm text-slate-500">{item.createdLabel}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.link ? (
                    <Button asChild variant="outline">
                      <Link to={item.link}>Open linked page</Link>
                    </Button>
                  ) : null}
                  {!item.read ? (
                    <Button
                      disabled={savingId === item._id}
                      onClick={async () => {
                        try {
                          setSavingId(item._id);
                          await notificationsApi.markRead(item._id);
                          toast.success("Notification marked as read.");
                          await loadNotifications();
                        } catch (error: any) {
                          toast.error(error?.response?.data?.message || "Failed to update notification.");
                        } finally {
                          setSavingId(null);
                        }
                      }}
                    >
                      {savingId === item._id ? "Updating..." : "Mark as read"}
                    </Button>
                  ) : (
                    <Button variant="ghost" disabled>
                      <CheckCheck className="mr-2 h-4 w-4" />
                      Read
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {highPriorityUnreadCount > 0 ? (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="flex items-center gap-3 p-5 text-amber-900">
            <ShieldAlert className="h-5 w-5" />
            <p className="text-sm">
              You still have <span className="font-semibold">{highPriorityUnreadCount}</span> unread high-priority notification{highPriorityUnreadCount === 1 ? "" : "s"}.
            </p>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
