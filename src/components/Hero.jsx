import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                <p className='text-[#00df9a] font-bold p-2'> FRONTEND DEVELOPER </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'> REACT.JS </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Learning and improving in </p>
                    <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' strings={["HTML5", "CSS3", "TailwindCss", "React.Js"]} typeSpeed={120} backSpeed={60} loop />
                </div>
                <p className='md:text-2xl text-md text-center font-bold text-gray-500'> Studying new technologies and improving my skills in differents languages and frameworks.</p>
                <button className='bg-[#00df9a] hover:bg-transparent hover:text-[#00df9a] duration-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </section>
  )
}

export default Hero