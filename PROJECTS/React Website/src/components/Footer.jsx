import React from 'react'
// import social media icons
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaDribbbleSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h3 className='text-3xl w-full font-bold mb-4 text-[#00df9a]'>React.</h3>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        <div className='flex gap-4'>
          <FaFacebookSquare className='text-2xl' />
          <FaTwitterSquare className='text-2xl' />
          <FaInstagram className='text-2xl' />
          <FaDribbbleSquare className='text-2xl' />
          <FaGithubSquare className='text-2xl' />
        </div>
      </div>

      <div className='col-span-2' >
        <h3 className='text-3xl w-full font-bold mb-4 text-[#00df9a]'>Quick Links</h3>
        <div className='flex flex-row justify-between'>
        <ul className='py-4'>
          <li className='py-2'>Home</li>
          <li className='py-2'>About</li>
          <li className='py-2'>Services</li>
          <li className='py-2'>Contact</li>
        </ul>

        <ul className='py-4'>
          <li className='py-2'>Home</li>
          <li className='py-2'>About</li>
          <li className='py-2'>Services</li>
          <li className='py-2'>Contact</li>
        </ul>

        <ul className='py-4 hidden md:flex flex-col'>
          <li className='py-2'>Home</li>
          <li className='py-2'>About</li>
          <li className='py-2'>Services</li>
          <li className='py-2'>Contact</li>
        </ul>
        
        <ul className='py-4 hidden md:flex flex-col'>
          <li className='py-2'>Home</li>
          <li className='py-2'>About</li>
          <li className='py-2'>Services</li>
          <li className='py-2'>Contact</li>
        </ul>

        </div>

      </div>
    </div>
  )
}

export default Footer