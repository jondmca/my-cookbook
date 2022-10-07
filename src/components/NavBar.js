import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      &nbsp;
      <NavLink
        to="/about"
        exact
      >
        About
      </NavLink>
      &nbsp;
      <NavLink
        to="/links"
        exact
      >
        Links
      </NavLink>
    </div>
    )
    
    
}


export default NavBar;