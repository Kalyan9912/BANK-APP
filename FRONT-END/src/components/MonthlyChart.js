import React from "react";
import { Line } from "react-chartjs-2";

function MonthlyChart(){

  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [
      {
        label: "Balance",
        data: [200,350,500,650,720,900],
        borderColor: "#3a6fd8",
        backgroundColor: "rgba(58,111,216,0.2)",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return(

    <div className="card shadow">

      <div className="card-body">

        <h6>Monthly Balance</h6>

        <div style={{height:"200px"}}>
          <Line data={data} options={options}/>
        </div>

      </div>

    </div>

  )

}

export default MonthlyChart;
