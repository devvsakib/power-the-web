import React from 'react'

function Acard(props) {
  return (
    <div>
        <div className="col my-3">
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.tittle}</h5>
        <h6 className="card-title">Price: {props.price}</h6>
        <p className="card-text">Phone Number:{props.phone}</p>
       {/* <Link to='/wishlist'>
        <button type="button" class="btn btn-primary">Add to wishlist</button>
        </Link> */}
        {/* <p className="card-text">Email: {props.email}</p> */}
      </div>
    </div>
  </div>
    </div>
  )
}
Acard.defaultProps={
image: "https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80",
tittle: 'Add your Item',
phone: ' Give your phone',
email: 'Give your email',
price:'To be decided'
}

export default Acard
