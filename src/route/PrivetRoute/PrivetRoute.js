import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
   if(loading) {
    return <h1 className='flex items-center justify-center h-[100vh]'>Loading....</h1>
   };

   if(user) {
    return children
   };
   <Navigate to='/' state={{from: location}} replace />
};

export default PrivetRoute;