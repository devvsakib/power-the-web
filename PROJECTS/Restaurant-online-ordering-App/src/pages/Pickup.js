import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/scss/Pickup.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping,faPlateWheat} from '@fortawesome/free-solid-svg-icons'


const Pickup=()=>{
    
    const setPickUp=(e)=>{
        e.preventDefault();
        let pOpition=document.getElementById('poption');
        pOpition.style.display="none";
        let pick=document.getElementById('pick-but');
        pick.style.display="block";
        let pick2=document.getElementById('dine-but');
        pick2.style.display="none";
    }

    const setDineIn=(e)=>{
        e.preventDefault();
        let pick2=document.getElementById('dine-but');
        pick2.style.display="block";
        let pick=document.getElementById('pick-but');
        pick.style.display="none";
        let pOpition=document.getElementById('poption');
        pOpition.style.display="none";
    }
    
    return (<div className="pickup" id="poption">
        <div className="pickup-content">
            <div className="pickup-head">
                <div>
                <span id="oo">Order Type</span>
                <p> Please select the order type</p>
               
                </div>
                
            </div>
            {/* <hr/> */}
            <br/>
          <a onClick={setPickUp}>
         <div className="pick-option" id="pick-up" value="Pick Up" onclick={setPickUp}>
         <FontAwesomeIcon icon={faBagShopping} id="icon" />
         <div className="pick-content">
            <h1>Pick Up</h1>
            I will pick up my food
          
         </div>
        
         </div>
         </a>
         <hr></hr>
         <a onClick={setDineIn}>
         <div className="pick-option" id="dine-in" value="Dine In" >
         <FontAwesomeIcon icon={faPlateWheat} id="icon" /> 
         <div className="pick-content">
            <h1>Dine In</h1>
            I'll  Eat in the Resturant
          
         </div>
         </div>
         </a>
        </div>
    </div>);
        
    }



export default Pickup;