import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: #312eec;
  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const InputField = styled.input`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: #312eec;
  background-color: #f7eff4;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;

  font-style: italic;

  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff;
  font-size: 14px;
  color: #706e6f;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;

export const ErrorMessage = styled.div`
  max-width: 500px;
  color: #312eec;
  text-shadow: 0 0.5px 0.5px #fff;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  max-width: 100%;

  border: none;
  outline: none;
  border-radius: 8px;

  box-shadow: 0.3125rem -0.3125rem 1.25rem #fff, 0.3125rem 0.3125rem 1.25rem #babecc;
  transition: all 0.2s ease-in-out;

  background-color: #97f1ff;
  color: #8ba793;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #97f1ff;
    color: #312eec;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    svg {
      fill: #312eec;
      stroke: #312eec;
    }
    :active {
      color: #312eec;
      box-shadow: inset 1px 1px 2px #8ba793, inset -1px -1px 2px #fff;
      svg {
        fill: #312eec;
        stroke: #312eec;
      }
    }
  }
`;
