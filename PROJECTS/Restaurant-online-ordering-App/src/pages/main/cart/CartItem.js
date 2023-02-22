import React,{useState,useEffect} from "react";
import "../../../assets/scss/CartItem.scss"


const CartItem=(props)=>{
//    const [qty,setQty]=useState(props.qty);
//    if(qty!=props.qty){
//     setQty(props.qty);
//    }
const onDecrease=props.onDecrease
const onIncrease=props.onIncrease
//  console.log(props.qty,"qtyytty")
//    console.log(props,"cart")
  
    return (<div className="cart-item">
        <div className="cart-item-head"><h3>{props.name}</h3>
        {props.desc}
        </div>
         <div className="increase-button">
            <button className="minus" onClick={()=>onDecrease(props.id)}>-</button> 
         <span className="qty"  >{props.qty}</span>
          <button className="plus" onClick={()=> onIncrease(props.id)}>+</button></div>
        <div className="price">{props.price*props.qty} $</div>
        
       
    </div>);
        
    }



export default CartItem;