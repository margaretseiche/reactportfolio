import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
      <header className="fixed-top">

        <h1>Margaret Seiche</h1>

        <nav>
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>  
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;
