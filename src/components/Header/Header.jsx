import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import Active from '../Active/Active';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    
    const handleLogout = () =>{
        logOut()
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <Active to="/">shop</Active>
                <Active to="/orders">orders</Active>
                <Active to="/inventory">inventory</Active>
                {
                    user ? <Link to="/login" onClick={handleLogout}>Sign Out</Link> : <>
                        <Active to="/login">login</Active>
                        <Active to="/register">Sign Up</Active>
                    </>
                }
                
                <span className='user'>
                    {user && <span>{user.email}</span>}
                </span>
            </div>
        </nav>
    );
};

export default Header;