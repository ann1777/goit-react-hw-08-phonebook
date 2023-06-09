import styled from 'styled-components';

export const FooterItems = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 44px;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;

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
