import React from "react";

const Button = (props) =>{

    return(

        <button className="btn1"  onClick={props.onClick}>
            {props.value}
        </button>


    )
}

export default Button;