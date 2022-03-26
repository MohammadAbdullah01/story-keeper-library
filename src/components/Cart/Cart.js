import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cartItems, setCart }) => {
    const [luckyItem, setLuclyItem] = useState({});
    const itemNumber = Math.floor(Math.random() * cartItems.length);
    const randomItemGenerator = () => {
        if (cartItems.length == 0) {
            return;
        }
        const item = cartItems[itemNumber]
        setLuclyItem(item)
        console.log(item)
    }
    const removeCartItems = () => {
        setCart([cartItems])
    }
    const title = <h3 style={{ textAlign: "center" }}>Your lucky Book</h3>
    const image = <img style={{ width: "150px" }} src={luckyItem.img} alt="" />;
    return (
        <div className='cart'>
            <p className='header-title'>Selected Items</p>
            {cartItems.map(cartItem => <CartItem
                key={cartItem.id}
                cartItem={cartItem}
            ></CartItem>)}
            <div className='lucky'>
                {luckyItem.name ? title : ""}
                {luckyItem.img ? image : ""}
                <h2> {luckyItem.name}</h2>
            </div>
            <div>
                <button onClick={randomItemGenerator} className='cart-btn'><p>CHOOSE 1 FOR ME</p></button>
            </div>
            <div>
                <button onClick={removeCartItems} className='cart-btn'><p>CHOOSE AGAIN</p></button>
            </div>
        </div>
    );
};

export default Cart;