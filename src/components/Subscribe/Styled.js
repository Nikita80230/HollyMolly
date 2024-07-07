import { styled } from "styled-components";
import backgroundSubscribe1x from "src/assets/images/subscribe/background-subscribe1x.webp";
import backgroundSubscribe2x from "src/assets/images/subscribe/backgroundSubscribe2x.webp";

export const SubscribeWrapper = styled.section`
  margin-bottom: 40px;
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

  .containerSubscribe {
    padding-top: 223px;
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};

    font-weight: 400;
    font-size: 55px;
    background: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 78px;
  }

  .description {
    margin-bottom: 10px;
    width: 592px;
    height: 72px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }

  .subscribeEmailForm {
    position: relative;
    display: flex;
    gap: 18px;
  }

  .subscribeInput {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    transition: border-color ${({ theme }) => theme.animations.transition};
    background: ${({ theme }) => theme.colors.primaryBgColor};

    width: 389px;
    height: 40px;

    outline: transparent;
    outline-offset: -1px;

    border-radius: 5px;

    padding: 8px 15px;

    font-weight: 400;
    font-size: 20px;
  }

  .subscribeInput:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
  }
  .subscribeInput:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};
    width: 389px;
    height: 40px;
  }
  .subscribeInput::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }

  .subscribeInputError {
    padding: 8px 15px;
    /* border: transparent; */
    outline: transparent;
    outline-offset: -1px;
    width: 389px;
    height: 40px;

    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;

    border: 1px solid ${({ theme }) => theme.colors.colorError};
    transition: border ${({ theme }) => theme.animations.transition};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .subscribeInputSuccess {
    padding: 8px 15px;
    border: transparent;
    border: 1px solid ${({ theme }) => theme.colors.colorSuccess};
    outline: transparent;
    outline-offset: -1px;

    border-radius: 5px;
    width: 389px;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
    transition: border ${({ theme }) => theme.animations.transition};
  }

  .errorMessage {
    position: absolute;
    bottom: -18px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .successMessage {
    position: absolute;
    bottom: -18px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorSuccess};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .subscribeButton {
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
    background-color: ${({ theme }) => theme.colors.accentColor};
    
  }

  .subscribeButtonDisabled {
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
  .subscribeButtonDisabled:hover {
    background-color: ${({ theme }) => theme.colors.hoverBgButton};
    box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
  }
  .subscribeButtonDisabled:focus {
    background-color: ${({ theme }) => theme.colors.activeBgColor};
  }
`;
