import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid bg-warning py-2">
        <h2 className="navbar-header site-name">Cookpad</h2>
        <ul className="nav navbar-left">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 pr-5">
            <Link to="/add-recipes">Add Recipes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
