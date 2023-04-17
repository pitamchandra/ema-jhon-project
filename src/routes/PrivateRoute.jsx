import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user, loading} = useContext(AuthContext)

    if(user){
        return children;
    }
    if(loading){
        return <p>loading....</p>
    }
    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivateRoute;