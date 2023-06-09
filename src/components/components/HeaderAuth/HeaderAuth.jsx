import React from 'react';
import { NavLink } from './HeaderAuth.styled';

const HeaderAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default HeaderAuth;