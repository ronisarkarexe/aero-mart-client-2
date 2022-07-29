import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
   const location = useLocation();
   const { user } = useAuth();
   return user.email ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;