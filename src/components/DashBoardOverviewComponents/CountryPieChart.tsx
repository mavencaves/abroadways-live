import * as React from "react";

import type { CountryData } from "../../types/DashBoardTypes";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { Tooltip } from "../ui/tooltip";

interface Props {
  countries: CountryData[];
}

const COLORS = ["#7C3AED", "#22C55E", "#FACC15", "#3B82F6", "#EF4444"];

const CountriesPieChart: React.FC<Props> = ({ countries }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">Popular destinations</h3>

      <div className="flex h-[250px] items-center justify-center">
        <PieChart>
          <Pie data={countries} dataKey="value" nameKey="name" innerRadius={40} outerRadius={80} stroke="white">
            {countries.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend className="text-sm" />
        </PieChart>
      </div>
    </div>
  );
};

export default CountriesPieChart;
