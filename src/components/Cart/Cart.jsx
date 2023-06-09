import React from 'react';
import './Cart.css'
import { BeakerIcon, TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({cart, handleClearCart, children}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        if(product.quantity === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 /100; 
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>selected item : {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
            <button onClick={handleClearCart} className='delete-cart'>
                <span>Clear Cart</span>
                <span className='delete-icon'><TrashIcon /></span>
            </button>
            {children}
        </div>
    );
};

export default Cart;