import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  @media only screen and (min-width: 1440px) {
    margin-bottom:40px;
  }

  .wrapperFooter {
    @media only screen and (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .text {
    @media only screen and (min-width: 1440px) {
      margin-top: auto;
      margin-left:auto;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
