import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLogged = useSelector(({ auth: { isLoggedIn } }) => isLoggedIn);

  return isLogged ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
