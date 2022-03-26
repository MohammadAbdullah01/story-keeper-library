import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const Cart = ({ cartItems, setCart }) => {
    const [luckyItem, setLuclyItem] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const itemNumber = Math.floor(Math.random() * cartItems.length);
    const randomItemGenerator = (hi) => {
        if (cartItems.length == 0) {
            return;
        }
        const item = cartItems[itemNumber]
        setLuclyItem(item)
        openModal()
    }
    const removeCartItems = () => {
        setCart([])
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
            <div>
                <button className='cart-btn' onClick={randomItemGenerator}><p>
                    CHOOSE 1 FOR ME</p></button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='lucky'>
                        {luckyItem.name ? title : ""}
                        {luckyItem.img ? image : ""}
                        <h2> {luckyItem.name}</h2>
                    </div>
                </Modal>
            </div>
            <div>
                <button onClick={removeCartItems} className='cart-btn'><p>CHOOSE AGAIN</p></button>
            </div>
        </div>
    );
};

export default Cart;