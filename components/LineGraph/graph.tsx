import React from "react";
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
import Chance from "chance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const chance = new Chance();

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  hitRadius: 30,
  hoverRadius: 12,
};

const labels = [
  "Jan 10",
  "Jan 11",
  "Jan 12",
  "Jan 13",
  "Jan 14",
  "Jan 15",
  "Jan 16",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => chance.integer({ min: -1000, max: 1000 })),
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgb(0, 0, 0)",
      tension: 0.4,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => chance.integer({ min: -1000, max: 1000 })),
      borderColor: " rgb(109 40 217)",
      backgroundColor: " rgb(109 40 217)",
      tension: 0.4,
    },
  ],
};

export default function Graph() {
  return <Line options={options} data={data} />;
}
