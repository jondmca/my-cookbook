import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
      <NavLink
        to="/"
        exact
        className="nav"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className="nav"

      >
        About
      </NavLink>
      <NavLink
        to="/links"
        exact
        className="nav"

      >
        Links
      </NavLink>
    </div>
    )
    
    
}


export default NavBar;