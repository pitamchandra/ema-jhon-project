import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveCart = (id) =>{
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }
    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(review => <ReviewCart
                        key={review.id}
                        review= {review}
                        handleRemoveCart = {handleRemoveCart}
                    ></ReviewCart>)
                }
            </div>
            <div className='shopping-cart'>
                <Cart
                    cart = {cart}
                    handleClearCart = {handleClearCart}
                >
                    <button className='checkout'>
                        <Link to = '/checkout'>Checkout</Link>
                        <span><ArrowRightIcon></ArrowRightIcon></span>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;