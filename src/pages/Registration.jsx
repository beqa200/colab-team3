import { useState } from "react";
import { Link } from "react-router-dom";
import google from '../assets/google.webp'
import facebook from '../assets/facebook.jpg'
import apple from '../assets/apple.png'

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
    <div>
      <h1>Login to event planner</h1>
    </div>
    <div className="w-[250px] flex justify-center items-center ml-2 border-black rounded-[40px] py-1.5 px-2.5" style={{ borderWidth: '1px' }}>
  <img className="w-[25px] mr-2" src={google} alt="Google Icon" />
  <h3 className="text-[17px]">continue with google</h3>
</div>
<div className="w-[250px] flex items-center ml-2 border-black rounded-[40px] py-1.5 px-2.5" style={{ borderWidth: '1px' }}>
  <img className="w-[25px] mr-2" src={facebook} alt="Google Icon" />
  <h3 className="text-[17px]">continue with facebook</h3>
</div>
<div className="w-[250px] flex items-center ml-2 border-black rounded-[40px] py-1.5 px-2.5 mb-5" style={{ borderWidth: '1px' }}>
  <img className="w-[25px] mr-2" src={apple} alt="Google Icon" />
  <h3 className="text-[17px]">continue with apple</h3>
</div  >
<hr className='mt-5' />
      <form onSubmit={handleSubmit} className='flex flex-col'>
        
        <input  className='h-[40px] text-[20px]'
          name="email"
          onChange={inputValue}
          value={user.email}
          type="text"
          placeholder="Enter email"
        />
        
        <input  className='h-[40px] text-[20px] mt-6 '
          name="password"
          onChange={inputValue}
          value={user.password}
          type="password"
          placeholder="Enter password"
        />
        
      </form>
      <div >
      <button className="w-[250px] flex items-center ml-2 border-black rounded-[40px] py-1.5 px-2.5 mb-5 mx-auto" style={{ borderWidth: '1px' }} type="submit">Log in</button>

      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <Link to={"/login"}>Login</Link> */}
    </>
  );
}

export default Registration;
