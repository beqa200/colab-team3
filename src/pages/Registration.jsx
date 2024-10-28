import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.webp";
import facebook from "../assets/facebook.jpg";
import apple from "../assets/apple.png";
import eventImg from "../assets/eventImg.webp";

import axios from "axios";
function Registration() {
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
      [name]: value,
    }));

    if (name === "email" && !emailRegex.test(value)) {
      setError("Invalid email format.");
    } else if (name === "password" && !passwordRegex.test(value)) {
      setError(
        "Password must contain at least 8 characters, one letter, one number, and one special character."
      );
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        .post("https://localhost:3001/register", {
          body: {
            email: user.email,
            password: user.password,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="text-center">
      <div>
        <h1 className="text-2xl font-bold font-libre mt-[15px] md:text-3xl lg:text-4xl xl:text-[40px] text-[#a2724e]">
          Sign Up To Event Planner
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="mt-[20px]">
          <img
            src={eventImg}
            className="w-[250px] xl:w-[500px]   lg:w-[500px] lg:h-[400px] md:w-[350px] mt-[50px] mr-[100px] md:h-[310px] object-cover "
          />
        </div>
        <div className="flex flex-col items-center mt-[60px]">
          <div
            className="w-[250px] lg:mb-[30px] flex justify-center items-center ml-2 mb-3 border-customBrown rounded-[40px] py-1.5 px-2.5"
            style={{ borderWidth: "1px" }}
          >
            <img className="w-[25px] mr-2" src={google} alt="Google Icon" />
            <h3 className="text-[17px]">continue with google</h3>
          </div>
          <div
            className="w-[250px] lg:mb-[10px] flex items-center justify-center ml-2 border-customBrown rounded-[40px] py-1.5 px-2.5"
            style={{ borderWidth: "1px" }}
          >
            <img className="w-[25px] mr-2" src={facebook} alt="Facebook Icon" />
            <h3 className="text-[17px]">continue with facebook</h3>
          </div>
          
          <hr className="mt-5" />
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              className="h-[40px] lg:mb-[10px] text-[20px] border border-customBrown rounded-lg p-2 text-[#a2724e]"
              name="email"
              onChange={inputValue}
              value={user.email}
              type="text"
              placeholder="Enter email"
            />
            <input
              className="h-[40px] lg:mb-[30px] text-[20px] mt-6 border border-customBrown rounded-lg p-2 text-[#a2724e]"
              name="password"
              onChange={inputValue}
              value={user.password}
              type="password"
              placeholder="Enter password"
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
              Sign Up
            </button>
          </div>
          {/* {error && <p  className="text-red-600" >{error}</p>} */}
          <p>
            {" "}
            You already have an account?{" "}
            <Link to={"/login"} style={{ color: " #a2724e" }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
