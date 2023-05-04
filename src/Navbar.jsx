import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(<>
    <div className="container-fluid nav bg">
        <div className="row">
            <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand" activeClassName='active' to="/">AFREEDI</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' to="/services">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </>)
}

export default Navbar;