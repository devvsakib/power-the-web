import React from "react";
var sty = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
};
function Element({ title, image, disc,phone,price }) {
  return (
    <div>
      <h2>{title} details</h2>
      <div className="card mb-3">
        <img
          src={image}
          className="card-img-top center"
          alt="..."
          style={sty}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price of the item ₹{price}</p>
          <p className="card-text">To Buy Contact{phone}</p>
          <p className="card-text">{disc}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Element;
