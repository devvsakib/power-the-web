import React,{useState,useEffect} from "react";
// import "../../assets/scss/choice.scss"
// import ItemsCategoty from "./ItemsCatagory";
import "../../../../assets/scss/Options.scss"

const Options=(props)=>{
  
    // console.log(props.data,"data",)
    return (<div className="Options">
        <input type="radio" value={props.option.name_json.english+"_"+props.option.price} name={props.option_name} /> 
   <div className="options-name"> 
    <div>
    {props.option.name_json.english}
    </div> 
    <div>{props.option.price} $
    </div>
    </div>
    </div>);
        
    }



export default Options;