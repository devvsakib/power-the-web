import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3 style={{textAlign:"center"}}>Cart</h3>
            <div className="cartWrapper" style={{margin:"20px"}}>
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img style={{height:"80px",width:"80px"}}src={product.image} alt="" />
                        <p style={{color:"#666"}}>Product Model: <strong style={{color:"#444"}}>{product.title}</strong></p>
                        <p style={{color:"#666"}}>Price: <strong style={{color:"#444"}}>${product.price}</strong></p>
                        <button style={{width:"180px"}}
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
