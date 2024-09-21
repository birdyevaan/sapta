import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Taskbarlogo from "../assets/taskbarlogo.png";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi";

const Taskbar = (props) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleAboutUs = () => {
    navigate("/mission");
  };

  const handleServices = () => {
    navigate("/vision");
  };

  const handleContactUs = () => {
    scroll.scrollToBottom();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="w-full h-22 bg-white ">
        <ul className="flex justify-between items-center text-xl font-bold">
          <li className="flex flex-row">
            <button onClick={handleClick}>
              <img src={Taskbarlogo} alt="Logo" className="h-20 mt-2 ml-6 cursor-pointer" />
            </button>
          </li>
          <div className="hidden md:flex row justify-center space-x-4">
            <button type="button" onClick={handleClick} className="font-sans text-xl nav-button md:px-6 md:py-1 hover:text-red-600 :text-white focus:outline-none focus:hover-bold focus:text-red-500 ">
              Home
            </button>
            <li>
              <button onClick={handleAboutUs} className="font-sans text-xl nav-button md:px-6 md:py-1 hover:text-red-600 :text-white focus:outline-none focus:text-red-500 ">
                Our Mission
              </button>
            </li>
            <button onClick={handleServices} className="font-sans text-xl nav-button md:px-6 md:py-1 hover:text-red-600 :text-white focus:outline-none focus:text-red-500">
              Our Values
            </button>
            <button onClick={handleContactUs} className="font-sans text-xl nav-button md:px-6 md:py-1 hover:text-red-600 :text-white focus:outline-none focus:text-red-500 ">
             Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="h-10 w-10 flex items-center justify-center mr-3">
              {showMenu ? (
                <IoCloseSharp className="h-8 w-8 " />
              ) : (
                <GiHamburgerMenu className="h-8 w-8" />
              )}
            </button>
          </div>
          <div className={`md:hidden w-full drop absolute top-20 drop-shadow-xl  bg-white z-50 my-2 ${showMenu ? "block" : "hidden"}`}>
            <ul className="flex flex-col space-y-2 items-start mx-4 my-4">
          
              <button type="button" onClick={handleClick} className=" font-sans focus:font-light nav-button focus:text-red-500 active:text-red-500 ">
                Home
              </button>
              <button onClick={handleAboutUs} className="font-sans focus:font-light nav-button focus:text-red-500 active:text-red-500">
                Our Mission
              </button>
              <button onClick={handleServices} className="font-sans  focus:font-light nav-button focus:text-red-500 active:text-red-500">
                Our Values
              </button>
              <button onClick={handleContactUs} className="font-sans focus:font-light nav-button focus:text-red-500 active:text-red-500">
                Contact us
              </button>
              <button onClick={toggleMenu} className="font-sans focus:font-light nav-button focus:text-red-500 active:text-red-500">
                Close
              </button>

            </ul>
          </div>
          <div className="hidden md:flex row width:33%">
            <li className="cursor-pointer float-right mx-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </li>
            <li className="cursor-pointer float-right mx-4 ">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaFacebookF className="h-5 w-5" />
            </a>
            </li>
            <a href="https://wa.me/+9632410101?text=Hi" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <li className="cursor-pointer float-right mx-4">
                <FaWhatsapp className="h-5 w-5" />
              </li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Taskbar;
