import React, { useState } from 'react'

import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
      <div className='pl-1'>
        <img src={Logo} alt='Logo' style={{ width: '100px' }} />
      </div>
      {/* menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10 px-4 text-lg' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-4 text-4xl'>Home</li>
        <li className='py-4 text-4xl'>About</li>
        <li className='py-4 text-4xl'>Skills</li>
        <li className='py-4 text-4xl'>Work</li>
        <li className='py-4 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
          <li className='flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300 animate-pulse'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300 animate-pulse'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300 animate-pulse'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              href='/'
              className='flex justify-between items-center w-full text-gray-300 animate-pulse'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
