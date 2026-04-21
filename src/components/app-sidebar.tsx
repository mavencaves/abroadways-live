import * as React from "react"
import {
    IconChartBar,
    IconDashboard,
    IconFolder,
    IconListDetails,
    IconRobot,
    IconUsers,
    IconCalendar,
    IconMail,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SettingsIcon } from "lucide-react";
import { Link } from "react-router";

const navLinks = [
    {
        title: "ড্যাশবোর্ড",
        url: "/admin/dashboard",
        icon: IconDashboard,
    },
    {
        title: "ব্যবহারকারীরা",
        url: "/admin/dashboard/users",
        icon: IconUsers,
    },
    {
        title: "ব্লগসমূহ",
        url: "/admin/dashboard/blogs",
        icon: IconListDetails,
    },
    {
        title: "ইভেন্টসমূহ",
        url: "/admin/dashboard/events",
        icon: IconCalendar,
    },
    {
        title: "Inquiries",
        url: "/admin/dashboard/inquiries",
        icon: IconMail,
    },
    {
        title: "কোর্সসমূহ",
        url: "/admin/dashboard/courses",
        icon: IconFolder,
    },
    {
        title: "বিজ্ঞাপন",
        url: "/admin/dashboard/ads",
        icon: IconChartBar,
    },
    {
        title: "AI কুয়েরি",
        url: "/admin/dashboard/ai-query",
        icon: IconRobot,
    },
    {
        title: "সেটিংস",
        url: "/admin/dashboard/settings",
        icon: SettingsIcon,
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
             <Link to={"/"}>
                 <span className={"text-2xl font-semibold text-blue-500"}>Abroadways</span>
             </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks} />
      </SidebarContent>
    </Sidebar>
  )
}
