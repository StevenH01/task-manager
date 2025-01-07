import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import LoginModal from './login/CustomModal';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className='flex justify-between m-6 items-end'>
      <h1 className='bg-teal-400 text-white rounded-2xl p-4 text-2xl'>
        Task App
      </h1> 
      <nav className='hidden md:flex gap-4'>
          <a href="">About</a> 
          <a href="">Demo</a> 
          <button className='block' onClick={() => setIsModalOpen(true)}>
            Log In
          </button>
          {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
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
          <button className='block' onClick={() => setIsModalOpen(true)}>
            Log In
          </button>
          {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
        </div>
      )}
    </div>
  );
};

export default NavBar;
