import { styled } from "styled-components";
import backgroundSubscribe1x from "src/assets/images/subscribe/subscribe-desktop1x.webp";
import backgroundSubscribe2x from "src/assets/images/subscribe/subscribe-dekstop2x.webp";

export const SubscribeWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1440px) {
    padding: 235px 104px 33px 625px;
    width: 100%;
    height: 470px;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
    background: url(${backgroundSubscribe1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${backgroundSubscribe2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1440px) {
      font-weight: 400;
      font-size: 55px;
      background: linear-gradient(90deg, #100503 0%, #e85a50 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      height: 100px;
    }
  }

  .description {
    @media only screen and (min-width: 768px) {
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 10px;
      width: 592px;
      height: 72px;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }
  }

  .subscribeEmailForm {
    position: relative;
    display: flex;
    gap: 18px;
    /* width: 100%; */

    @media only screen and (min-width: 768px) {
      gap: 8px;
    }

    @media only screen and (min-width: 1440px) {
      gap: 7px;
    }
  }

  .subscribeInput {
    /* padding: 12px 11px; */
    outline: transparent;
    outline-offset: -1px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    transition: border-color ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 375px) {
      /* width: 255px; */
    }
    @media only screen and (min-width: 768px) {
      padding: 4px 12px;
      font-size: 14px;
    }
    @media only screen and (min-width: 1440px) {
      padding: 8px 15px;
      width: 400px;
      height: 40px;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 20px;
      background: ${({ theme }) => theme.colors.primaryBgColor};
    }
  }

  .subscribeInput:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
  }
  .subscribeInput:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};

    @media only screen and (min-width: 768px) {
      width: 394px;
    }
    @media only screen and (min-width: 1440px) {
      width: 400px;
    }
  }
  .subscribeInput::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media only screen and (min-width: 1440px) {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }
  }

  .subscribeInputError {
    padding: 12px 11px;
    border: transparent;
    border: 2px solid ${({ theme }) => theme.colors.colorError};
    outline: transparent;
    outline-offset: -1px;
    width: 60%;
    height: 42px;
    transition: border ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 375px) {
      width: 255px;
    }
    @media only screen and (min-width: 768px) {
      width: 400px;
      height: 40px;
    }

    @media only screen and (min-width: 1440px) {
      border-radius: 5px;
      width: 400px;
      height: 40px;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 20px;
      background: ${({ theme }) => theme.colors.primaryBgColor};
    }
  }

  .subscribeInputSuccess {
    padding: 12px 11px;
    border: transparent;
    border: 2px solid ${({ theme }) => theme.colors.colorSuccess};
    outline: transparent;
    outline-offset: -1px;

    width: 60%;
    height: 42px;
    transition: border ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 375px) {
      width: 255px;
    }

    @media only screen and (min-width: 768px) {
      width: 394px;
      height: 40px;
    }

    @media only screen and (min-width: 1440px) {
      border-radius: 5px;
      width: 400px;
      height: 40px;
      font-family: ${({ theme }) => theme.fonts.familyDidact};
      font-weight: 400;
      font-size: 20px;
      background: ${({ theme }) => theme.colors.primaryBgColor};
    }
  }

  .errorMessage {
    position: absolute;
    bottom: -28px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-size: 10px;

    @media only screen and (min-width: 768px) {
      bottom: -18px;
      font-weight: 500;
      font-size: 12px;
    }

    @media only screen and (min-width: 1440px) {
      bottom: -18px;
      font-weight: 900;
      font-size: 16px;
    }
  }

  .successMessage {
    position: absolute;
    bottom: -28px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorSuccess};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-size: 10px;

    @media only screen and (min-width: 768px) {
      bottom: -18px;
      font-weight: 500;
      font-size: 12px;
    }

    @media only screen and (min-width: 1440px) {
      bottom: -18px;
      font-weight: 900;
      font-size: 16px;
    }
  }

  .subscribeButton {
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1440px) {
      border-radius: 5px;
      border: transparent;
      padding: 5px 8px;
      width: 154px;
      height: 40px;
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      font-weight: 400;
      font-size: 24px;
      line-height: 1.20833;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteTxtColor};
      background-color: ${({ theme }) => theme.colors.activeBgColor};
      transition: background-color ${({ theme }) => theme.animations.transition};
    }
  }

  .subscribeButtonDisabled {
    transition: background-color ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1440px) {
      border-radius: 5px;
      border: transparent;
      padding: 5px 8px;
      width: 154px;
      height: 40px;
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      font-weight: 400;
      font-size: 24px;
      line-height: 1.20833;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteTxtColor};
      background-color: ${({ theme }) => theme.colors.buttonBgDisabled};
      transition: background-color ${({ theme }) => theme.animations.transition},
      box-shadow ${({ theme }) => theme.animations.transition};
    }
  }
  .subscribeButtonDisabled:hover {
    background-color: ${({ theme }) => theme.colors.hoverBgButton};
    box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
  }
  .subscribeButtonDisabled:focus {
    background-color: ${({ theme }) => theme.colors.activeBgColor};
  }
`;
