import { styled } from "styled-components";

export const FooterContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    padding: 40px 51px;
    display: flex;
    gap: 15px;
    height: 205px;
  }

  .text {
    @media only screen and (min-width: 1440px) {
      margin-top: auto;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;

