import { faMarsDouble } from "@fortawesome/free-solid-svg-icons";
import React,{useState,useEffect} from "react";
// import "../../assets/scss/choice.scss"
// import ItemsCategoty from "./ItemsCatagory";
import "../../../../assets/scss/Options.scss"

const Sides=(props)=>{

    return (<div className="Options">
    {/* <input type="radio" value={props.option.name_json.english} name={props.option_name} />  */}
<div className="options-name"> 
<div>
side_products_json
{props.name}
</div> 
<div>
    {/* {props.option.price} $ */}
</div>
</div>
</div>);
        
    }

export default Sides;