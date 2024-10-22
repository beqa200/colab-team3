import React from "react";
import contacts from "../assets/contact-2.jpg";

export default function Contact() {
  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-[200px]">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] md:w-[100%] ">
          <img
            src={contacts}
            alt="Contact"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <form className="flex flex-col w-full md:w-1/2 lg:w-1/3 space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="text-lg md:text-xl lg:text-2xl"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name here"
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="text-lg md:text-xl lg:text-2xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email here"
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phone"
              className="text-lg md:text-xl lg:text-2xl"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number here"
              className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
