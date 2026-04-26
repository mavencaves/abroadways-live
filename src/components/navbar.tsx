import { BadgeCheck, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExamLayout } from "@/components/exam-nav-layout";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { type NavigationItem, navigationItems } from "@/data/navigation.ts";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { publicPagesApi } from "@/lib/api";

type SiteBranding = {
    siteLogo?: string;
    siteLogoAlt?: string;
    siteLogoDark?: string;
    siteLogoDarkAlt?: string;
    favicon?: string;
};

function DefaultBrandMark() {
    return (
        <>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,#06142f_0%,#0b2a67_55%,#2563eb_100%)] text-sm font-bold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover:scale-[1.03] lg:h-10.5 lg:w-10.5">
                A
            </div>
            <div className="flex min-w-0 flex-col items-start justify-center">
                <span className="block text-[1.36rem] font-bold tracking-tight leading-none text-slate-950 lg:text-[1.5rem]">
                    Abroad<span className="text-blue-700">ways</span>
                </span>
                <span className="mt-1 inline-flex max-w-full items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.13em] leading-none text-orange-700 sm:text-[9.25px]">
                    <BadgeCheck className="h-3 w-3 shrink-0 text-orange-500" />
                    <span className="truncate">UKVI Approved LanguageCert Test Centre</span>
                </span>
            </div>
        </>
    );
}

function NavbarLogo({
    siteLogo,
    siteLogoAlt,
}: {
    siteLogo?: string;
    siteLogoAlt?: string;
}) {
    if (siteLogo) {
        return (
            <img
                src={siteLogo}
                alt={siteLogoAlt || "Abroadways logo"}
                className="h-12 w-auto max-w-[220px] shrink-0 object-contain lg:h-14 lg:max-w-[260px]"
            />
        );
    }

    return <DefaultBrandMark />;
}

const MultiLevelDropdown = ({ items }: { items: NavigationItem[] }) => {
    return (
        <>
            {items.map((item) => (
                <div key={item.label}>
                    {item.hasDropdown && item.dropdownItems ? (
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="flex items-center justify-between font-medium">
                                <span>{item.label}</span>
                                <ChevronRight className="h-4 w-4" />
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-64">
                                <MultiLevelDropdown items={item.dropdownItems} />
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    ) : (
                        <DropdownMenuItem asChild>
                            <Link to={item.href} className="w-full font-medium">
                                {item.label}
                            </Link>
                        </DropdownMenuItem>
                    )}
                </div>
            ))}
        </>
    );
};

