import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo3.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#3277df] text-gray-300">
      <div>
        <img src={Logo} alt="Profile Logo" style={{ width: "80px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger*/}
      <div className="hidden">
        <FaBars />
      </div>

      {/*Mobile Menu*/}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/*Social Icons*/}
      <div></div>
    </div>
  );
};

export default Navbar;
