import React from 'react';
import { FooterItems } from './Footer.styled';

const Footer = () => {
  return (
    <FooterItems>
      <p component={'footer'} sx={{ position: 'fixed', bottom: 0, left: 0, height: '44px', width: '100%' }}>
        Created by
        <a href="https://github.com/ann1777"> &copy; Angela Potapchuk </a>{' '}
        {new Date().getFullYear()}
      </p>
    </FooterItems>
  );
};

export default Footer;