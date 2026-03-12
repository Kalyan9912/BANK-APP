import React from "react";

function Navbar(){

  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">

      <div className="container">

        <a className="navbar-brand fw-bold text-primary" href="#">
          FrontBank
        </a>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Accounts</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Transfer</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Profile</a>
          </li>

        </ul>

      </div>

    </nav>

  )

}

export default Navbar;
