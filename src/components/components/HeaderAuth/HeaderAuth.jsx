import React from 'react';
import { NavLink, NavWrap, WelcomeMsg } from './HeaderAuth.styled';
import { useAuth } from 'redux/auth/useAuth';

const HeaderAuth = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
    {!isLoggedIn &&
    <WelcomeMsg>Welcome to the PhoneApp! Please register or Login!</WelcomeMsg>}
    <NavWrap>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </NavWrap>
    </>   
  );
};

export default HeaderAuth;