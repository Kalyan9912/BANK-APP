import React from "react";

function TransactionList(){

  return(

    <div className="card shadow">

      <div className="card-header">
        Recent Transactions
      </div>

      <div className="card-body">

        <ul className="list-group">

          <li className="list-group-item">
            Amazon : -120
          </li>

          <li className="list-group-item text-success">
            Salary : +3000
          </li>

          <li className="list-group-item">
            Utility Bill : -80
          </li>

        </ul>

      </div>

    </div>

  )

}

export default TransactionList;
