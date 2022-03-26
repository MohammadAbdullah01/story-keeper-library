import React from 'react';
import { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    })
    const addToCart = (book) => {
        const exist = cart.find(cartItem => cartItem.id === book.id)
        if (exist) {
            alert("already added this book")
            return;
        }
        if (cart.length == 4) {
            alert("can't add more than 4 books")
            return;
        }
        const newCartItem = book;
        const newCart = [...cart, newCartItem]
        setCart(newCart)
    }
    // console.log(cart)
    return (
        <div className='shop'>
            <div className="books-container">
                {books.map(book => <Books
                    book={book}
                    key={book.id}
                    addToCart={addToCart}
                ></Books>)}
            </div>
            <div className="cart">
                <Cart
                    cartItems={cart}
                    setCart={setCart}
                ></Cart>
            </div>
        </div >
    );
};

export default Shop;


