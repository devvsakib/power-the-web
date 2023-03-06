import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from 'react-router-dom'
const Header = ({ theme, darkMode }) => {
    return (
        <header className='dark:bg-[#2b3945] w-[100vw] absolute top-0 left-0 right-0  shadow-lg'>
            <div className='flex max-w-[1440px] mx-auto justify-between px-5 md:px-10 py-5'>
                <div className='cursor-pointer'>
                    <Link to="/">
                        <h2 className='font-[800] text-xl md:text-2xl'>Where the world?</h2>
                    </Link>
                </div>
                <div
                    className='flex items-center gap-x-2 cursor-pointer'
                    onClick={() => darkMode()}>
                    <span className='text-dark/60 dark:text-white'>
                        {theme ? <FaMoon /> : <FaSun />}
                    </span>
                    <span className='select-none font-semibold  dark:text-white text-[16px]'>{theme ? "Dark Mode" : "Light Mode"}</span>
                </div>
            </div>
        </header>
    )
}

export default Header