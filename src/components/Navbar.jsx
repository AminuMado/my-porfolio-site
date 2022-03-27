import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute left-1/3/2 top-1 flex justify-center items-center p-2">
      <nav>
        <ul className="flex justify-center items-center gap-10 text-xl">
          <Link to="/">
            <li className="cursor-pointer transition-all duration-300 hover:text-green-400  active:scale-105">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
              About
            </li>
          </Link>
          <Link to="/Project">
            <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
              Project
            </li>
          </Link>
          <Link to="/Contact">
            <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
