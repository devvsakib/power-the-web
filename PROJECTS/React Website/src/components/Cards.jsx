import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='bg-white w-full py-10 px-4'>
        <div className="max-w-[1240] mx-auto flex gap-8 flex-col md:flex-row">
                <div className='w-full border p-4 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Single} alt="Group-1" border="0" className='w-20 mx-auto' />
                    <h2 className='text-center text-2xl font-bold  py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold pb-8'>$149</p>
                    <div className=' mb-4 text-center font-medium'>
                        <p className='py-2 border-b '>500GB Storage</p>
                        <p className='py-2 border-b '>1 Gtanted User</p>
                        <p className='py-2 border-b '>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] mx-auto text-white py-2 px-4 rounded-lg'>Start Trial</button>
                </div>

                <div className='w-full border bg-gray-100 p-4 shadow-xl flex flex-col my-4 rounded-lg duration-300 scale-105 z-[0]'>
                    <img src={Double} alt="Group-1" border="0" className='w-20 mx-auto' />
                    <h2 className='text-center text-2xl font-bold  py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold pb-8'>$249</p>
                    <div className=' mb-4 text-center font-medium'>
                        <p className='py-2 border-b '>500GB Storage</p>
                        <p className='py-2 border-b '>1 Gtanted User</p>
                        <p className='py-2 border-b '>Send up to 2GB</p>
                    </div>
                    <button className='bg-black  w-[200px] mx-auto text-[#00df9a] py-2 px-4 rounded-lg'>Start Trial</button>
                </div>

                <div className='w-full border p-4 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Triple} alt="Group-1" border="0" className='w-20 mx-auto' />
                    <h2 className='text-center text-2xl font-bold  py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold pb-8'>$549</p>
                    <div className=' mb-4 text-center font-medium'>
                        <p className='py-2 border-b '>500GB Storage</p>
                        <p className='py-2 border-b '>1 Gtanted User</p>
                        <p className='py-2 border-b '>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] mx-auto text-white py-2 px-4 rounded-lg'>Start Trial</button>
                </div>
        </div>
    </div>
  )
}

export default Cards