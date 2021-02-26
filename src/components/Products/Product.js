import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>by : {seller}</p>
                <p>Only $ {price}</p>
                <button onClick={()=> props.handleAddCart(props.product)} className="add-cart-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;