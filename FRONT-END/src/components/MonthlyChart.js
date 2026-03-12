import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

function MonthlyChart() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Balance",
        data: [100, 250, 400, 550, 700, 900],
        borderColor: "#3a6fd8",
        backgroundColor: "rgba(58,111,216,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h6>Monthly Balance</h6>

        <div style={{ height: "200px" }}>
          <Line data={data} options={options} />
        </div>

      </div>
    </div>
  );
}

export default MonthlyChart;;
