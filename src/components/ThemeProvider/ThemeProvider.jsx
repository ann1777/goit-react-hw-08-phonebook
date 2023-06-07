import React from 'react';
import { Container, MainBlock } from './ThemeProvider.styled';
import PropTypes from 'prop-types';

export function ThemeProvider ({ children }) {
  return (
    <Container>
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};