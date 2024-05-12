import { styled } from "styled-components";

export const LowerBlock = styled.div`
  margin-bottom: 53px;
  display: flex;
  gap:24px;
  width: 100%;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.backgroundLowerBlockMobile};

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 19px 64px 15px 64px;
     justify-content: space-between;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .lower-links {
    display: flex;
   gap:24px;
     @media only screen and (min-width: 768px) {
 gap: 45px;

     }
  }
 
`;


