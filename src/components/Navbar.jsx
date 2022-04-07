import React from "react";
import { Link } from "react-router-dom";

function Navbar({ active }) {
  const styles = {
    default:
      "cursor-pointer transition-all duration-75 hover:text-green-400 active:scale-95",
    active: "cursor-default text-blue-300",
  };
  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Project", link: "/Project" },
    { name: "Contact", link: "/Contact" },
  ];
  const navItems = navList.map((item) => {
    return (
      <Link to={item.link} key={item.name}>
        <li className={active === item.name ? styles.active : styles.default}>
          {item.name}
        </li>
      </Link>
    );
  });
  return (
    <header className="absolute left-1/3/2 top-1 flex justify-center items-center p-2">
      <nav>
        <ul className="flex justify-center items-center gap-10 text-xl">
          {navItems}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
