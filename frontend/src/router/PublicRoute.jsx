import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isLogged = !!user;

  return !isLogged ? children : <Navigate to="/" />;
};

export default PublicRoute;
