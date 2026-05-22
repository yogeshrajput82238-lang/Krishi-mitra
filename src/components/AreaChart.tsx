import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the data type
interface DataItem {
  date: string; // Use string to represent date in ISO format
  yield: number;
}

// Sample data
const data: DataItem[] = [
  { date: "21-05-2026", yield: 30 },
  { date: "21-05-2026", yield: 20 },
  { date: "21-03-2026", yield: 27 },
  { date: "21-04-2026", yield: 18 },
  { date: "21-05-2026", yield: 23 },
  { date: "21-06-2026", yield: 34 },
  { date: "21-07-2026", yield: 44 },
];
function AreaCharts() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="yield" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaCharts;
