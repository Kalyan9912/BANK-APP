import React from "react";

function TransferForm(){

  return(

    <div className="card shadow">

      <div className="card-body">

        <h5>Quick Transfer</h5>

        <input className="form-control mb-2" placeholder="Account"/>

        <input className="form-control mb-2" placeholder="Amount"/>

        <button className="btn btn-primary">Send</button>

      </div>

    </div>

  )

}

export default TransferForm;
