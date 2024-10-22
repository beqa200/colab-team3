import React from "react"
import fotoli from '../assets/fotoli.png'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

import weddingImage from '../assets/wedding.jpg'
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div>
       <div className="flex justify-center">
  <img className=" mb-[150px] h-[500px] w-[1300px]" src={image3} alt="Wedding" />
</div>
        <div className="flex flex-col justify-center">
        <h2 class="text-5xl text-[#a2724e] font-bold text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[183ms] preScale scaleIn">
  Three Easy Steps
</h2>
          <img className="w-[500px] mx-auto" src={fotoli} alt="" />
        </div>
        <div>
        <p class="text-gray-500  leading-[35px] pr-[100px] pl-[100px] text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[200ms] preFade fadeIn">
  If wedding planning has you overwhelmed, we're here to help. We're an all-inclusive elopement and intimate wedding planning company serving the San Francisco, Middle Tennessee, and Nashville areas. After planning and photographing over 1000 tiny weddings at the iconic SF City Hall, it was time to grow and share our small wedding philosophy with couples in love who wanted new and exciting options to the traditional big wedding. Planning epic weddings for every budget is our happy place.
</p>


        </div>
       
        <div className="flex flex-col md:flex-row md:space-x-8 items-center md:space-y-0 space-y-8">
  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e]">Dream it</h1>
    <h4 className="text-lg text-gray-500">What sparks your excitement? Choose your wedding destination.</h4>
  </div>

  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e]">Book it</h1>
    <h4 className="text-lg text-gray-500">Find your perfect wedding package and <br /> splurge options.</h4>
  </div>

  <div className="flex-1 text-center">
    <h1 className="text-2xl font-bold text-[#a2724e]">Love it</h1>
    <h4 className="text-lg text-gray-500">It's time to say Yes, “I Do!”</h4>
  </div>
</div>

<div className="flex flex-col items-center md:flex-row md:space-x-8 space-y-8">
  <div className="flex flex-col items-center">
    <img className="mx-auto mt-[30px] " src={image1} alt="Inspiration" />
    <Link to={"/services"} className=" mt-[30px] pb-[25px] bg-orange-500 text-white block">
      Get creative
    </Link>
  </div>
  
  <div className="flex flex-col items-center">
    <img className="mx-auto  " src={image2} alt="Inspiration" />
    <Link to={"/services"} className=" mt-[30px]  pb-[25px] bg-orange-500 text-white block">
      Get creative
    </Link>  
</div>

  <div className="flex flex-col items-center">
    <img className="mx-auto" src={image3} alt="Inspiration" />
    <Link to={"/services"} className=" mt-[30px] pb-[25px] bg-orange-500 text-white block">
      Get creative
    </Link>
  </div>
</div>
<div className="text-center">
  <h1 className="text-4xl font-bold text-[#a2724e] mt-[70px] ">Our packages </h1>
  <p class=" mt-[30px] text-gray-500 leading-[35px] pr-[100px] pl-[100px] text-center whitespace-pre-wrap transition ease duration-[1200ms] delay-[200ms] preFade fadeIn">Choose your package and we'll help you get married simply and affordably. We specialize in creating weddings that you didn't even dare dream of, or know you wanted, so you can have an extraordinary day! We offer beautiful locations and fully planned tiny weddings.  We'll help you choose your beautiful venue, and match you up with our fully vetted family of vendors to create your all inclusive wedding dream team.  It's time to get excited about your wedding again!</p>
</div>

       
     
        
        
    </div>
  )
}
