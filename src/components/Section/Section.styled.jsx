import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;

  max-width: 100%;
  width: 600px;

  mix-blend-mode: normal;
  filter: drop-shadow(0px 18px 80px rgba(265, 265, 265, 1));
  backdrop-filter: blur(8.5px);

  box-shadow: -1px -1px 15px #4b1414, 15px 15px 35px #fff;
`;
