import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin-bottom: 40px;

  .wrapperFooter {
    display: flex;
    justify-content: space-between;
  }

  .text {
    margin-top: auto;
    margin-left: auto;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  @media (max-width: 1239px) {
    .wrapperFooter {
      padding-top: 40px;
      flex-direction: column;
      gap: 24px;
    }

    .text {
      margin-top: 0;
      margin-left: auto;
    }
  }

  @media (max-width: 564px) {
    margin-bottom: 20px;

    .wrapperFooter {
      padding-top: 8px;
      border-top: 0.5px solid ${({ theme }) => theme.colors.primaryTxtColor};
      justify-content: flex-start;
      flex-direction: column;
      gap: 24px;
    }

    .text {
      margin: 0;
    }
  }
`;
