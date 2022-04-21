import React, { useEffect, useState } from 'react';
import './Products.css'
import Shop from '../Shop/Shop'

const Products = () => {
    const [products,setporduct]=useState([]);
    const [cart,setcart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setporduct(data))
    },[])

    const handleAddToCart=(products)=>{
        console.log(products);
        const newCart=[...cart,products];
        setcart(newCart);
        
    }
    return (
        <div className='products'>
            <div className="product-container">
            {
                products.map(product=><Shop
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
                ></Shop>)
            }
            
            </div>
            <div className="cart-container">
            <h4 className='order-summary'>Order summary</h4>
            <p>sellected itam : {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;