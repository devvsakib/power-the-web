import React,{useState,useEffect} from "react";
import "../../../assets/scss/Items.scss"
import ItemsCategoty from "./ItemsCatagory";


const Items=(props)=>{
    const [products,setProducts]=useState(null);

    if (props.product_detail !==null && products ===null){
        var productList=[];
        for (let i=0 ;i<21 ;i++){
            productList.push(props.product_detail["categories"][i])

        }
        setProducts(productList);
    }
    // console.log(props.product_detail.sides,"sides");
  
    return (<div className="items">
        {products ? (products.map((product)=>{
                return <ItemsCategoty 
                product={product}
                sides={props.product_detail.sides}
                parts={props.product_detail.parts}
                id={product.id} 
                onAddProduct={props.onAddProduct}
                onMultiProduct={props.onMultiProduct}
                onIncrease={props.onIncrease}
                onDecrease={props.onDecrease}
                key={product.id}
                  />} ) ) :<h1>Loading...</h1>}
       
    </div>);
        
    }



export default Items;