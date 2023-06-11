import styled from 'styled-components';

export const SectionWrapper = styled.section`
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;

  max-width: 100%;
  height: 85vh;
  width: auto;

  mix-blend-mode: normal;
  filter: drop-shadow(0px 18px 80px rgba(265, 265, 265, 1));
  backdrop-filter: blur(8.5px);

  box-shadow: -1px -1px 15px #4b1414, 15px 15px 35px #fff;
`; */}
  display: grid;
  max-width: 360px;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 425px) {
    max-width: 425px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 25px;
    padding-right: 25px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;
