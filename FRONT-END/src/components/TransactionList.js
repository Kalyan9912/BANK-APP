import React from "react";

function TransactionList(){

  return(
    <div className="card shadow">

      <div className="card-body">

        <h5>Recent Transactions</h5>

        <ul className="list-group">

          <li className="list-group-item">Amazon : -120</li>
          <li className="list-group-item text-success">Salary : +3000</li>
          <li className="list-group-item">Utility Bill : -80</li>

        </ul>

      </div>

    </div>
  )

}

export default TransactionList;
