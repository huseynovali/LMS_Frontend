import { useEffect, useState } from "react";
import { MonthProfitData } from "../../types/types";
import ProfitChart from "./ProfitChart";

function FilialsProfit() {
  const data1: MonthProfitData[] = [
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
        { "8 Mart": 3000 },
      ],
    },
  ];

  const data2: MonthProfitData[] = [
    {
      month: "Yanvar",
      filials: [{ Genclik: 1000 }, { "28 May": 400 }, { Nerimanov: 200 }],
    },
    {
      month: "Fevral",
      filials: [{ Genclik: 300 }, { "28 May": 398 }, { Nerimanov: 800 }],
    },
    {
      month: "Mart",
      filials: [{ Genclik: 200 }, { "28 May": 900 }, { Nerimanov: 300 }],
    },
    {
      month: "Aprel",
      filials: [{ Genclik: 780 }, { "28 May": 908 }, { Nerimanov: 500 }, { "8 Mart": 3000 }],
    },
    {
      month: "Dekabr",
      filials: [
        { Genclik: 190 },
        { "28 May": 4800 },
        { Nerimanov: 300 },
        { "20 Yanvar": 400 },
        { "8 Mart": 3000 },
      ],
    },
  ];
  const [selectedYear, setSelectedYear] = useState<string>("2021");
  useEffect(() => {
    if (selectedYear === "2021") {
      setData(data1);
    } else {
      setData(data2);
    }
  }, [selectedYear]);

  const [data, setData] = useState<MonthProfitData[]>(data1);
  return (
    <div className="bg-white rounded-lg pb-5">
      <div className="w-full flex justify-between items-center  px-10 py-10">
        <h1 className="text-xl font-bold">Ayliq Gelir</h1>

        <select className="border border-[#E1E8F1] rounded-lg px-3 py-2 ml-5" onChange={(e)=>setSelectedYear(e.target.value)} >
          <option value={"2021"}>2021</option>
          <option value={"2022"}>2022</option>
        </select>
      </div>
      <ProfitChart data={data} />
    </div>
  );
}

export default FilialsProfit;
