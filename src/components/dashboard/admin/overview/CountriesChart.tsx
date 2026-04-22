import * as React from "react";
import { Label, Legend, Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
} satisfies ChartConfig;

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: entry.color }} />
          <span className="text-sm">
            {entry.payload.country} {entry.payload.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
};

type CountriesChartProps = {
  data?: { name: string; value: number }[];
};

const fallbackCountries = [
  { name: "Australia", value: 30, fill: "#6b7aff" },
  { name: "Germany", value: 12, fill: "#ffb078" },
  { name: "United Kingdom", value: 17, fill: "#5dd85d" },
  { name: "Ireland", value: 7, fill: "#dd3333" },
  { name: "Canada", value: 12, fill: "#ffd43d" },
  { name: "United States", value: 22, fill: "#c969b9" },
];

export function CountriesChart({ data }: CountriesChartProps) {
  const chartData = (data?.length ? data : fallbackCountries).map((item, index) => ({
    country: item.name,
    percentage: item.value,
    fill: fallbackCountries[index % fallbackCountries.length].fill,
  }));

  const totalPercentage = React.useMemo(
    () => chartData.reduce((acc, current) => acc + current.percentage, 0),
    [chartData],
  );

  return (
    <Card className="border-none">
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[400px] w-full">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="country"
              innerRadius={60}
              outerRadius={100}
              stroke="#fff"
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalPercentage}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Total
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
            <Legend content={renderLegend} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
