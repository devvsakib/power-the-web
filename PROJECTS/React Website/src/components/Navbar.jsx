import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = React.useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-black text-white w-full sticky top-0 z-10' >
    <div className=' text-white flex justify-between items-center h-24 max-w-[1240px] px-4 md:mx-auto'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex '>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div className='block md:hidden'> 
        {nav ? <AiOutlineClose onClick={toggleNav} className='text-3xl cursor-pointer' /> : <AiOutlineMenu onClick={toggleNav} className='text-3xl cursor-pointer' />}
      </div>

      <div className={nav ? 'h-full fixed left-0 top-0 border-r border-gray-900 w-[60%] bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 h-16 text-middle flex flex-col justify-center'>React.</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar