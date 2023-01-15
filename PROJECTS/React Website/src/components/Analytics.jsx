import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4 '>
        <div className='max-w-[1240px mx-auto grid md:grid-cols-2' >
            <img src={Laptop} alt='laptop' className='w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center md:items-start' >
                <h2 className='font-bold text-[#00df9a] uppercase md:text-2xl sm:text-xl' >data analytics dashboard</h2>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold mb-4' >Manage Data Analytics Central</h2>
                <p className='text-gray-500 mb-4 lg:pr-32' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <button className='bg-black text-[#00df9a] px-6 py-2 rounded-md w-[200px] mx-auto md:mx-0' >Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics