import { Bell } from "lucide-react"
import { Link } from "react-router"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useNotificationsSummary } from "@/hooks/useNotifications"

export function SiteHeader() {
  const { unreadCount, highPriorityUnreadCount } = useNotificationsSummary(true)

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-slate-200 bg-white/90 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="min-w-0">
          <h1 className="text-base font-semibold text-slate-900">Abroadways Dashboard</h1>
          <p className="text-xs text-slate-500">Manage inquiries, users, blogs, and events from one admin system.</p>
        </div>
        <div className="ml-auto">
          <Button asChild variant="outline" size="sm" className="relative">
            <Link to="/dashboard/notifications">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              {unreadCount > 0 ? (
                <span className={`ml-2 inline-flex min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold text-white ${highPriorityUnreadCount > 0 ? "bg-amber-600" : "bg-blue-700"}`}>
                  {unreadCount}
                </span>
              ) : null}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
