import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Add() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [disc, setDisc] = useState("");
  const [img, setImg] = useState("");
  const [{store}, dispatch] = useStateValue();
  const addItem=()=>{
    dispatch({
      type: "ADD-TO-Store",
      item: {
      image:img,
      title:name,
      phone: phone,
      email: email,
      price:price,
      id:'7',
      disc:disc
      },
    });

  };
  return (
    <div className="container">
      <h1>Post your Item Here</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label {}">
          Phone Number
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="78734-----"
        />
      </div>
      <div className="mb-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Enter the name of your product"
          aria-label="readonly input example"
          readonly
        ></input>
      </div>
      <div className="mb-3">
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Enter the price of your product"
          aria-label="readonly input example"
          readonly
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Any discription of the product
        </label>
        <textarea
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <input
         value={img}
         
         onChange={(e) => setImg(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Enter the link of the image of your product"
          aria-label="readonly input example"
          readonly
        ></input>
      </div>
      
      <div className="mb-3">
        <label for="formFile" className="form-label">
          Or add image of your product as file 
        </label>
        <input
          
          className="form-control"
          type="file"
          id="formFile"
        />
         <Link to="/" style={{ textDecoration: "None" }}>
        <button type="button" className="btn btn-primary btn-lg my-3" onClick={addItem}>Add Item</button>
        </Link>
      </div>
    </div>
  );
}

export default Add;
