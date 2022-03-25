import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='title-container'>
                <h1>The <span className='title'>Story Keeper</span></h1>
                <p>get your all favourite books here!!</p>
            </div>
        </div>
    );
};

export default Header;