import React from 'react';
import './Shop.css';
import { ShoppingCartIcon} from '@heroicons/react/solid'

const Shop = (props) => {
    const {handleAddToCart,product}=props
    const {name,price,img,seller,ratings}=product
    
    return (
        <div className='shop'>
           <img id='shopImages' src={img} alt="" />
            <div className='text'>
            <h4>{name}</h4>
            <h5>price : ${price}</h5>
            <p>manufactures : {seller}</p>
            <p>rating : {ratings} stars</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn'><p>Add to Cart</p> <ShoppingCartIcon className='icon'></ShoppingCartIcon></button>
        </div>
    );
};

export default Shop;