import React from 'react';
import {useState} from 'react'
import fakedata from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakedata.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddCart = (products) =>{
        console.log(products);
        const newCart = [...cart,products];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
         <div className="products-container">
         <ul>
              {
                  products.map(product => <Product handleAddCart={handleAddCart} product={product}></Product>)
              }
          </ul>
         </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;