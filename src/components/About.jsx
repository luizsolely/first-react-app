import React from 'react'
import profilePic from '../assets/images/profile-pic.jpeg'

const About = () => {
  return (
    <section id='about' className='max-w-[1240px] mx-auto px-4 py-[4rem] text-white'>
      <h1 className='text-4xl text-center font-bold mb-24'>About Me</h1>
        <div className='grid md:grid-cols-2 items-center'>
                <img className='rounded-full w-2/4 mx-auto border-4 border-transparent hover:border-[#00df9a] duration-300' src={profilePic} />
                <div className='w-full flex flex-col text-center'>
                    <h2 className='text-4xl font-bold mb-2 tracking-wide'><span className='text-[#00df9a]'>Hi!</span> I'm Luiz Felipe</h2>
                    <p className='text-medium tracking-wider '>My name is Luiz Felipe, I'm 18 years old, and I graduated from the Computer Networks technical course at SENAI Santos. Currently, I'm pursuing Systems Analysis and Development at IFSP - Federal Institute of Education, Science, and Technology of São Paulo.</p>
                </div>
        </div>

    </section>
  )
}

export default About