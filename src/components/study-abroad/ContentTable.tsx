import type {ReactNode} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

interface TabData {
    value: string
    title: string
    content: ReactNode
}

interface ContentTableProps {
    tabs: TabData[]
    defaultValue?: string
    className?: string
}

export default function ContentTable({tabs, defaultValue, className = ""}: ContentTableProps) {
    const firstTabValue = tabs[0]?.value || "tab-1"
    const activeDefault = defaultValue || firstTabValue

    return (
        <Tabs
            defaultValue={activeDefault}
            orientation="vertical"
            className={`w-full mt-16 flex-col lg:flex-row ${className}`}
        >
            <div className="flex flex-col lg:flex-row lg:gap-8">
                <TabsList
                    className="text-foreground  flex-col items-start justify-start bg-transparent gap-2 lg:gap-4 w-full lg:w-1/2 rounded-none px-1 py-0 overflow-x-auto lg:overflow-x-visible"
                >
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="
                                hover:bg-accent text-sm lg:text-lg hover:text-foreground
                                data-[state=active]:after:bg-black data-[state=active]:hover:bg-accent
                                relative w-full justify-start whitespace-nowrap flex-shrink-0
                                after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-1 after:h-auto after:rounded-full
                                data-[state=active]:bg-transparent data-[state=active]:shadow-none
                            "
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="grow rounded-md text-start mt-4 lg:mt-0">
                    {tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value} className="mt-0">
                            {tab.content}
                        </TabsContent>
                    ))}
                </div>
            </div>
        </Tabs>
    )
}