const MobileMultiLevelNav = ({
    items,
    expandedItems,
    toggleExpanded,
    setIsOpen,
    level = 0,
}: {
    items: NavigationItem[];
    expandedItems: string[];
    toggleExpanded: (itemLabel: string) => void;
    setIsOpen: (isOpen: boolean) => void;
    level?: number;
}) => {
    const getItemKey = (item: NavigationItem) => `${item.label}-level-${level}`;

    return (
        <div className={`space-y-2 ${level > 0 ? "ml-4" : ""}`}>
            {items.map((item, index) => {
                const itemKey = getItemKey(item);
                const isExpanded = expandedItems.includes(itemKey);

                return (
                    <motion.div
                        key={itemKey}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
                        className="w-full"
                    >
                        {item.hasDropdown && item.dropdownItems ? (
                            <div className="space-y-2">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 ${
                                        level > 0 ? "border-gray-200 bg-gray-50" : "bg-white"
                                    }`}
                                    onClick={() => toggleExpanded(itemKey)}
                                >
                                    <span className={level > 0 ? "text-sm" : ""}>{item.label}</span>
                                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                        <ChevronDown className="h-4 w-4 text-gray-500" />
                                    </motion.div>
                                </motion.button>
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-2 border-l-2 border-blue-100 pl-3">
                                                <MobileMultiLevelNav
                                                    items={item.dropdownItems}
                                                    expandedItems={expandedItems}
                                                    toggleExpanded={toggleExpanded}
                                                    setIsOpen={setIsOpen}
                                                    level={level + 1}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                to={item.href}
                                className={`block w-full rounded-lg border px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 ${
                                    level > 0 ? "border-gray-200 bg-gray-50 text-sm" : "bg-white"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [examDropdownOpen, setExamDropdownOpen] = useState(false);
    const [siteBranding, setSiteBranding] = useState<SiteBranding | null>(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;

        const loadSiteBranding = async () => {
            try {
                const response = await publicPagesApi.getByRouteKey("site");
                if (!mounted || !response?.data) return;

                setSiteBranding(response.data);

                if (response.data.favicon && typeof document !== "undefined") {
                    let faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;

                    if (!faviconLink) {
                        faviconLink = document.createElement("link");
                        faviconLink.rel = "icon";
                        document.head.appendChild(faviconLink);
                    }

                    faviconLink.href = response.data.favicon;
                }
            } catch (error) {
                console.warn("Site branding CMS content could not be loaded. Falling back to the default navbar logo.", error);
            }
        };

        loadSiteBranding();

        return () => {
            mounted = false;
        };
    }, []);

    const toggleExpanded = (itemLabel: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemLabel) ? prev.filter((item) => item !== itemLabel) : [...prev, itemLabel],
        );
    };

    const getDropdownWidthClass = (item: NavigationItem) => {
        if (item.label === "Study Abroad") {
            return "w-80";
        }

        return "w-72";
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur supports-[backdrop-filter]:bg-white/84">
            <div className="section-container">
                <div className="flex h-[76px] items-center justify-between gap-4 lg:h-[80px]">
                    <div className="flex min-w-0 shrink-0 items-center">
                        <Link
                            to="/"
                            className="group flex min-w-0 items-center gap-2.5 text-slate-950 transition-colors hover:text-blue-800"
                        >
                            <NavbarLogo
                                siteLogo={siteBranding?.siteLogo || siteBranding?.siteLogoDark}
                                siteLogoAlt={siteBranding?.siteLogoAlt || siteBranding?.siteLogoDarkAlt}
                            />
                        </Link>
                    </div>

                    <div className="hidden min-w-0 flex-1 justify-center lg:flex">
                        <div className="mx-3 flex h-11 min-w-0 items-center gap-px rounded-full border border-slate-200/80 bg-slate-50/90 px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                            {navigationItems.map((item) => (
                                <div key={item.label} className="flex items-center">
                                    {item.hasDropdown ? (
                                        item.isExamSection ? (
                                            <DropdownMenu open={examDropdownOpen} onOpenChange={setExamDropdownOpen}>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="flex h-9 items-center space-x-1 rounded-full px-2.5 text-[13px] font-medium leading-none whitespace-nowrap text-slate-700 hover:text-slate-950"
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronDown className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="center" className="w-auto rounded-[1.5rem] border border-slate-200 p-0 shadow-[0_24px_56px_rgba(15,23,42,0.14)]">
                                                    <ExamLayout
                                                        examData={item.dropdownItems || []}
                                                        onLinkClick={() => setExamDropdownOpen(false)}
                                                    />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="flex h-9 items-center space-x-1 rounded-full px-2.5 text-[13px] font-medium leading-none whitespace-nowrap text-slate-700 hover:text-slate-950"
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronDown className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    align="center"
                                                    className={`${getDropdownWidthClass(item)} rounded-[1.35rem] border border-slate-200 p-2 shadow-[0_24px_56px_rgba(15,23,42,0.14)]`}
                                                >
                                                    <MultiLevelDropdown items={item.dropdownItems || []} />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="inline-flex h-9 items-center rounded-full px-2.5 text-center text-[13px] font-medium leading-none whitespace-nowrap text-slate-700 transition-all duration-200 hover:bg-white hover:text-slate-950"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden shrink-0 lg:block">
                        <div className="flex items-center gap-2">
                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="h-9 rounded-full px-4 text-[13px] font-semibold text-white">
                                            {user.name}
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 rounded-[1.25rem] border border-slate-200 p-2 shadow-[0_24px_56px_rgba(15,23,42,0.14)]">
                                        {["admin", "content-manager", "course-manager"].includes(user.role) && (
                                            <DropdownMenuItem onSelect={() => navigate("/dashboard")}>
                                                Admin Panel
                                            </DropdownMenuItem>
                                        )}
                                        <DropdownMenuItem
                                            className="text-red-600"
                                            onSelect={() => {
                                                logout();
                                                navigate("/login");
                                            }}
                                        >
                                            Sign Out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button className="h-9 rounded-full px-4 text-[13px] font-semibold text-white">
                                    <Link to="/login">Sign In</Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full p-0 sm:w-[400px]">
                                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
                                    <Link to="/" className="flex min-w-0 items-center gap-3 text-blue-700">
                                        <NavbarLogo
                                            siteLogo={siteBranding?.siteLogo || siteBranding?.siteLogoDark}
                                            siteLogoAlt={siteBranding?.siteLogoAlt || siteBranding?.siteLogoDarkAlt}
                                        />
                                    </Link>
                                </div>
                                <div className="flex h-full flex-col">
                                    <div className="flex-1 overflow-y-auto overflow-x-hidden">
                                        <div className="px-6 py-6">
                                            <MobileMultiLevelNav
                                                items={navigationItems}
                                                expandedItems={expandedItems}
                                                toggleExpanded={toggleExpanded}
                                                setIsOpen={setIsOpen}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-auto border-t border-slate-200 bg-slate-50 p-6">
                                        <div className="w-full">
                                            {user ? (
                                                <div className="space-y-3">
                                                    {["admin", "content-manager", "course-manager"].includes(user.role) && (
                                                        <Button
                                                            className="w-full bg-blue-600 py-3 text-base font-medium text-white hover:bg-blue-700"
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                navigate("/dashboard");
                                                            }}
                                                        >
                                                            Admin Panel
                                                        </Button>
                                                    )}
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className="w-full border-blue-200 py-3 text-base font-medium text-blue-700 hover:bg-blue-50"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <Link to="/abroadai">Try AbroadAI Free</Link>
                                                    </Button>
                                                    <Button
                                                        className="w-full bg-red-500 py-3 text-base font-medium text-white hover:bg-red-600"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            logout();
                                                            navigate("/login");
                                                        }}
                                                    >
                                                        Sign Out
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <Button
                                                        asChild
                                                        className="w-full min-w-0 bg-blue-600 py-3 text-base font-medium text-white hover:bg-blue-700"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <Link to="/login">Sign In</Link>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
