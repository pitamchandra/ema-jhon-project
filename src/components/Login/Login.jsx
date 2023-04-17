import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            setError('')
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message);
        })


    }
    return (
        <div className='form-container'>
            <h3 className="form-title">Please Login</h3>
            <form onSubmit={handleLogin} action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className='input-field' type="email" name="email" id="email" placeholder='type your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input className='input-field' type={showPass ? 'text' : "password"} name="password" id="password" placeholder='type your password' required />
                </div>
                <div className='show-password'>
                    <input onClick={()=> setShowPass(!showPass)} type="checkbox" />
                    <small>  show password</small>
                </div>
                <input type="submit" className="submit-btn" value='Login' />
                <p>
                    <small>New to Ema-Jhon ? <Link to='/register'>Sign Up</Link></small>
                </p>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default Login;