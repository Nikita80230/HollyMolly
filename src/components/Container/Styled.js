import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  

  @media (max-width: 1239px) {
    max-width: 1239px;
     padding: 0 24px;
  }

 @media (min-width: 320px) and (max-width: 564px) {
    max-width: 564px;
    padding: 0 20px;
  }

   
`;
