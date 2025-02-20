import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const PrivateRoute = ({ children }) => {
  const { isLogged } = useStore();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
