import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: [5, 9, 11, 13, 15, 17, 19, 21, 24, 27, 29, 31], 
    datasets: [
      {
        label: "Weekly",
        data: [2, 1, 5, 10, 12, 10, 8, 5, 14, 9, 2, 16],
        backgroundColor: "rgba(75, 192, 192, 0.2)", 
        borderColor: "rgba(75, 192, 192, 1)", 
        borderWidth: 1,
        barPercentage: 0.8,
        categoryPercentage: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Weekly",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};
export default RevenueChart;
