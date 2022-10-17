import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/scss/Header.scss"
import Logo from "../assets/images/logo.png"


const Header=()=>{
    
    
    return (<>
       <div className="header">
         <div className="nav">
            <div className="nav-element">
                <div className="logo"><img src={Logo}/></div>
                <div className="list-outer">
                    <nav className="list-inner">
                        <ul className="list">
                            <a>
                                <li> Home</li>
                            </a>
                            <a>
                                <li>Menu</li>
                            </a>
                            <a>
                                <li>Reservation</li>
                            </a>
                            <a>
                                <li>Contact</li>
                            </a>
                            <a>
                                <li>Login</li>
                            </a>
                            <a>
                                <li></li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
         </div>
       </div>
       
    </>);
        
    }



export default Header;