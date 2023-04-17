import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const {createLogin} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if(password.length < 6){
            setError('password must be at least 6 charter')
            return;
        }
        if(password !== confirm){
            setError('password not matched!!')
            return;
        }
        setError('')
        createLogin(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }
    return (
        <div className='form-container'>
            <h3 className="form-title">Please Register</h3>
            <form onSubmit={handleRegister} action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className='input-field' type="email" name="email" id="email" placeholder='type your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input className='input-field' type="password" name="password" id="password" placeholder='type your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input className='input-field' type="password" name="confirm" id="confirm" placeholder='confirm your password' required />
                </div>
                <input type="submit" className="submit-btn" value='Register' />
                <p>
                    <small>Already have an Account? <Link to='/login'>Sign In</Link></small>
                </p>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default Signup;