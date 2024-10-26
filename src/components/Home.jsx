import React from "react"
import fotoli from '../assets/fotoli.png'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import mainPoto from '../assets/mainpoto.jpg'
import birthdayPhoto from '../assets/birthdayPoto.jpg'
import conferrencePoto from '../assets/conferrencepoto.jpg'

import weddingImage from '../assets/wedding.jpg'
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div>
       <div className="flex justify-center">
  <img className=" p-[50px] mb-[150px] h-[500px] w-[1300px]" src={mainPoto} alt="Wedding" />
</div>
        <div className="flex flex-col justify-center">
        <h2 class=" font-libre text-6xl text-[#a2724e]  text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[183ms] preScale scaleIn">
  Three Easy Steps
</h2>
          <img className="w-[500px] mx-auto" src={fotoli} alt="" />
        </div>
        <div>
        <p class=" font-poppins mt-[30px] text-gray-500 leading-[35px] text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[200ms] preFade fadeIn p-[30px] lg:px-[100px] ">
  If wedding planning has you overwhelmed, we're here to help. We're an all-inclusive elopement and intimate wedding planning company serving the San Francisco, Middle Tennessee, and Nashville areas. After planning and photographing over 1000 tiny weddings at the iconic SF City Hall, it was time to grow and share our small wedding philosophy with couples in love who wanted new and exciting options to the traditional big wedding. Planning epic weddings for every budget is our happy place.
</p>


        </div>
       
        <div className="flex flex-col md:flex-row md:space-x-8 items-center md:space-y-0 space-y-8">
  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e] font-poppins p-[30px]">Dream it</h1>
    <h4 className="text-lg text-gray-500 font-poppins pl-[50px]">What sparks your excitement? Choose your wedding destination.</h4>
    <img className="mx-auto p-[80px]" src={conferrencePoto} alt="Inspiration" />
    <Link to={"/services"} className=" font-poppins mt-[30px] p-[20px] text-xl rounded-full bg-orange-700 text-white transition duration-300 hover:bg-[#a2724e] ">
      Get creative
    </Link>
  </div>

  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e] font-poppins p-[30px] ">Book it</h1>
    <h4 className="text-lg text-gray-500 font-poppins">Find your perfect wedding package and <br /> splurge options.</h4>
    <img className="mx-auto p-[80px] mt-[30px] " src={birthdayPhoto} alt="Inspiration" />
    <Link to={"/services"} className="font-poppins mt-[30px] p-[20px] text-xl rounded-full bg-orange-700 text-white transition duration-300 hover:bg-[#a2724e]">
  Get creative
</Link>
  </div>

  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e] font-poppins p-[30px]">Love it</h1>
    <h4 className="text-lg text-gray-500 font-poppins">It's time to say Yes, “I Do!”</h4>
    <img className="mx-auto p-[80px]  " src={birthdayPhoto} alt="Inspiration" />
    <Link to={"/services"} className=" font-poppins mt-[30px] p-[20px] text-xl rounded-full bg-orange-700 text-white transition duration-300 hover:bg-[#a2724e] ">
      Get creative
    </Link>  
  </div>
</div>

<div className="flex flex-col items-center md:flex-row md:space-x-8 space-y-8">
  <div className="flex flex-col items-center">
   
  </div>
  
  <div className="flex flex-col items-center">
   
</div>

  <div className="flex flex-col items-center">
   
  </div>
</div>
<div className="text-center">
  <h1 className="text-6xl  text-[#a2724e] mt-[70px] font-libre   ">Our packages </h1>
  <p class="font-poppins mt-[30px] text-gray-500 leading-[35px] text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[200ms] preFade fadeIn p-[30px] lg:px-[100px]">Choose your package and we'll help you get married simply and affordably. We specialize in creating weddings that you didn't even dare dream of, or know you wanted, so you can have an extraordinary day! We offer beautiful locations and fully planned tiny weddings.  We'll help you choose your beautiful venue, and match you up with our fully vetted family of vendors to create your all inclusive wedding dream team.  It's time to get excited about your wedding again!</p>
</div>

       
     
        
        
    </div>
  )
}
