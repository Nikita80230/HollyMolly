import { styled } from "styled-components";
import backgroundSubscribe1x from "src/assets/images/subscribe/background-subscribe1x.webp";
import backgroundSubscribe2x from "src/assets/images/subscribe/backgroundSubscribe2x.webp";
import backgroundSubscribe3x from "src/assets/images/subscribe/background-subscribe3x.jpg";
import subscribeMobile1x from "src/assets/images/subscribe/subscribeMobile1x.jpg";
import subscribeMobile2x from "src/assets/images/subscribe/subscribeMobile2x.jpg";

export const SubscribeSection = styled.section`
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  /* height: 470px; */

  @media (max-width: 564px) {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .containerSubscribe {
    position: absolute;
    top: 216px;
    left: 51px;

    @media (max-width: 564px) {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 55px;
    line-height: 1.2;
    background: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 78px;

    @media (max-width: 564px) {
      font-size: 20px;
      height: 33px;
    }
  }

  .description {
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    @media (max-width: 564px) {
      margin-bottom: 8px;
      font-size: 12px;
      line-height: 1.25;
      text-align: center;
    }
  }

  .subscribeEmailForm {
    display: flex;
    gap: 18px;

    @media (max-width: 564px) {
      flex-direction: column;
      gap: 24px;
      width:100%;
     
    }
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
    line-height: 1.25;

    @media (max-width: 564px) {
      width:100%;
      height: 44px;
      font-size: 16px;
    }
  }

  .subscribeInput:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
  }
  .subscribeInput:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};
    width: 389px;
    height: 40px;

    @media (max-width: 564px) {
      width:100%;
      height: 44px;
    }
  }
  .subscribeInput::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    @media (max-width: 564px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  .subscribeInputError {
    padding: 8px 15px;
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

    @media (max-width: 564px) {
      font-size: 16px;
      line-height: 1.25;
       width:100%;
      height: 44px;
    }
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

    @media (max-width: 564px) {
      font-size: 16px;
      line-height: 1.25;
       width:100%;
      height: 44px;
    }
  }

  .styledLabel {
    position: relative;
  }

  .errorMessage {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;

    @media (max-width: 564px) {
      font-size: 13px;
      line-height: 1.23077;
    }
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

    @media (max-width: 564px) {
      font-size: 13px;
      line-height: 1.23077;
    }
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

    @media (max-width: 564px) {
      width: 100%;
      height: 52px;
      font-size: 22px;
      line-height: 1.22727;
    }
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
    cursor: not-allowed;

    @media (max-width: 564px) {
      width: 100%;
      height: 52px;
      font-size: 22px;
      line-height: 1.22727;
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

export const WrapperSubscribe = styled.div`
  width: 100%;
  height: 470px;
  background-color: ${({ theme }) => theme.colors.heroBgColor};
  background: url(${backgroundSubscribe2x});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${backgroundSubscribe3x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
  }

  @media (max-width: 564px) {
    height: 200px;
    background: url(${subscribeMobile1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${subscribeMobile2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }
  }
`;
