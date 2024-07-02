import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    border-radius: 14px;
    padding: 16px 12px 24px 12px;
    width: 525px;
    height: 140px;
  }

  @media only screen and (min-width: 1440px) {
    border-radius: 10px;
    padding: 42px 20px 25px 20px;
    width: 791px;
    height: 210px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    backdrop-filter: blur(60px);
  }

  .title {
    margin-bottom: 8px;

    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 20px;
      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      font-weight: 400;
      font-size: 45px;
      line-height: 1.2;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteTxtColor};
    }
  }

  .description {
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 1440px) {
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 24px;
      line-height: 1.20833;
      text-align: center;
    }
  }

  .text {
    @media only screen and (min-width: 1440px) {
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteTxtColor};
    }
  }

  .buttonModal {
    position: absolute;
    top: 14px;
    right: 20px;
    background-color: transparent;
    border: transparent;

    @media only screen and (min-width: 768px) {
      top: 22px;
      right: 22px;
    }

    @media only screen and (min-width: 1440px) {
      top: 14px;
      right: 20px;
    }
  }
`;
