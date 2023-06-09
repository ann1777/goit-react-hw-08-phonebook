import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: '#000';
  text-shadow: ' 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff';
  font-weight: 500;

  &.active {
    font-weight: 700;
    color: '#f7eff4';
    text-shadow: ' 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff';
 }
`;
