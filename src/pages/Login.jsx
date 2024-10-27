import React from "react";
import axios from "axios";
import google from "../assets/google.webp";
import facebook from "../assets/facebook.jpg";
import apple from "../assets/apple.png";
import { useState } from "react";
import party from "../assets/party.webp";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const inputValue = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically update the correct field
    }));

    if (name === "email" && !emailRegex.test(value)) {
      setError("Invalid email format.");
    } else if (name === "password" && !passwordRegex.test(value)) {
      setError(
        "Password must contain at least 8 characters, one letter, one number, and one special character."
      );
    } else {
      setError(""); // Clear the error when input is valid
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (!emailRegex.test(user.email)) {
      setError("Invalid email format.");
    } else if (!passwordRegex.test(user.password)) {
      setError("Password is not strong enough.");
    } else {
      setError("");
      console.log("Form submitted successfully", user);
    }

    if (error === "") {
      axios
        .post("https:localhost:3001/login", {
          body: {
            email: user.email,
            password: user.password,
          },
        })
        .then((res) => {
          const token = res.data.token;
          console.log("Login successful. Token:", token);
          // cookieshi sheinaxe
          // home pageze gadaamisamarte
        })
        .catch((err) => {
          setError("Login failed. Please try again.");
          console.log(err);
        });
    }
  };
  return (
    <div className="flex flex-col md:flex-row p-4">
      <img src={party} className="w-full md:w-1/2" />
      <div class="flex flex-col items-center  h-screen w-full h-full p-6 gap-4">
        <div>
          <h1 class="text-1.5xl font-extrabold text-left mb-6 leading-snug tracking-wide text-[#a2724e]">
            Log in to event planner
          </h1>
        </div>
        <div
          className="w-[250px] flex justify-center items-center ml-2 border-black rounded-[40px] py-1.5 px-2.5"
          style={{ borderWidth: "1px" }}
        >
          <img className="w-[25px] mr-2" src={google} alt="Google Icon" />
          <h3 className="text-[17px]">continue with google</h3>
        </div>
        <div
          className="w-[250px] flex items-center  justify-center ml-2 border-black rounded-[40px] py-1.5 px-2.5"
          style={{ borderWidth: "1px" }}
        >
          <img className="w-[25px] mr-2" src={facebook} alt="Google Icon" />
          <h3 className="text-[17px]">continue with facebook</h3>
        </div>
        <div
          className="w-[250px] flex items-center justify-center ml-2 border-black rounded-[40px] py-1.5 px-2.5 mb-5"
          style={{ borderWidth: "1px" }}
        >
          <img className="w-[25px] mr-2" src={apple} alt="Google Icon" />
          <h3 className="text-[17px]">continue with apple</h3>
        </div>
        <hr className="mt-5" />
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="h-[40px] text-[20px] border border-gray-300 rounded-lg p-2 text-[#a2724e]"
              name="email"
              onChange={inputValue}
              value={user.email}
              type="text"
              placeholder="email or username"
            />
            <input
              className="h-[40px] text-[20px] mt-6 border border-gray-300 rounded-lg p-2 text-[#a2724e]"
              name="password"
              onChange={inputValue}
              value={user.password}
              type="password"
              placeholder=" password"
            />
          </form>
          <div>
            <button
              className="w-[250px] flex items-center justify-center ml-2 border-black rounded-[40px] py-1.5 px-2.5 mb-5 mx-auto text-[#a2724e]"
              style={{
                borderWidth: "2px",
                border: "2px solid #a2724e",
                marginTop: "15px",
              }}
              type="submit"
            >
              Log in
            </button>
            <p>
              {" "}
              Don’t have an account?
              <Link to={"/registration"} style={{ color: " #a2724e" }}>
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
