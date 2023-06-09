import React from 'react';
import { FooterItems } from './Footer.styled';

const Footer = () => {
  return (
    <FooterItems>
      <p>
        Created by
        <a href="https://github.com/ann1777"> &copy; Angela Potapchuk </a>{' '}
        {new Date().getFullYear()}
      </p>
    </FooterItems>
  );
};

export default Footer;