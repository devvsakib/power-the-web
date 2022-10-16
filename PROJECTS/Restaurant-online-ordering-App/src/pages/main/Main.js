import React,{useState,useEffect, createContext} from "react";
import Items from "./items/Items";
import Types from "./types/Types";
import Cart from "./cart/Cart";
import "../../assets/scss/Main.scss"
import Menu from "../sample"

// var CartProduct1=createContext();


const Main=  ()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     
    const [cartProduct,setCartProduct]=useState([]);

    // cartProduct1=cartProduct;
  //  console.log(cartProduct)
   useEffect(() => {
        fetch(`https://myqa.fleksa.com/pyapi/26/menu`)
         .then((response) => response.json())
         .then((actualData) => {console.log(actualData)
                setData(actualData);
                
        })
        .then(setLoading(false))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);
     
    const onMultiProduct=(obj,name,id)=>{
      setCartProduct(old=>[...old,{name:name,price:obj.price,desc:obj.name,id:id,qty:1}])
      console.log("hey");
      // const incresebut=document.getElementById(`${id +"_a"}`)
      // incresebut.style.display="inline-block"

    }
    
     const onAddProduct=(id)=>{
            var obj ;
            var i=0;
            do {
                obj=data["categories"][i]["products"].find(o => o.id === id);
                i++;
              }
              while (i < 21 && obj === undefined);
            setCartProduct(old=>[...old,{name:obj.name_json.english,price:obj.price,id:id,qty:1,desc:""}])
            const addbut=document.getElementById(`${id}`);
            addbut.style.display="none";
            const incresebut=document.getElementById(`${id +"_a"}`)
            incresebut.style.display="inline-block"
    }
    const handleIncrease=(id)=>{
            var cog=cartProduct.findIndex(checkid);
            function checkid(p) {
                return p.id==id;
              }
             let temp=cartProduct;
             temp[cog].qty+=1;
             setCartProduct(old=>[...old.slice(0,cog),
             temp[cog],
             ...old.slice(cog+1,old.length)
            ]);
             const qtybut=document.getElementById(`${id +"_q"}`)
             let q=qtybut.getAttribute('data-qty');
             let updated=Number(q)+1;
             qtybut.setAttribute('data-qty',String(updated));
             qtybut.innerHTML=String(updated);
    }

    const handleDecrease=(id)=>{
      var cog=cartProduct.findIndex(checkid);
      function checkid(p) {
          return p.id==id;
        }
       let temp=cartProduct;
       if (temp[cog].qty == 1){
        setCartProduct(old=>[...old.slice(0,cog),
          ...old.slice(cog+1,old.length)
         ]);

         const addbut=document.getElementById(`${id}`);
          addbut.style.display="inline-block";
          const incresebut=document.getElementById(`${id +"_a"}`)
          incresebut.style.display="none"


       }else{
        temp[cog].qty-=1;
        setCartProduct(old=>[...old.slice(0,cog),
        temp[cog],
        ...old.slice(cog+1,old.length)
       ]);
        console.log(temp,"temp")
        const qtybut=document.getElementById(`${id +"_q"}`)
        let q=qtybut.getAttribute('data-qty');
        let updated=Number(q)-1;
        qtybut.setAttribute('data-qty',String(updated));
        qtybut.innerHTML=String(updated);
       }
     
      
    }

    return (<div className="main">
        <Types products={data}
               
         />
         {/* <CartProduct1.Provider value={cartProduct}> */}
        <Items product_detail={data}
        onMultiProduct={onMultiProduct}
        onAddProduct={onAddProduct}
        onIncrease={handleIncrease} 
        onDecrease={handleDecrease}/>
        <Cart product_list={cartProduct}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        />
        {/* </CartProduct1.Provider> */}
    </div>);
        
    }



export default Main;