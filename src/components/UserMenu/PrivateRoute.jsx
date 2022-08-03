import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLogged = useSelector(({ auth: { isLoggedIn } }) => isLoggedIn);

  return (
    <Routes>
      <Route
        {...routeProps}
        element={isLogged ? children : <Navigate to={redirectTo} />}
      />
    </Routes>
  );
}

export default PrivateRoute;
