import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#6600ff",
  },
} satisfies ChartConfig;

const DAY_LABEL_MAP: Record<string, string> = {
  "রবি": "Sun",
  "সোম": "Mon",
  "মঙ্গল": "Tue",
  "বুধ": "Wed",
  "বৃহস্পতি": "Thu",
  "শুক্র": "Fri",
  "শনি": "Sat",
};

type VisitorsChartProps = {
  data?: { day: string; count: number }[];
};

const fallbackData = [
  { day: "Sun", count: 90000 },
  { day: "Mon", count: 30000 },
  { day: "Tue", count: 45000 },
  { day: "Wed", count: 60000 },
  { day: "Thu", count: 25000 },
  { day: "Fri", count: 50000 },
  { day: "Sat", count: 35000 },
];

const normalizeDayLabel = (value: string) => {
  if (DAY_LABEL_MAP[value]) {
    return DAY_LABEL_MAP[value];
  }

  const parsedDate = new Date(value);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toLocaleDateString("en-US", { weekday: "short" });
  }

  return value;
};

export function VisitorsChart({ data }: VisitorsChartProps) {
  const chartData = (data?.length ? data : fallbackData).map((item) => ({
    day: normalizeDayLabel(item.day),
    visitors: item.count,
  }));

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Site visitors</CardTitle>
        <CardDescription>This week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
