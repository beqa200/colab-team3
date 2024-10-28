import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-4 lg:px-24 py-10 bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section: Title, Description, and Social Icons */}
        <div className="lg:w-1/2 text-left lg:text-left text-center">
          <h1 className="text-[40px] text-[#a2724e] font-poppins font-bold">
            The Effortless Wedding
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed font-light text-[20px] font-poppins">
            Fully planned small weddings in the
            San Francisco, Monterey-Carmel, and
            Nashville areas. All-inclusive wedding
            packages for every budget, including
            wedding photography and videography.
            Get excited about your wedding again
            without the stress of planning!
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#6b7280" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "#6b7280" }}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center justify-center mt-10 lg:mt-[100px] lg:ml-[300px] lg:text-right">
          <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-center items-center justify-center">
            <div className="flex flex-col space-y-3 mb-6 lg:mb-0 items-center ">
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins text-center w-[100%]">
                Home
              </Link>
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
                About
              </Link>
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
                Packages
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
                Inspiration
              </Link>
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
                Blog
              </Link>
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-[#a2724e] text-sm">
        © THE EFFORTLESS WEDDING 2024
      </div>
    </div>
  );
}
