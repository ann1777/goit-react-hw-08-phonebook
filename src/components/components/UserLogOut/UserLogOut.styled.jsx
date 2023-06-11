import styled from '@emotion/styled/macro';

export const LogOutWrap = styled.div`
  display: flex;
  align-items: center;
  & > p {
    display: none;
  }
  @media screen and (min-width: 768px) {
    & > p {
      display: block;
      font-size: 15px;
      font-weight: 400;
      text-transform: capitalize;
      margin-right: 10px;
    }
  }
`;

export const LogOutButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 4px 10px;
  font-size: 10px;
  font-weight: 700;
  background-color: var(--text-color);
  color: var(--base-color);
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: white;
    box-shadow: var(--base-shadow);
  }

  @media screen and (min-width: 768px) {
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 700;
  }
`;
