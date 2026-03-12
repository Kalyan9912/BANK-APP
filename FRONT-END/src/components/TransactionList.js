import React from "react";

function TransactionList(){

  return(

    <div className="card shadow">

      <div className="card-header">
        Recent Transactions
      </div>

      <div className="card-body">

        <ul className="list-group">

          <li className="list-group-item d-flex justify-content-between">
            Amazon
            <span className="text-danger">-$120.00</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            Salary Deposit
            <span className="text-success">+$3,000.00</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            Utility Bill
            <span className="text-danger">-$80.00</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            Gym Membership
            <span className="text-danger">-$45.00</span>
          </li>

        </ul>

      </div>

    </div>

  )

}

export default TransactionList;
