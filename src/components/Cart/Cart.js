import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.price, 0 );
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered : {props.cart.length}</h5>
            <h5>Total Price : {totalPrice}</h5>
        </div>
    );
};

export default Cart;