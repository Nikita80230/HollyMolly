import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    max-width: 1280px;
    padding: 0 64px;
  }

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
     padding: 0 24px;
  }

 @media (min-width: 320px) and (max-width: 564px) {
    max-width: 564px;
    padding: 0 20px;
  }

  /* @media (max-width: 425px) {
    max-width: 425px;
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    max-width: 375px;
    padding: 0 20px;
  } */

   
`;
