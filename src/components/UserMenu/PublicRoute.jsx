import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children, restricted = false, redirectTo }) {
  const isLogged = useSelector(({ auth: { isLoggedIn } }) => isLoggedIn);

  const isRestricted = restricted && isLogged;

  return isRestricted ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute;
