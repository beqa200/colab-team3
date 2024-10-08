import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios"
function Registration   () {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const inputValue = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value 
    }));

    if (name === "email" && !emailRegex.test(value)) {
      setError("Invalid email format.");
    } else if (name === "password" && !passwordRegex.test(value)) {
      setError("Password must contain at least 8 characters, one letter, one number, and one special character.");
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

    if(error === ''){
    axios.post("https://localhost:3001/register",{
      body: {
        "email": user.email,
        "password": user.password
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          name="email"
          onChange={inputValue}
          value={user.email}
          type="text"
          placeholder="Enter email"
        />
        <label >password</label>
        <input
          name="password"
          onChange={inputValue}
          value={user.password}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to={"/login"}>Login</Link>
    </>
  );
}

export default Registration;
