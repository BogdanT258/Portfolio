import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

function Navbar() {
  return (
      <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>
      </nav>
  )
}

export default Navbar
