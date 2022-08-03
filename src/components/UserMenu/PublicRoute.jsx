import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

function PublicRoute({
  children,
  restricted = false,
  redirectTo,
  ...publicProps
}) {
  const isLogged = useSelector(({ auth: { isLoggedIn } }) => isLoggedIn);

  const isRestricted = restricted && isLogged;

  return (
    <Routes>
      <Route
        {...publicProps}
        element={isRestricted ? <Navigate to={redirectTo} /> : children}
      />
    </Routes>
  );
}

export default PublicRoute;
