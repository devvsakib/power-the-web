import React from 'react'
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider";

function Wishlist() {
  const [{basket}] = useStateValue();
  return (
    <div>
      <h1>Your Wishlist</h1>
      <h3>Total Items: {basket.length}</h3>
      <div>
      {basket.map(item =>(
        <Checkout
        image={item.image}
        title={item.title}
        phone={item.phone}
        price={item.price}
        id={item.id}
        />

      ))}
      </div>
    </div>
  )
}

export default Wishlist
