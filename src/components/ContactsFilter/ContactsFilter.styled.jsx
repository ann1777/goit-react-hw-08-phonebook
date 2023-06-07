import styled from 'styled-components';

export const Input = styled.input`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  border: 0;
  outline: 0;
  border-radius: 8px;
  color: #2a2a2a;
  text-shadow: 0 0.5px 0.5px 0.5px #fff;

  background-color: #fff;
  box-shadow: inset 1px 1px 3px #b0706f, inset -1px -1px 5px #fff;

  font-size: 14px;
`;

export const FilterWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 300px;

  color: '#fff';
  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;
