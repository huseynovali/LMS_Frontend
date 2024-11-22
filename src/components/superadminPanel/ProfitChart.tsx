import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthProfitData } from "../../types/types";

function ProfitChart({ data }: { data: MonthProfitData[] }) {
  const keys = Array.from(
    new Set(
      data.flatMap((item) =>
        item.filials.map((filial) => Object.keys(filial)[0])
      )
    )
  );

  const formattedData = data.map((entry) => {
    const filialsData = entry.filials.reduce((acc, filial) => {
      const [key, value] = Object.entries(filial)[0];
      acc[key] = value;
      return acc;
    }, {});
    return { month: entry.month, ...filialsData };
  });

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {keys.map((key, index) => (
            <Bar key={key} dataKey={key} fill={getBarColor(index)} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function getBarColor(index: number) {
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d84c84"];
  return colors[index % colors.length];
}

export default ProfitChart;
