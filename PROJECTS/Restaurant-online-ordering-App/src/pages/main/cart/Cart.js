import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../../../assets/scss/Cart.scss"
import emptylogo from "../../../assets/images/cart_empty.png"
import CartItem from "./CartItem";

const Cart=(props)=>{
    const [total,setTotal]=useState(Number(0));
    const [totalq,setTotalq]=useState(Number(0));
    var tt=0;
    var totalqty=0;
    var price=props.product_list.map((p)=>{
        tt+=p.price*p.qty;
        totalqty+=p.qty;
        
    
    });
    if (tt!==total){
    setTotal(tt);
    }
    if( totalqty !== totalq){
        setTotalq(totalqty)
    }
    
    return (
        <>
    <div className="cart">
       <h1>Your Cart</h1>
       <hr></hr>
       {props.product_list.length>0 ? (props.product_list.map((product)=>{
                return <CartItem 
                name={product.name}
                price={product.price}
                desc={product.desc}
                id={product.id} 
                qty={product.qty}
                onIncrease={props.onIncrease}
                onDecrease={props.onDecrease}
                key={product.id}
                  />} ) ) :  <div className="empty"> <img src={emptylogo}></img>
                  <h2>Please select at least one product to place an order</h2></div>
                
              }
         {total >0 ? <>
         <div className="total">
              <div><h1>Total</h1></div><div><h1>{total.toFixed(2)}$</h1></div>
        </div>
        <hr/>
        <div id="checkout">
            Checkout
        </div>
        </>
         
         :""}     
     
     </div>
     <div className="small-cart">
        <button >
            <div className="detail-cart">
                 <div className="cartIconContainer">
                      <img className="cartIcon" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cart-icon" />
                      <span className='cartCount'>{totalq}</span>
                </div>
                 <div><h1>Total</h1></div> 
                 <div> {total.toFixed(2)}$</div>
            </div>
        </button>
     </div>
     </>
    );
        
    }



export default Cart;