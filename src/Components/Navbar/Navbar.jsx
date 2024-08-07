import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ to, children, onClick }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="hover:text-purple-400 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="Navbar bg-[#040015] py-2 flex items-center justify-between fixed w-[100%] h-[55px] sm:h-[70px]">
      <div className="flex relative -top-1 my-auto ml-4 sm:ml-6 pt-2">
        <a href="#" className="flex space-x-1 items-center">
          <img
            src="./logo.jpg"
            alt="linkedin icon"
            className="sm:h-[40px] h-[35px] bg-center rounded-full"
          />
          <h1 className="sm:text-2xl text-xl font-bold text-white flex text-center">
            Portfolio
          </h1>
        </a>
      </div>
      <div className="hidden sm:flex mb-4 space-x-3 relative top-3 items-center mx-8">
        <ul className="flex justify-center sm:text-lg sm:space-x-2 sm:font-semibold md:text-xl md:space-x-10 md:font-bold text-white">
          <NavLink to="hero">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="project">Projects</NavLink>
          <NavLink to="education">Education</NavLink>
          <NavLink to="contact">Contact me</NavLink>
        </ul>
      </div>
      <div className="hidden sm:flex items-center relative top-2 mr-8">
        <a
          href="https://github.com/Aryank35"
          target="_blank"
          className="mx-auto px-2 flex justify-center font-bold border-purple-200 border-2 rounded-2xl text-purple-400 hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-700 hover:delay-75 mb-4"
        >
          <button className="px-1 py-2 text-lg text-center">
            Github profile
          </button>
        </a>
      </div>
      <div
        className="MenuBar flex sm:hidden items-center my-auto pt-2"
        id="MenuBar"
        onClick={toggleMobileMenu}
      >
        <img
          src="./menu.png"
          alt="Menu Icon"
          className="h-[30px] mb-8 mr-4 transition-all delay-300 ease-in-out cursor-pointer"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`Mobile-Menu transition-all ease-out ${
          isMobileMenuOpen ? "right-0" : "-right-[100%]"
        } absolute top-0 flex flex-col bg-[#fff] w-[60%] rounded-10 space-y-4 delay-200 shadow-sm shadow-blue-300 px-8 py-16 text-lg font-semibold h-fit rounded-xl`}
      >
        <div
          className="cancel font-bold w-fit text-3xl relative -top-9 left-[5%] text-red-600"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className="nav-menu flex flex-col items-center space-y-3 font-semibold">
          <NavLink to="hero" onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="skills" onClick={toggleMobileMenu}>Skills</NavLink>
          <NavLink to="project" onClick={toggleMobileMenu}>Projects</NavLink>
          <NavLink to="education" onClick={toggleMobileMenu}>Education</NavLink>
          <NavLink to="contact" onClick={toggleMobileMenu}>Contact me</NavLink>
          <div>
            <a
              href="https://github.com/Aryank35"
              target="_blank"
              className="mx-auto px-5 flex justify-center font-semibold bg-slate-800 border-slate-600 border-2 rounded-2xl text-white hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-700 hover:delay-75 mb-4"
            >
              <button className="px-1 py-2 text-lg text-center">Github</button>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
