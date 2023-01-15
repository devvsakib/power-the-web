import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/scss/Poster.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faPenToSquare,faTag,faBagShopping } from '@fortawesome/free-solid-svg-icons'


const Poster=()=>{
    const showDineoption=(e)=>{
        e.preventDefault();
        let pOpition=document.getElementById('poption');
        pOpition.style.display="block";
        
    }
    
    return (<div className="poster-section">
   <div className="poster">
        <div className="background-image">
        <div className="foreground">
        <div className="foreground-content">
            <div className="title">
             <h1>Smart Pizza Rodguru</h1>
             <p>Italian style pizza, Burgers, 100% Halal</p>
             <button onClick={showDineoption} id="pick-but"> <FontAwesomeIcon icon={faBagShopping} /> <span>Pick Up</span> <FontAwesomeIcon icon={ faPenToSquare } /></button>
             <button onClick={showDineoption}  className="dine-butt" id="dine-but"> <FontAwesomeIcon icon={faPlateWheat} /> <span>Dine IN</span> <FontAwesomeIcon icon={ faPenToSquare } /></button>
             </div>
             <div className="offer">
                <h1>Offer</h1>
                <p>  <FontAwesomeIcon icon={faTag} /> 
                    <span className="coupon">PIZZA50</span>
                    <span>Discount of 50% on orders above $5</span>
                </p>

             </div>
        </div>
        </div>
        </div>
        
     
    </div>
    </div>);
        
    }



export default Poster;