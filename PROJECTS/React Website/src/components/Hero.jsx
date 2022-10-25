import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] w-full h-screen text-center flex flex-col justify-center mt-[-96px] mx-auto px-2 md:px-0'>
                <p className='uppercase text-[#00df9a] font-bold text-xl '>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with data.</h1>
                <div className='flex  justify-center items-center'>
                    <p className='sm:text-4xl text-xl font-bold py-2'>Fast, flexible financing for </p>
                    
                    <Typed className='sm:text-4xl text-xl font-bold pl-2 text-[#474d57]' strings={['businesses', 'investors', 'developers']} typeSpeed={40} backSpeed={50} loop />
    
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] text-white font-bold py-4 px-8 rounded-md mt-8 hover:bg-[#00c48c] w-[200px] mx-auto'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero