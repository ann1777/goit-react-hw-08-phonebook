import React from 'react';
import { NavLink, NavWrap, WelcomeMsg } from './HeaderAuth.styled';

const HeaderAuth = () => {
  return (
    <>
    <WelcomeMsg>Welcome to the PhoneApp! Please register or Login!</WelcomeMsg>
    <NavWrap>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </NavWrap>
    </>   
  );
};

export default HeaderAuth;