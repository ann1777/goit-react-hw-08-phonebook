import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';


export const ValidationMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NavLinkStyled = styled(NavLink)`
  &:hover,
  &:focus {
    color: #ec8e11;
  }
`;