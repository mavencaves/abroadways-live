import * as React from "react";
import {
  IconCalendarTime,
  IconDashboard,
  IconBell,
  IconFileText,
  IconFolder,
  IconReceipt,
  IconMessages,
  IconNotebook,
  IconSparkles,
  IconUserCircle,
} from "@tabler/icons-react";
import { Link } from "react-router";
import { NavMain } from "@/components/nav-main";
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
    url: "/student/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Notifications",
    url: "/student/notifications",
    icon: IconBell,
  },
  {
    title: "AbroadAI",
    url: "/student/abroadai",
    icon: IconMessages,
  },
  {
    title: "Mock Tests",
    url: "/student/mock-tests",
    icon: IconNotebook,
  },
  {
    title: "Profile",
    url: "/student/profile",
    icon: IconUserCircle,
  },
  {
    title: "Applications",
    url: "/student/applications",
    icon: IconFileText,
  },
  {
    title: "Services",
    url: "/student/services",
    icon: IconSparkles,
  },
  {
    title: "Payments",
    url: "/student/payments",
    icon: IconReceipt,
  },
  {
    title: "Appointments",
    url: "/student/appointments",
    icon: IconCalendarTime,
  },
  {
    title: "Documents",
    url: "/student/documents",
    icon: IconFolder,
  },
];

export function StudentSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to="/student/dashboard" className="flex flex-col">
              <span className="text-2xl font-semibold text-blue-500">Abroadways</span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">Student Portal</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks} />
      </SidebarContent>
    </Sidebar>
  );
}
