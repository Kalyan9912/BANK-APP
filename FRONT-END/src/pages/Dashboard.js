import React from "react";
import BalanceCard from "../components/BalanceCard";
import TransactionList from "../components/TransactionList";
import TransferForm from "../components/TransferForm";

function Dashboard() {

  return (
    <div style={{padding:"20px"}}>

      <h1>Welcome to FrontBank</h1>

      <BalanceCard />
      <TransactionList />
      <TransferForm />

    </div>
  );
}

export default Dashboard;
