import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(()=>{
        // console.log("product", products);
        const storedCart = getShoppingCart()
        let savedCart = []
        // step 1: get id
        for(const id in storedCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step: 3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
           
        }
        // step 5: set the saved cart
        setCart(savedCart)

    }, [products])
    
    const addToCardHandler = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id);
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCardHandler = {addToCardHandler}
                    ></Product>)    
                }
            </div>
            <div className='shopping-cart'>
                <Cart cart = {cart} handleClearCart={handleClearCart}>
                <button className='checkout'>
                        <Link to = '/orders'>Review Cart</Link>
                        <span><ArrowRightIcon></ArrowRightIcon></span>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;