import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router';
import image3 from '../assets/image3.jpg'

export default function UserInfo() {
  const [user,setUser] = useState({})
const navigate = useNavigate()
  useEffect(() => {
    const createEvent = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        token = JSON.parse(token);
        const response = await axios.get(
          "https://algouni-students.duckdns.org:8002/event-planner/team-3/auth/signup",
          
          {
            headers: {
              Authorization: `Bearer ${token.access}`,
            },
          }
        );
        console.log(response.data)
        setUser(response.data)
      }else{
        navigate('/login')
      }
    };
    createEvent()
  }, []); // Adding dependency array to avoid multiple executions
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div  className='text-center'>
       <div>
       <h1 className='text-2xl font-bold font-libre  md:text-3xl lg:text-4xl xl:text-[40px] text-[#a2724e]'>User Info</h1>    
         </div>
         <div className='flex flex-col text-center md:flex-row '>
     
     <div className="w-full md:w-1/2 h-full">
        <img
           className="w-full mt-[30px] mb-[30px] xl:pr-[40px] h-full object-cover xl:pl-[150px]  pr-[50px] pl-[50px] md:pr-[10px] md:pt-[30px] md:pl-[20px] lg:pl-[70px] "
            src={image3}
          alt=""/>
      </div>
<div className='md:ml-[50px]'>
  <div className='pb-[10px] xl:pt-[20px]  md:mt-[90px] xl:text-[23px] lg:pr-[50px] lg:text-[17px] lg:pb-[30px] font-serif text-[#a2724e]'>
       <span className='pb-[10px] xl:pt-[20px]  md:mt-[90px] xl:text-[23px] lg:pr-[10px] lg:text-[17px] lg:pb-[30px] font-libre font-bold text-[#a2724e]'>name:</span>  <span>{ user ? user.name : null }</span> 
  </div>
  <div className='pb-[10px] xl:pt-[20px] xl:text-[23px] lg:pr-[50px] lg:text-[17px] lg:pb-[30px] font-serif text-[#a2724e]'>
      <span  className='pb-[10px] xl:pt-[20px] xl:text-[23px] lg:pr-[10px] lg:text-[17px] lg:pb-[30px] font-libre font-bold text-[#a2724e]'>phone : </span>  <span>{ user ? user.phoneNumber : null }</span>
  </div>
  <div className='pb-[10px] xl:pt-[20px] xl:text-[23px] lg:pr-[50px] lg:text-[17px] lg:pb-[30px] font-serif text-[#a2724e]'>
  <span  className='pb-[10px] xl:pt-[20px] xl:text-[23px] lg:pr-[10px] lg:text-[17px] lg:pb-[30px] font-libre font-bold text-[#a2724e]'>email : </span>  { user ? user.email : null }
  </div>
  <div className='pb-[10px] xl:pt-[20px] hover:underline duration-300 xl:text-[23px] lg:pr-[50px] lg:text-[17px] lg:pb-[30px] font-serif text-[#a2724e] cursor-pointer'>
    <h1 onClick={handleLogout}>Log Out</h1>
  </div>
</div>
    
  </div>
    </div>
   
  );
}
