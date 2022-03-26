import React from 'react';
import './Books.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Books = ({ book, addToCart }) => {
    const { name, price, img } = book;
    return (
        <div className='book'>
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <div className='btn-container'>
                <button onClick={() => addToCart(book)} className="noselect"><span className="text">Add to cart</span><span className="icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />

                </span></button>
            </div>
        </div>
    );
};

export default Books;