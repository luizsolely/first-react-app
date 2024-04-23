import { useState } from 'react'
import { Link } from 'react-scroll'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {

    const [Nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!Nav)
    }

  return (
        <header id='Navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
            <ul className='hidden sm:flex'>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer navItem'>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                </li>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer navItem'>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                </li>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer navItem'>
                    <Link to="technologies" spy={true} smooth={true} offset={50} duration={500}>TECHNOLOGIES</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block sm:hidden'>
                {!Nav ? <AiOutlineClose  size={30}/> : <AiOutlineMenu size={30} /> }
            </div>
            <div className={!Nav ? 'fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
                <ul className='uppercase p-4'>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer border-b border-gray-600 navItem'>HOME</li>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer border-b border-gray-600'>ABOUT</li>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer border-b border-gray-600 navItem'>TECHNOLOGIES</li>
                <li className='p-4 font-bold hover:text-[#00df9a] duration-300 cursor-pointer border-b border-gray-600 navItem'>CONTACT</li>
                </ul>
            </div>
        </header>
  )
}

export default NavBar