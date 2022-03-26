import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cartItems, setCart }) => {
    // console.log(cartItems)
    const itemNumber = Math.floor(Math.random() * cartItems.length);
    const randomItemGenerator = () => {
        if (cartItems.length == 0) {
            return;
        }
        const luckyItem = cartItems[itemNumber]
        const { name, img } = luckyItem;
        console.log(name)
        const luckyStyle = {
            display: 'block'
        }
    }
    // console.log(randomItem)
    const removeCartItems = () => {
        setCart([])
    }
    const luckyStyle = {
        display: 'none'
    }
    return (
        <div className='cart'>
            <p className='header-title'>Selected Items</p>
            <div style={luckyStyle}>hi mama</div>
            {cartItems.map(cartItem => <CartItem
                key={cartItem.id}
                cartItem={cartItem}
            ></CartItem>)}
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