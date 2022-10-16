import React from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Checkout({id, image, title, phone, price,disc,t }) {
    const [{basket,b1},dispatch] = useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type:'RemoveFromBasket',
            id:id
        })


    }
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
  return (
    <div className="container my-3">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Phone Number:{phone}</p>
              <p className="card-text">Price: {price}</p>
              <p className="card-text">
                <small className="text-muted">Last updated {basket.length} mins ago</small>
              </p>
              <button type="button" onClick={removeFromBasket} class="btn btn-primary">Remove From WishList</button>
              <div>
              <Link to='/ele' style={{textDecoration:'None' ,color:'green'}}>
              <button onClick={moveInside} className="my-1">View Details</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
