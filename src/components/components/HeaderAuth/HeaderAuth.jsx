import React from 'react';
import { NavLink, NavWrap, WelcomeMsg } from './HeaderAuth.styled';
import { useAuth } from 'redux/auth/useAuth';
import { UserBadge } from '../UserBadge/UserBadge';

const HeaderAuth = () => {
  const { isLoggedIn } = useAuth();
  console.log(`User =>>> ${isLoggedIn}`);
  return (
    <>
      {!isLoggedIn ? (
        <>
          <WelcomeMsg>
            Welcome to the PhoneApp! Please register or Login!
          </WelcomeMsg>

          <NavWrap>
            <NavLink to="/register">Register</NavLink>|
            <NavLink to="/login">Login</NavLink>
          </NavWrap>
        </>
      ) : (
        <>
          <WelcomeMsg>
            Welcome to the PhoneApp! Please register or Login!
          </WelcomeMsg>
          <UserBadge />
        </>
      )}
    </>
  );
};

export default HeaderAuth;
