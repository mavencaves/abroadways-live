import { Bell } from "lucide-react";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNotificationsSummary } from "@/hooks/useNotifications";

export function StudentHeader() {
  const { unreadCount } = useNotificationsSummary(true);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-slate-200 bg-white/90 backdrop-blur transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <div className="min-w-0">
          <h1 className="text-base font-semibold text-slate-900">Abroadways Student Portal</h1>
          <p className="text-xs text-slate-500">
            Track your study-abroad profile, application progress, and required next steps.
          </p>
        </div>
        <div className="ml-auto">
          <Button asChild variant="outline" size="sm" className="relative">
            <Link to="/student/notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              {unreadCount > 0 ? (
                <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-blue-700 px-1.5 text-[10px] font-semibold text-white">
                  {unreadCount}
                </span>
              ) : null}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
