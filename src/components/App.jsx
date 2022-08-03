import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'Redux/Auth/auth-operations';
import NavBar from './NavBar/NavBar';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import Home from './VIews/Home/Home';

const Login = lazy(() => import('./VIews/Login/Login'));
const Register = lazy(() => import('./VIews/Register/Register'));
const Phonebook = lazy(() => import('./VIews/Phonebook/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(({ auth: { isRefreshing } }) => isRefreshing);

  console.log(isFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetching && <NavBar />}

      <Suspense fallback={<div>Loading..</div>}>
        <PublicRoute path="/">
          <Home />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/phonebook">
          <Login />
        </PublicRoute>

        <PublicRoute path="/register" restricted redirectTo="/phonebook">
          <Register />
        </PublicRoute>

        <PrivateRoute path="/phonebook" redirectTo="/login">
          <Phonebook />
        </PrivateRoute>
      </Suspense>
    </>
  );
};

export default App;
