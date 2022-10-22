import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
// import { Button } from '../Button/Button.js'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClicked = () => setClick(!click)
    const mobileMenu = () => setClick(false)

    return (
        <>
            <nav>
                <div className="navbar flex px-10 pt-5 items-center justify-between">
                    <Link to='/' className='nav-logo'>
                        <img className='w-20' src='images/PowerTheWebLogo.png' alt='logo'/>
                    </Link>
                    <div className="menu-container">
                        <ul onClick={click ? 'nav-manu active' : 'nav-menu'}  className='flex justify-items-center text-sm font-medium uppercase'>
                            <li className='nav-items'>
                                <Link to='/' className='nav-links pt-10' onClick={mobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/contributors' className='nav-links text-red' onClick={mobileMenu}>
                                    Contributors
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/projects' className='nav-links' onClick={mobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/blog' className='nav-links' onClick={mobileMenu}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='menu-icon hidden' onClick={handleClicked}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar