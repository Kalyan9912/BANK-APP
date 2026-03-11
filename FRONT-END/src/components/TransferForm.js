import React from "react";

function TransferForm() {

  return (
    <div style={{border:"1px solid #ccc",padding:"20px",margin:"10px"}}>

      <h3>Quick Transfer</h3>

      <input placeholder="Account" /><br/><br/>
      <input placeholder="Amount" /><br/><br/>

      <button>Send</button>

    </div>
  );
}

export default TransferForm;
