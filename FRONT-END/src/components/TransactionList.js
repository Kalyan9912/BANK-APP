import React from "react";

function TransactionList() {

  const transactions = [
    {name:"Amazon",amount:"-120"},
    {name:"Salary",amount:"+3000"},
    {name:"Utility Bill",amount:"-80"}
  ];

  return (
    <div style={{border:"1px solid #ccc",padding:"20px",margin:"10px"}}>
      <h3>Recent Transactions</h3>

      {transactions.map((t,index)=>(
        <p key={index}>{t.name} : {t.amount}</p>
      ))}

    </div>
  );
}

export default TransactionList;
