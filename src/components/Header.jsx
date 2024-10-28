import React, { useState } from "react";
// import logo from "../assets/logo.webp";
import loho4 from "../assets/loho4.png";
import logo from "../assets/lg-10.png";

// import loogo from '../assets/loogo.webp'
<assets />;
import {
  Link,
  useNavigate,
} from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <header
      className={`p-4 bg-white ${
        isOpen
          ? "flex flex-col items-center"
          : "flex items-center justify-between"
      }`}
    >
      {/* Logo Section */}
      <div className="flex md:justify-center">
        <img
          onClick={() => navigate("/")}
          className="w-[150px] cursor-pointer ml-[50px] lg:ml-[200px] "
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu Section */}
      <div
        className={`space-y-2 ${
          isOpen ? "mt-4" : ""
        }`}
      >
        <button
          className="block text-gray-600 focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          {/* Three Lines (Hamburger Icon) */}
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "rotate-45 translate-y-1.5"
                  : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ease-in-out ${
                isOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "-rotate-45 -translate-y-1.5"
                  : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Navigation Section */}
      <div
        className={` mt-4 flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 lg:mr-[200px]  ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        {/* <Link to="/registration" className="block px-2 py-1 text-gray-600">Registration</Link> */}

        {/* <Link to={"/home"} className='text-[#a2724e]'>home</Link> */}
        <Link
          to={"/services"}
          className="text-[#a2724e] text-[20px] font-poppins transition duration-300   hover:brightness-75  ease-in-out  lg:pr-[20px]"
        >
          services
        </Link>
        <Link
          to={"/events"}
          className="font-poppins text-[#a2724e] text-[20px] transition duration-300   hover:brightness-75  ease-in-out   lg:pr-[30px] "
        >
          Events
        </Link>
        <Link
          to={"/login"}
          className="text-[#a2724e] font-poppins text-[20px] transition duration-300   hover:brightness-75  ease-in-out  lg:pr-[30px]"
        >
          sign in
        </Link>

        <Link
          className="text-[#a2724e] font-poppins text-[20px] transition duration-300   hover:brightness-75  ease-in-out  lg:pr-[30px]"
          to={"/contact"}
        >
          contact
        </Link>
        <Link
          to={"/startplanning"}
          className="text-[#a2724e] font-poppins text-[20px] transition duration-300   hover:brightness-75  ease-in-out  lg:pr-[30px]"
        >
          start planning
        </Link>
      </div>
    </header>
  );
}
