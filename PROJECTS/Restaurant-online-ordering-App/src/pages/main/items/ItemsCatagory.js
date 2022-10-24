import React,{useState} from "react";
import CategoryProudct from "./CategoryProduct";
import "../../../assets/scss/ItemsCategory.scss"

const ItemsCategoty=(props)=>{
     const [categoryProduct,setCategoryProduct]=useState(props.product.products);
    const name=props.product.name_json.english;
    const desc=props.product.description_json.english;
    // console.log(categoryProduct,"pp")
    return (<div className="ItemsCategoty" id={props.product.id+"_cato"}>
      <div className="category-head">
       <h1 > {name}</h1>
       </div>
       <p className="cat-desc">{desc}</p>
       
       {categoryProduct ? (categoryProduct.map((product)=>{
                return <CategoryProudct 
                product={product}
                id={product.id} 
                parts={props.parts}
                sides={props.sides}
                onMultiProduct={props.onMultiProduct}
                onAddProduct={props.onAddProduct}
                onIncrease={props.onIncrease}
                onDecrease={props.onDecrease}
                key={product.id}
                  />} ) ) :''}
    </div>);
        
    }



export default ItemsCategoty;