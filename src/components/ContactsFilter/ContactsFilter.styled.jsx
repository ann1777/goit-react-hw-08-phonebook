import { theme } from 'components/theme';
import styled from 'styled-components';

export const Input = styled.input`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  max-width: 100%;
  width: 400px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  color: #312eec;
  background-color: #f7eff4;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;

  font-style: italic;

  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5,
    -0.0313rem -0.0313rem 0rem #ffffff;
  font-size: 14px;
  color: #706e6f;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;

  color: '#fff';
  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5,
    -0.0313rem -0.0313rem 0rem #ffffff;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 20px;
  background-color: ${theme.colors.background};
  color: var(--main-color);
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${theme.colors.background};
    color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.boxShadow};
  }
`;
