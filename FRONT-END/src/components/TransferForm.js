import React from "react";

function TransferForm(){

  return(

    <div className="card shadow">

      <div className="card-header">
        Quick Transfer
      </div>

      <div className="card-body">

        <input 
          className="form-control mb-2"
          placeholder="Account"
        />

        <input 
          className="form-control mb-3"
          placeholder="Amount"
        />

        <button className="btn btn-primary">
          Send
        </button>

      </div>

    </div>

  )

}

export default TransferForm;
