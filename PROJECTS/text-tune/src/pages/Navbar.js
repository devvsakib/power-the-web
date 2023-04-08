import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="main-nav">
      {/* <NavLink to="/">Text Tune</NavLink> */}
      <NavLink to="/" className="title">
        Text Tune📝
      </NavLink>
      <NavLink to="/convert">Text Converter</NavLink>
      <NavLink to="/similar">Synonyms & Antonyms</NavLink>
    </nav>
  );
};

export default Navbar;
