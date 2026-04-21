import { type Icon } from "@tabler/icons-react"
import { NavLink } from "react-router"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"

export function NavMain({ items }: { items: { title: string; url: string; icon?: Icon | LucideIcon }[] }) {
  return (
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
              {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                      <NavLink
                          to={item.url}
                          end={item.url === "/dashboard"}
                          title={item.title}
                          className={({ isActive }) =>
                              [
                                  "flex items-center gap-3 rounded-xl px-6 py-4 font-medium transition-colors duration-200",
                                  isActive
                                      ? "bg-primary/10 text-primary shadow-sm"
                                      : "text-muted-foreground hover:bg-accent hover:text-primary"
                              ].join(" ")
                          }
                          tabIndex={0}
                      >
                          {item.icon && <item.icon size={28} aria-hidden="true" />}
                          <span className="whitespace-nowrap">{item.title}</span>
                      </NavLink>
                  </SidebarMenuItem>
              ))}

          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
  )
}
