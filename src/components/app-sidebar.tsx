import * as React from "react";
import {
  IconCalendar,
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconMail,
  IconRobot,
  IconUsers,
} from "@tabler/icons-react";
import { SettingsIcon } from "lucide-react";
import { Link } from "react-router";

import { NavMain } from "@/components/nav-main";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navLinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: IconUsers,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: IconListDetails,
  },
  {
    title: "Events",
    url: "/dashboard/events",
    icon: IconCalendar,
  },
  {
    title: "Inquiries",
    url: "/dashboard/inquiries",
    icon: IconMail,
    allowedRoles: ["admin", "content-manager"],
  },
  {
    title: "Courses",
    url: "/dashboard/courses",
    icon: IconFolder,
  },
  {
    title: "Ads",
    url: "/dashboard/ads",
    icon: IconChartBar,
  },
  {
    title: "AI Queries",
    url: "/dashboard/ai-query",
    icon: IconRobot,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  const visibleLinks = navLinks.filter((item) => {
    if (!("allowedRoles" in item) || !item.allowedRoles) {
      return true;
    }

    return user ? item.allowedRoles.includes(user.role) : false;
  });

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to="/">
              <span className="text-2xl font-semibold text-blue-500">Abroadways</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={visibleLinks} />
      </SidebarContent>
    </Sidebar>
  );
}
