import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin-bottom: 40px;

   @media (max-width: 375px) {
     margin-bottom: 20px; 
    }

  .wrapperFooter {
    display: flex;
    justify-content: space-between;

   @media (max-width: 375px) {
    justify-content: flex-start;
    flex-direction:column;
    gap:24px;
   }
  }

  .text {
    margin-top: auto;
    margin-left: auto;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media (max-width: 375px) {
margin:0;
     
    }
  }
`;
