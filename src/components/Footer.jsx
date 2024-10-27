import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

    <div>
      <div>
        <hr  />
      </div>
      <div>
      <h1 className="text-5xl text-center   text-[#a2724e] mt-[70px] font-libre">
  The Effortless Events
</h1>
      </div>
      <div>
      <p className='font-poppins mt-[30px] text-gray-500 leading-[35px] text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[200ms] preFade fadeIn p-[30px] lg:px-[100px]'>
  Fully planned small weddings and memorable events in the San Francisco, Monterey-Carmel, and Nashville areas. Our all-inclusive packages cater to every budget, including wedding photography, videography, and event coordination. Whether you’re celebrating an intimate wedding or a special milestone, we handle every detail, allowing you to enjoy your occasion without the stress of planning. Get excited to celebrate with ease!
</p>
      </div>
      <div className='pl-[30px] text-center'>
      <FontAwesomeIcon  icon={faInstagram} size='2x' style={{color: "#6b7280",}} />
      <FontAwesomeIcon className='pl-[10px]' icon={faFacebook} size="2x" style={{ color: "#6b7280" }} />
      </div>
      <div className='flex justify-center flex-col'>
        <div  className='flex flex-col text-center ml-[30px] '>
          <Link className='text-[#a2724e] text-[20px] cursor-pointer p-[5px]'>Home</Link>
          <Link className='text-[#a2724e] text-[20px] cursor-pointer'>Events</Link>
          <Link className='text-[#a2724e] text-[20px] cursor-pointer p-[5px]'>Services</Link>

        </div>

        <div className="lg:w-1/2 flex flex-col justify-center items-center  mt-10 lg:mt-[100px] lg:ml-[300px] lg:text-right">
          <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-center items-center justify-center">
            <div className="flex flex-col space-y-3 mb-6 lg:mb-0">
              <Link className="text-[#a2724e] text-lg hover:underline font-poppins">
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

      <div className="text-center mt-10 text-gray-600 text-sm">
        © THE EFFORTLESS WEDDING 2024
      </div>
    </div>
  );
}
