import React from "react";

function BalanceCard(){

  return(

    <div className="card balance-card shadow">

      <div className="card-body">

        <h5>Total Balance</h5>
        <h2>$12,450.00</h2>

        <hr/>

        <div className="d-flex justify-content-between mt-3">
          <span>Checking</span>
          <span className="text-success">$12,350.00</span>
        </div>

        <div className="d-flex justify-content-between">
          <span>Savings</span>
          <span className="text-success">$80.00</span>
        </div>

      </div>

    </div>

  )

}

export default BalanceCard;
