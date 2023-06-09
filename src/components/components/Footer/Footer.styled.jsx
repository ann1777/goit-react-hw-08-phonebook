import styled from 'styled-components';

export const FooterItems = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 100%;

  min-height: 44px;
  padding: 0px;

  color: '#000';
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;
  background-color: #ffffff;

  box-shadow: -1px -1px 7px -1px rgba(0, 0, 0, 0.4);

  backdrop-filter: blur(10.5px);

  > p {
    text-align: center;

    a {
      color: '#f7eff4';
      text-shadow: 0 -1px 1px #ffffff, 1px 1px 1px #00000031;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

      &:hover,
      &:focus {
        color: '#befffb';
        text-shadow: 0 -1px 1px #ffffff, 1px 1px 1px #00000031;
      }
    }
  }
`;
