import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" width={60} height={36}/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/bogdan-trivic-ba38242ba/"><FaLinkedin /></a>
        <a href="https://github.com/BogdanT258"><FaGithub /></a>
        <a href="https://www.instagram.com/trivic.99/"> <FaInstagram /></a>
      </div>
    </nav>
  )
}

export default Navbar
