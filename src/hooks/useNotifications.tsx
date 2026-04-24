import { useEffect, useState } from "react";
import { notificationsApi } from "@/lib/api";

type NotificationSummary = {
  unreadCount: number;
  highPriorityUnreadCount: number;
};

export function useNotificationsSummary(enabled = true) {
  const [summary, setSummary] = useState<NotificationSummary>({
    unreadCount: 0,
    highPriorityUnreadCount: 0,
  });
  const [isLoading, setIsLoading] = useState(enabled);

  const load = async () => {
    if (!enabled) {
      setSummary({ unreadCount: 0, highPriorityUnreadCount: 0 });
      setIsLoading(false);
      return;
    }

    try {
      const response = await notificationsApi.list({ read: "unread", limit: 10 });
      setSummary({
        unreadCount: Number(response.data?.unreadCount || 0),
        highPriorityUnreadCount: Number(response.data?.highPriorityUnreadCount || 0),
      });
    } catch {
      setSummary({ unreadCount: 0, highPriorityUnreadCount: 0 });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(enabled);
    load();

    if (!enabled) return;
    const timer = window.setInterval(load, 60000);
    return () => window.clearInterval(timer);
  }, [enabled]);

  return {
    ...summary,
    isLoading,
    refresh: load,
  };
}
