import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    visitors: {
        label: "দর্শক",
        color: "#6600ff", // Purple/violet color from the image
    },
} satisfies ChartConfig

type VisitorsChartProps = {
    data?: { day: string; count: number }[]
}

const fallbackData = [
    { day: "রবি", count: 90000 },
    { day: "সোম", count: 30000 },
    { day: "মঙ্গল", count: 45000 },
    { day: "বুধ", count: 60000 },
    { day: "বৃহস্পতি", count: 25000 },
    { day: "শুক্র", count: 50000 },
    { day: "শনি", count: 35000 },
]

export function VisitorsChart({ data }: VisitorsChartProps) {
    const chartData = (data?.length ? data : fallbackData).map((item) => ({
        day: item.day,
        visitors: item.count,
    }))

    return (
        <Card className={"border-none"}>
            <CardHeader>
                <CardTitle>পরিদর্শনকারী ব্যবহারকারী</CardTitle>
                <CardDescription>এই সপ্তাহ</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}কে`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="visitors"
                            fill="var(--color-visitors)"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
