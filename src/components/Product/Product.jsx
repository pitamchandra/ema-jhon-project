import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const addToCardHandler = props.addToCardHandler;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} star</p>
            </div>
            <button className='cart-btn' onClick={()=>addToCardHandler(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;