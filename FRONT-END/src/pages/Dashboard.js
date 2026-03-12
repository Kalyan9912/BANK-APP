import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import TransferForm from "../components/TransferForm";

function Dashboard() {
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Welcome to FrontBank</h2>

      <div className="row">

        <div className="col-md-4">
          <BalanceCard />
        </div>

        <div className="col-md-4">
          <TransactionList />
        </div>

        <div className="col-md-4">
          <TransferForm />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
