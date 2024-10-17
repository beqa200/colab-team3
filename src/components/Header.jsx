import React, { useState } from 'react'
import logo from '../assets/logo.webp'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
  return (


    <header className={`p-4 bg-white ${isOpen ? 'flex flex-col items-center' : 'flex items-center justify-between'}`}> 
      
    {/* Logo Section */}
    <div className='flex md:justify-center'>
      <img className='w-[250px]' src={logo} alt="Logo" />
    </div>

    {/* Hamburger Menu Section */}
    <div className={`space-y-2 ${isOpen ? 'mt-4' : ''}`}> 
      <button
        className="block text-gray-600 focus:outline-none lg:hidden"  
        onClick={toggleMenu}
      >
        {/* Three Lines (Hamburger Icon) */}
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>
    </div>

    {/* Navigation Section */}
    <div className={`mt-4 flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
      <a href="#about" className="block px-2 py-1 text-gray-600">
        Home
      </a>
      <a href="#services" className="block px-2 py-1 text-gray-600">
        Services
      </a>
      <a href="#contact" className="block px-2 py-1 text-gray-600">
        Contact
      </a>
      <a href="#login" className="block px-2 py-1 text-gray-600">
        Login
      </a>
      <a href="#register" className="block px-2 py-1 text-gray-600">
        Registration
      </a>
      <a href="#planning" className="block px-2 py-1 text-gray-600">
        Start Planning
      </a>
    </div>
</header>
     
    
    
  )
}
