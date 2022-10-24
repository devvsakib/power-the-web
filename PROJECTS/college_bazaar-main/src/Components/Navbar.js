import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
function Navbar() {
  const [search,setSearch]= useState('');

  const [{basket,user}] = useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }

  }
  const getE=()=>{

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-primary">
        <div className="container-fluid">
        <Link to='/' style={{textDecoration:'None'}}>
          <a className="navbar-brand navi" id="logo" href="#!">
            <strong>C</strong>ollege <strong>B</strong>azaar
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/' style={{textDecoration:'None'}}>
              <li className="nav-item mx-2">
                <a className="nav-link  navi" aria-current="page" href="#!" >
                  Home
                </a>
              </li>
              </Link>
              <Link to='/add' style={{textDecoration:'None'}}>
              <li className="nav-item mx-2">
                <a className="nav-link  navi" aria-current="page" href="#!">
                  Post Your Item
                </a>
              </li>
              </Link>
              <Link to='/wishlist' style={{textDecoration:'None'}}>
              <li className="nav-item mx-2">
                <a className="nav-link  navi" aria-current="page" href="#!">
                  WishList (<span>{basket.length}</span>)
                </a>
               
              </li>
              </Link>
              <Link to={!user && '/signup'} style={{textDecoration:'None'}}>
              <li className="nav-item mx-2" onClick={handleAuthentication}>
                <a className="nav-link  navi" aria-current="page" href="#!">
                 {user?'Sign Out':'Sign In'} 
                </a>
              </li>
              </Link>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                
              />
              <Link to='/sr' style={{textDecoration:'None'}}>
              <button className="btn btn-outline-light" type="submit" onClick={getE}>
                Search
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
