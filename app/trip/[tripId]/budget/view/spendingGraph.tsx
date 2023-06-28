"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent({
  dates,
  spendings,
}: {
  dates: string[];
  spendings: number[];
}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Spending Vs Date",
      },
    },
  };

  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Spendings",
        data: spendings,
        borderColor: "rgb(255, 225, 225)",
        backgroundColor: "rgba(8, 217, 214)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

//rgb for white
