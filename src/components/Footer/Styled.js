import { styled } from "styled-components";


export const LowerBlock = styled.div`
  margin-bottom: 53px;
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
    margin-bottom: 0;
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
      font-size: 14px;
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
