import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../../../assets/scss/Types.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Product from "./Product";

const Types=(props)=>{
    
    const [catagories, setCatagories] = useState(null);
    // const [cid,setCid]=useState(null);
    // const [product,setP]=useState(null);
    // console.log(catagories[0]['id'],"cat")
   
    if(props.products !==null && catagories ===null ){
        var catagoryList=[];
        // var cidList=[]
        for (let i=0 ;i<21 ;i++){
            catagoryList.push({name:props.products["categories"][i]["name_json"]["english"],
                               id:props.products["categories"][i]["id"]
        })
        
        }
        console.log("callled")
        setCatagories(catagoryList);
      
        // setP(catagoryList[0]["english"])
    }
    
    return (<div className="types">
         <FontAwesomeIcon icon={faSearch} id="search" /> 
         <input
           type="text"
           placeholder="Search"
           autoComplete="off"
           name="search"
           className="search-bar"
         >
         </input>
         <div className="types-list">
        {catagories ? (catagories.map((product)=>{
                return <Product 
                name={product.name}
                id={product.id} 
                key={product.id}
                  />} ) ) :<h1 style={{textAlign:'center'}}> Loading...</h1>}
        </div>
       
      
    </div>);
        
    }



export default Types;