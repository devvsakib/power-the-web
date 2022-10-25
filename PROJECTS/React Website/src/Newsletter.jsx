import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
            <div className='flex flex-col justify-center md:col-span-2 lg:pr-16' >
                <h2 className='font-bold text-[#00df9a] uppercase md:text-2xl sm:text-xl' >newsletter</h2>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold mb-4' >Subscribe to our newsletter</h2>
                <p className='text-gray-500 mb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <div className='flex flex-col justify-center mr-4 md:mr-0' >
                <div className='flex flex-row justify-center items-center '>
                    <input type="text" placeholder='Enter your email' className='bg-white-800 px-4 py-2 rounded-md mb-4 justify-center my-4 w-full mr-2' />
                    <button className='bg-[#00df9a] text-black px-4 py-2 rounded-md w-fit my-2 md:mx-0 md:px-6' >Subscribe</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter