import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/scss/Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faPenToSquare,faTag } from '@fortawesome/free-solid-svg-icons'


const Footer=()=>{
    
    
    return (<div className="footer">
        <div className="footer-content">
           <h2> Online Ordering System</h2>
           <p>Powered by</p>
           <h1>fleksa</h1>
        </div>
    </div>);
        
    }



export default Footer;