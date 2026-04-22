import * as React from "react";
import {
  IconCalendar,
  IconDashboard,
  IconListDetails,
  IconMail,
  IconUsers,
} from "@tabler/icons-react";
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
    allowedRoles: ["admin", "content-manager"],
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: IconUsers,
    allowedRoles: ["admin"],
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: IconListDetails,
    allowedRoles: ["admin", "content-manager"],
  },
  {
    title: "Events",
    url: "/dashboard/events",
    icon: IconCalendar,
    allowedRoles: ["admin", "content-manager"],
  },
  {
    title: "Inquiries",
    url: "/dashboard/inquiries",
    icon: IconMail,
    allowedRoles: ["admin", "content-manager"],
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
            <Link to="/dashboard" className="flex flex-col">
              <span className="text-2xl font-semibold text-blue-500">Abroadways</span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">Admin Dashboard</span>
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
