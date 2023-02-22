import React,{useState,useEffect} from "react";
import "../../../../assets/scss/Choice.scss"
import Parts from "./Parts"
import Options from "./Options";
import Sides from "./Sides";

const Choice=(props)=>{
       const [multi,setMutli]=useState(null);
       
       const addtoCart=(e)=>{
        e.preventDefault();
         props.ongetProduct(multi)

       }
       console.log(multi)
        const onChange=(e)=>{
            console.log(e.target.value)
            let val=e.target.value.split("_");
            setMutli({name:val[0],price:val[1]})
        }
   
    return (
    <>
   
    
    <hr/>
    <div className="choice">
        <div className="choice-head">
     <div className="heading">
    {props.name} 
    </div>
    <div className="option-type">Choose one</div>
    </div>
    <div onChange={onChange}>
    {props.data.choice ?  (props.data.choice.map((option)=>{
                return <Parts 
                id={option}
                option_name={props.name}
                parts={props.parts}
                sides={props.sides}
                key={option}
                  /> }))  :"no" }
</div>

<div onChange={onChange}>
        {/* <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other */}
      
    {props.data.options ? (props.data.options.map((option)=>{
                return <Options 
                option={option}
                option_name={props.name}
                id={option.id} 
                key={option.id}
                  />} ) ) :''}

</div>
{/* <div onChange="">

        
      
    {props.product.side_products_json ? (props.product.side_products_json.map((option)=>{
                return <Sides 
                option={option}
                id={option.id} 
                key={option.id}
                  />} ) ) :''}

</div> */}


<hr/>
<div className="add-but-opt" onClick={addtoCart}>
    ADD
</div>

    </div>
  
    </>);
        
    }



export default Choice;