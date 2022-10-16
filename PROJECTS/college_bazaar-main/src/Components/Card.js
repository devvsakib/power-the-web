import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Card({id,image,title,phone,price,disc,t}) {
  const [{basket,b1}, dispatch] = useStateValue();
  console.log("This is the basket ==>>>", basket);
  
  const moveInside=()=>{
    if(b1.length===0)
    {
    dispatch({
      type: "ADD-TO-BASKET1",
      item: {
        image: image,
        title:title,
        phone: phone,
        id:id,
        price: price,
        disc:disc,
        t:t
      },
    });
  }

else
    {
    dispatch({
      type: "ADD-TO-NBASKET1",
      item: {
        image: image,
        title:title,
        phone: phone,
        id:id,
        price: price,
        disc:disc,
        t:t
      },
    });
  };
  

}

  const addToWishlist = () => {
    console.log("Your item has been added")
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        image: image,
        title:title,
        phone: phone,
        id:id,
        price: price,
        t:t
      },
    });
  };
 
  return (
    <div>
      
      <div className="col my-3">
        <div className="card">
          <img src={image} className="card-img-top" alt="ij" 
          style={{height:'250px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">Price: ₹{price}</h6>
            <p className="card-text">Phone Number:{phone}</p>
            <Link to="/wishlist" style={{ textDecoration: "None" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addToWishlist}
              >
                Add to wishlist
              </button>
              </Link>
              <div>
              
              <button className="my-2" onClick={moveInside}><Link to='/ele' style={{textDecoration:'None' ,color:'green'}}>View Details</Link></button>
              
              </div>
            
            {/* <p className="card-text">Email: {props.email}</p> */}
          </div>
        </div>
      </div>
     
    </div>
    
  );
}
Card.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80",
  title: "Bicycle",
  phone: "+91-7817890372",
  email: "chakshubisht459@gmail.com",
  price: "3000",
  id:'7',
  disc:"This is the sample discription of the product. Tell about the quality of your product and then tell us that how you are wiiling to give this product to your juniors or the buyers",
  t:'Default'
};

export default Card;
