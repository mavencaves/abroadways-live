"use client"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

const secondaryNavItems = [
    {
        title: "সবগুলো",
        href: "/all",
        isActive: true,
    },
    {
        title: "শিক্ষার্থীদের মতামত",
        href: "/student-opinions",
    },
    {
        title: "বিজ্ঞতেজের দৃষ্টিভঙ্গি",
        href: "/expert-views",
    },
    {
        title: "অনুরূপ খবর",
        href: "/similar-news",
    },
]

export function SecondaryNavigation() {
    return (
        <div className="w-full border-b bg-white">
            <div className="container mx-auto px-4">
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu className="max-w-none">
                        <NavigationMenuList className="space-x-1">
                            {secondaryNavItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <Link to={item.href}>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "px-4 py-6 text-sm font-semibold rounded-none border-b-2 border-transparent hover:border-gray-300",
                                                item.isActive && "border-blue-600 text-blue-600 bg-blue-50"
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Navigation - Pure CSS Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-1 min-w-max">
                        {secondaryNavItems.map((item) => (
                            <Link key={item.href} to={item.href}>
                                <div
                                    className={cn(
                                        "inline-flex items-center justify-center px-4 py-3 text-sm font-semibold border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap transition-colors",
                                        item.isActive && "border-blue-600 text-blue-600 bg-blue-50"
                                    )}
                                >
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
