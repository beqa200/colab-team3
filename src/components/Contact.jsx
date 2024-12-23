import React, { useState } from "react";
import contacts from "../assets/contact-2.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (name && email && phone) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Information submitted. We will contact you.");
        // Clear the form inputs after submission
        setFormData({ name: "", email: "", phone: "" });
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Please write your info.");
    }
  };

  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold font-libre md:text-3xl lg:text-4xl xl:text-[40px] text-[#a2724e]">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-[100px]">
        <div className="w-full lg:w-[45%] md:w-[50%] xl:w-[45%] xl:mt-[70px]">
          <img
            src={contacts}
            alt="Contact"
            className="w-full rounded-[20px] shadow-md"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-[50%] lg:w-[40%] xl:w-[40%] space-y-6 xl:space-y-12 lg:mt-[30px] md:mt-[20px] xl:mt-[40px]"
        >
          <div className="relative">
            <label
              htmlFor="name"
              className="text-lg md:text-[20px] lg:text-xl xl:text-[24px] text-[#a2724e]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name here"
              className="block text-gray-500 w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#a2724e] transition-colors duration-300"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="text-lg md:text-[20px] lg:text-xl xl:text-[24px] text-[#a2724e]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email here"
              className="block w-full text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phone"
              className="text-lg md:text-[20px] lg:text-xl xl:text-[24px] text-[#a2724e]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number here"
              className="block w-full bg-transparent border-b-2 border-gray-300 text-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#a2724e] text-white py-2 md:py-3 xl:py-4 rounded-lg transition duration-300 hover:brightness-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
