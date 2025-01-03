import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between m-6 items-end'>
      <h2 className='bg-blue-400 text-white rounded-2xl p-4 text-2xl'>
        Task App
      </h2> 
      {/* Desktop view */}
      <nav className='hidden md:flex gap-4'>
          <a href="">About</a> 
          <a href="">Demo</a> 
          <a href="">Log In</a>
      </nav>
      <nav className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className='text-3xl'/>
        </button>
      </nav>
      {isOpen && (
        <div 
          className='absolute top-16 left-0 w-full p-4 shadow-lg flex flex-col items-center mt-6'
          onClick={() => setIsOpen(false)}
        >
          <a href="" className='block mb-2'>About</a>
          <a href="" className='block mb-2'>Demo</a>
          <a href="" className='block'>Log In</a>
        </div>
      )}
    </div>
  )
}

export default NavBar;
