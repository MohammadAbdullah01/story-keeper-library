import React from 'react';
import { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Shop.css'

const Shop = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    })
    return (
        <div className='shop'>
            <div className="books-container">
                {books.map(book => <Books
                    book={book}
                    key={book.id}
                ></Books>)}
            </div>
            <div className="cart">
                <h1>cart</h1>
            </div>
        </div >
    );
};

export default Shop;


