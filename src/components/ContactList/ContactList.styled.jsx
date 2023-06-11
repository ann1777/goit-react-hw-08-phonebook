import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  width: 100%;
  max-width: 800px;
`;

export const ContactName = styled.p`
   font-size: 15px; 
` 

export const ContactNumber = styled.p`
    font-size: 15px;
`

export const DeleteButton = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: none;
  outline: none;
  border-radius: 8px;

  background-color: #97f1ff;
  color: #8ba793;
  box-shadow: 0.3125rem -0.3125rem 1.25rem #fff, 0.3125rem 0.3125rem 1.25rem #babecc;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    background-color: #97f1ff;

    color: #312eec;
    text-shadow: 1px 1px 1px #fff;

    box-shadow: -2px -2px 2px #fff, 2px 2px 2px #4b1414;

    svg {
      fill: #312eec;
      stroke: #312eec;
    }

    :active {
      color: #2a2a2a;
      text-shadow: 1px 1px 1px #fff;

      box-shadow: inset 1px 1px 1px #4b1414, inset -1px -1px 1px #fff;

      svg {
        fill: #2a2a2a;
        stroke: #2a2a2a;
      }
    }
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* gap: 16px;

  color: #312eec;
  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff;
  font-size: 14px;
`  */}
  font-size: 14px;
  width: 100%;
  padding: 10px 12px;
  background-color: var(--bg-color);
  border: 1px solid var(--bg-color);
  border-radius: 5px;
  animation: scaleIn 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Icon = styled.div`
  color: var(--base-color);
  & > svg {
    color: var(--accent-color);
    width: 20px;
    margin-right: 3px;
  }

  &:not(:last-child) {
    color: var(--text-color);
    margin-bottom: 5px;
  }
  @media screen and (min-width: 725px) {
    & > svg {
      width: 25px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 768px) {
    & > svg {
      width: 35px;
    }
  }
`;