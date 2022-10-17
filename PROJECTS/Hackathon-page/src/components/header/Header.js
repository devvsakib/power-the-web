import React from 'react';
import './Header.scss';
import logo from '../../assets/logo/logo.png' 

const Header = () => {
  return (
    <>
    <div className="header">
        <img src={logo} alt="" />
        <div className='header__name'>DPhi</div>
    </div>
    </>
  )
}

export default Header;
