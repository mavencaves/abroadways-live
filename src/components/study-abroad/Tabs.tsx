import {type ReactNode, Children} from "react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface TabData {
    value: string
    title: string
}

interface TabListProps {
    children?: ReactNode
    defaultValue?: string
    showEmptyState?: boolean
    tabs?: TabData[]
}

export default function TabList({
                                    children,
                                    defaultValue,
                                    showEmptyState = true,
                                    tabs,
                                }: TabListProps) {
    const childrenArray = children ? Children.toArray(children) : []

    return (
        <Tabs defaultValue={defaultValue} className="w-full">
            <ScrollArea className="w-full">
                <TabsList
                    className="inline-flex h-auto w-full  justify-between rounded-none border-b bg-transparent p-0">
                    {tabs?.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="relative sm:text-lg rounded-none border-b-3 border-transparent bg-transparent px-4 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground data-[state=active]:border-primary  data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            {tab.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>

            <div className="mt-6">
                {tabs?.map((tab, index) => (
                    <TabsContent key={tab.value} value={tab.value} className="mt-0">
                        {childrenArray[index] ? (
                            childrenArray[index]
                        ) : showEmptyState ? (
                            <div className="rounded-lg border border-dashed bg-muted/20 p-8 text-center">
                                <p className="text-sm text-muted-foreground">
                                    No content provided for this tab
                                </p>
                            </div>
                        ) : null}
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}
