import React from "react";
import axios from "axios";
import google from "../assets/google.webp";
import facebook from "../assets/facebook.jpg";
import apple from "../assets/apple.png";
import { useState } from "react";
import party from "../assets/party.webp";
import { Link, useNavigate } from "react-router-dom";
import LoginProvider from "../context/LoginProvider";
import { useLogin } from "../context/LoginProvider";
export default function Login() {
  const {setLog } = useLogin()
  const navigate = useNavigate()
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
        .post("https://algouni-students.duckdns.org:8002/event-planner/team-3/auth/login/", {
          
            email: user.email,
            password: user.password,
          
        })
        .then((res) => {
          console.log(res)
          const token = res.data;
          console.log("Login successful. Token:", token);
          localStorage.setItem("token", JSON.stringify( token))
          setLog(true)
          navigate("/")
          
        })
        .catch((err) => {
          setError("Login failed. Please try again.");
          console.log(err);
        });
    }
  };
  return (
    <div className="text-center">
      <div>
          <h1 class="text-2xl font-bold font-libre mt-[15px]  md:text-3xl lg:text-4xl xl:text-[40px] text-[#a2724e]">
            Log in to event planner
          </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row  ">
        <div className="mt-[20px] ">
        <img 
        src={party}
        className="w-[250px] xl:w-[500px]   lg:w-[500px] lg:h-[400px] md:w-[350px] mt-[50px] mr-[100px] md:h-[310px] object-cover   " />

      </div>
        <div class="flex flex-col  items-center mt-[60px] ">
        
      
        
        <hr className="mt-5" />
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="h-[40px] lg:mb-[10px] text-[20px] border border-customBrown rounded-lg p-2 text-[#a2724e]"
              name="email"
              onChange={inputValue}
              value={user.email}
              type="text"
              placeholder="email or username"
            />
            <input
              className="h-[40px] lg:mb-[30px] text-[20px] mt-6 border border-customBrown rounded-lg p-2 text-[#a2724e]"
              name="password"
              onChange={inputValue}
              value={user.password}
              type="password"
              placeholder=" password"
            />
             <button
              className="w-[250px] flex items-center justify-center ml-1 border-black rounded-[40px] py-1.5 px-2.5 mb-5 mx-auto text-[#a2724e]"
              style={{
                borderWidth: "2px",
                border: "2px solid #a2724e",
                marginTop: "15px",
              }}
              type="submit"
            >
              Log in
            </button>
          </form>
          <div>
           
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
     
        
        
      
    </div>
  );
}
