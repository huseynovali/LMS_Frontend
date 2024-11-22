import React from "react";
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

const data = [
  {
    month: "Yanvar",
    filials: [{ Genclik: 4000 }, { "28 May": 2400 }, { Nerimanov: 2200 }],
  },
  {
    month: "Fevral",
    filials: [{ Genclik: 3000 }, { "28 May": 1398 }, { Nerimanov: 1800 }],
  },
  {
    month: "Mart",
    filials: [{ Genclik: 2000 }, { "28 May": 9800 }, { Nerimanov: 3000 }],
  },
  {
    month: "Aprel",
    filials: [{ Genclik: 2780 }, { "28 May": 3908 }, { Nerimanov: 2500 }],
  },
  {
    month: "Dekabr",
    filials: [
      { Genclik: 1890 },
      { "28 May": 4800 },
      { Nerimanov: 3100 },
      { "20 Yanvar": 4000 },
    ],
  },
];

function ProfitChart() {
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
        <BarChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
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

// Rənglərin təyin olunması
function getBarColor(index) {
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d84c84"];
  return colors[index % colors.length];
}

export default ProfitChart;
