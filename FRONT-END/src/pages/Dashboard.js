import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import TransferForm from "../components/TransferForm";
import Navbar from "../components/Navbar";

function Dashboard(){

  return(

    <div>

      <Navbar/>

      <div className="hero-section">

        <div className="container">

          <h2 className="fw-bold">
            Welcome to <span className="text-primary">FrontBank, John!</span>
          </h2>

          <p>Your secure banking dashboard.</p>

        </div>

      </div>

      <div className="container mt-4">

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

    </div>

  )

}

export default Dashboard;
