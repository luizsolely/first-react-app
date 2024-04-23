import React from 'react'
import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='max-w-[1240px] mx-auto py-4 px-4 text-gray-300'>
        <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className='flex justify-center items-center md:w-[50%]'>
                <p className='py-4 text-center'>Website made with JSX, TailwindCss and ReactJS.</p>
                    <FaInstagram href='https://www.instagram.com/luizsolely/' className='hover:text-[#00df9a] cursor-pointer duration-300 ml-4' size={30} />
                    <FaGithubSquare className='hover:text-[#00df9a] cursor-pointer duration-300 ml-4' size={30} />
                    <FaLinkedin className='hover:text-[#00df9a] cursor-pointer duration-300 ml-4' size={30} />
                </div>

            <div className='flex items-center gap-4'>
                <p className='py-2 text-sm'>E-mail: &nbsp; &nbsp; luizsolely@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer