import { styled } from "styled-components";

export const WrapperConfirm = styled.section`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-bottom:10px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.16667;
    background: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 76px;
  }

  .description {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .link {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  @media (max-width: 564px) {
    padding-top: 24px;

    .title {
      margin-bottom:24px;
      font-size: 32px;
      line-height: 1.1875;
      height: 86px;
      text-align: center;
    }

    .description {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
