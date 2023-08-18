import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = ({ nav, handleClick }) => {
  return (
    <div className="shadow-lg shadow-[#040c16] fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer">
        <Link to="home" smooth={true} offset={-90} duration={500}>
          <img src={Logo} alt="Profile Logo" style={{ width: "80px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} offset={-90} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-110} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <div className="flex w-full items-center justify-between pl-4 pb-1">
          <img src={Logo} alt="Profile Logo" style={{ width: "80px" }} />
        </div>
        <ul className="text-center">
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={-90}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={-90}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-4 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Social Icons for Mobile Menu */}
        <div className="pt-10">
          <p className="uppercase tracking-widest text-pink-600 text-center text-2xl">
            Let&#39;s Connect
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
            <a
              href="https://www.linkedin.com/in/dylanfinlay33/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedin size={30} />
              </div>
            </a>
            <a
              href="https://github.com/DylanFinlay"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={30} />
              </div>
            </a>
            <a
              href="mailto:dylan.finlay33@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <HiOutlineMail size={30} />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1WqxA7fBbg-AEsLY0B1zxJjhM1mKJiZGg/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill size={30} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/dylanfinlay33/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/DylanFinlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:dylan.finlay33@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1WqxA7fBbg-AEsLY0B1zxJjhM1mKJiZGg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
