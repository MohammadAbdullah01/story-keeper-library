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

                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg> */}
                    <FontAwesomeIcon icon={faShoppingBasket} />

                </span></button>
            </div>
        </div>
    );
};

export default Books;