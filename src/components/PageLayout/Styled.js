import { styled } from "styled-components";

export const StyledPageLayout = styled.div`
  .main {
    margin-top: 115px;
    
  }

   @media only screen and (max-width: 768px) {
    .main {
      margin-top: 84px;
     
    }

  @media (max-width: 564px) {
    .main {
      margin-top: 70px;
    }
  }

 
`;
