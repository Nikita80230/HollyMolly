import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin-bottom: 40px;

  .wrapperFooter {
    display: flex;
    justify-content: space-between;

    padding: 0 31px;
  }

  .text {
    margin-top: auto;
    margin-left: auto;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
