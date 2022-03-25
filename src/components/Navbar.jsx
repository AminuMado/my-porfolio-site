import React from "react";
function Navbar() {
  return (
    <header className="flex  justify-center items-center m-2 p-2">
      <nav>
        <ul className="flex justify-center items-center gap-10 text-xl  ">
          <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105 ">
            Home
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
            About
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
            Project
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-purple-700  active:scale-105">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
