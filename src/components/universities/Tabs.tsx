import { type ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabData {
    value: string;
    title: string;
}

interface TabListProps {
    children?: ReactNode;
    defaultValue?: string;
    showEmptyState?: boolean;
    tabs?: TabData[];
}

export default function UniversityTabs({
    defaultValue = "summary",
    tabs = [
        { value: "summary", title: "Overview" },
        { value: "admission", title: "Admissions" },
        { value: "ranking", title: "Ranking" },
        { value: "course", title: "Courses and Fees" },
    ],
}: TabListProps) {
    return (
        <Tabs defaultValue={defaultValue} className="mb-10 w-full">
            <ScrollArea className="w-full">
                <TabsList className="inline-flex h-auto w-full justify-start rounded-[1.25rem] border border-slate-200 bg-white p-2 shadow-sm">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="relative rounded-full px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=active]:shadow-none sm:text-base"
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </Tabs>
    );
}
