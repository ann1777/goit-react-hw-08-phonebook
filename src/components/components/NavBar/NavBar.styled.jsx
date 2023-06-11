import styled from '@emotion/styled/macro';

export const AppНeader = styled.header`
  background-color: var(--color);
  box-shadow: var(--main-shadow);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
