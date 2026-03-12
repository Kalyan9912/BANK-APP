import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MonthlyChart(){

  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [
      {
        label: "Balance",
        data: [200, 350, 500, 650, 720, 900],
        borderColor: "#3a6fd8",
        backgroundColor: "rgba(58,111,216,0.2)",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins:{
      legend:{ display:false }
    }
  };

  return(

    <div className="card shadow">

      <div className="card-body">

        <h6>Monthly Balance</h6>

        <Line data={data} options={options}/>

      </div>

    </div>

  )

}

export default MonthlyChart;
