import React from 'react';
import './ReviewCart.css'
import { BeakerIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ReviewCart = (props) => {
    const {img, name, price, shipping, id} = props.review;
    const {handleRemoveCart} = props;
    return (
        <div className='review'>
           <div className='review-info'>
                <img src={img} alt="" />
                <div>
                    <h6>{name}</h6>
                    <p>Price : ${price}</p>
                    <p>Shipping Charge : ${shipping}</p>
                </div>
           </div>
            <div className="review-remove">
                <div className='remove-icon'>
                    <div onClick={() => handleRemoveCart(id)}><TrashIcon className="delete" /></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;