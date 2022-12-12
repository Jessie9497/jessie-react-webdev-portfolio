import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-red-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jessie Betancourt</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Web Developer. </h2> 
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a Front-End Web Developer specializing in building UI front-end
          web applications for the internet. Currently, I'm focused
          on building web applications for the client side, but I am
           hoping to journey into full stack one day!
            </p> 
         
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-700 hover:border:white-200'>
              View Work 
            <span className='text-white group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home