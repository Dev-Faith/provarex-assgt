import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Chance from "chance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend:false,
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const chance = new Chance();

const labels = ["", "", "", "", "",];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => chance.integer({ min: 0, max: 100 })),
      backgroundColor: "rgba(0, 0, 0)",
    },
    // {
    //   label: "",
    //   data: labels.map(() => chance.integer({ min: 0, max: 1000 })),
    //   backgroundColor: "rgb(229 231 235)",
    // },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data}  />;
}
