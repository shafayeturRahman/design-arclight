import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isLogged = !!user;
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  if (location.pathname === '/users' && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
