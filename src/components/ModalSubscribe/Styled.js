import { styled } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 10px;
  padding: 42px 20px 25px 20px;
  width: 791px;
  height: 210px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  backdrop-filter: blur(60px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .iconClose {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .title {
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.2;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
  }

  .description {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
  }

  .buttonModal {
    position: absolute;
    top: 14px;
    right: 20px;
    background-color: transparent;
    border: transparent;
  }

  @media (max-width: 1239px) {
    padding: 40px 16px 24px 16px;
    width: 565px;
    height: 172px;

    .iconClose {
      width: 24px;
      height: 24px;
    }

    .title {
      margin-bottom: 10px;
      font-size: 32px;
      line-height: 1.25;
    }

    .description {
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 1.2;
    }

    .text {
      font-size: 14px;
      line-height: 1.28571;
    }

    .buttonModal {
      top: 8px;
      right: 16px;
    }
  }

  @media (max-width: 564px) {
    padding: 36px 10px 20px 10px;
    width: 335px;
    height: 178px;

    .iconClose {
      width: 16px;
      height: 16px;
    }

    .title {
      margin-bottom: 5px;
      font-size: 28px;
      line-height: 1.21429;
    }

    .description {
      margin-bottom: 5px;
      font-size: 15px;
      line-height: 1.46667;
    }

    .text {
      line-height: 1.21429;
    }

    .buttonModal {
      top: 10px;
      right: 10px;
    }
  }
`;
