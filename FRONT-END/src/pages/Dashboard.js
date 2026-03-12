import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import TransferForm from "../components/TransferForm";
import MonthlyChart from "../components/MonthlyChart";

function Dashboard(){

  return(

    <div className="container mt-4">

      <div className="row mb-4">

        <div className="col-md-6">

          <h2>
            Welcome to <span className="text-primary">FrontBank, John!</span>
          </h2>

          <p>Your secure banking dashboard.</p>

        </div>

        <div className="col-md-6">
          <MonthlyChart/>
        </div>

      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <BalanceCard/>
        </div>

        <div className="col-md-4">
          <TransactionList/>
        </div>

        <div className="col-md-4">
          <TransferForm/>
        </div>

      </div>

    </div>

  )

}

export default Dashboard;
