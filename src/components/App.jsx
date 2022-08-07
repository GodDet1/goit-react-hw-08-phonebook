import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'Redux/Auth/auth-operations';
import NavBar from './NavBar/NavBar';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import Home from './VIews/Home/Home';
import { Bars } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import('./VIews/Login/Login'));
const Register = lazy(() => import('./VIews/Register/Register'));
const Phonebook = lazy(() => import('./VIews/Phonebook/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(({ auth: { isRefreshing } }) => isRefreshing);
  const error = useSelector(({ auth: { error } }) => error);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  error && Notify.failure(error);

  return (
    <>
      {!isFetching && <NavBar />}
      <Suspense
        fallback={
          <Bars
            color="#acacac"
            wrapperStyle={{
              justifyContent: 'center',
            }}
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/phonebook">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectTo="/phonebook">
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login">
                <Phonebook />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
