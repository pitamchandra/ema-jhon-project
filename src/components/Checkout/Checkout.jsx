import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()

    const backBtn = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>check out page here</h3>
            <button onClick={backBtn}>back</button>
        </div>
    );
};

export default Checkout;