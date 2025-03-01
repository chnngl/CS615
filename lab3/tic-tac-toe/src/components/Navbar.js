import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-icon">
          <FaReact size={30} color="#687b85" /> {/* React Logo */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
