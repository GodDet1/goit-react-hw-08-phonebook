import Register from 'components/VIews/Register/Register';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import authOperations from 'Redux/Auth/auth-operations';
import styled from './styled.module.scss';

function NavBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <div className={styled.container}>
      <div className={`${styled.container__nav}  container`}>
        <nav>
          <NavLink to="/" className={styled.nav__link}>
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink to="/phonebook" className={styled.nav__link}>
              Phonebook
            </NavLink>
          )}
        </nav>

        {isLoggedIn ? (
          <div>
            <p>Wellcome {userName}!!</p>
            <button type="button" onClick={handleLogout}>
              Exit
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className={styled.nav__link}>
              Login
            </NavLink>
            <NavLink to="/register" className={styled.nav__link}>
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
