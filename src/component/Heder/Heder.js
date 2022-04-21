import React from 'react';
import logo from '../../images/Logo.svg'
import './Heder.css'

const Heder = () => {
    return (
        <nav className='heder'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='heder1'>
                <a href="/HOME">HOME</a>
                <a href="/PRODUCT">PRODUCT</a>
                <a href="/ORDER">ORDER</a>
                <a href="/CONTACT">CONTACT</a>
            </div>
        </nav>
    );
};

export default Heder;