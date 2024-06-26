import { styled } from "styled-components";

export const FooterContainer = styled.div`


@media only screen and (min-width: 1440px) {

 padding: 40px 51px;
 display:flex;
 gap:15px;
 height: 205px;
}

 .text {

   @media only screen and (min-width: 1440px) {
      margin-top:auto;
     font-family: "Didact Gothic", sans-serif;
font-weight: 400;
font-size: 16px;
color: #100503;
    }
 }
`


export const LowerBlock = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.backgroundLowerBlockMobile};

  @media only screen and (min-width: 375px) {
    gap: 20px;
  }

   @media only screen and (min-width: 768px) {
    padding: 16px 50px;
    justify-content: space-between;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
   }

  @media only screen and (min-width: 1440px) {
    padding: 19px 64px 15px 64px;
   height: 50px;
    
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;

    @media only screen and (min-width: 375px) {
      font-size: 11px;
    }

     @media only screen and (min-width: 768px) {
      font-size: 10px;
     }

    @media only screen and (min-width: 1440px) {
      margin-top:auto;
     font-family: "Didact Gothic", sans-serif;
font-weight: 400;
font-size: 16px;
color: #100503;
    }
  }

  .lower-links {
    display: flex;
    gap: 10px;

    @media only screen and (min-width: 375px) {
      gap: 20px;
    }
    @media only screen and (min-width: 768px) {
      gap: 45px;
    }
  }
`;
