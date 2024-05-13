import { styled } from "styled-components";

export const SubscribeWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }

  .title {
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 22px;
    color: ${({ theme }) => theme.colors.footerTitleMobileColor};
    text-align: center;

    @media only screen and (min-width: 768px) {
      margin-bottom: 22px;
      font-weight: 700;
      font-size: 36px;
      line-height: 1.38535;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .description {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.footerSubtitle};
    text-align: center;

    @media only screen and (min-width: 768px) {
      margin-bottom: 41px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .subscribeEmailForm {
    position: relative;
    display: flex;
    gap: 18px;
    width: 100%;

    @media only screen and (min-width: 768px) {
      gap: 8px;
      width: 692px;
    }
  }

  .subscribeInput {
    padding: 12px 11px;
    outline: transparent;
    outline-offset: -1px;
    border: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorInput};
    width: 60%;
    height: 42px;
    transition: border-bottom ${({ theme }) => theme.animations.transition};
    font-size: 17px;
    /* color:${({ theme }) => theme.colors.placeholderColor}; */

    @media only screen and (min-width: 375px) {
      width: 255px;
    }

    @media only screen and (min-width: 768px) {
      width: 528px;
      height: 56px;
      font-size: 20px;
    }
  }

  .subscribeInput:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }
  .subscribeInput:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputFocus};
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    @media only screen and (min-width: 768px) {
      width: 528px;
    }
  }
  .subscribeInput::placeholder {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.placeholderColor};
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .subscribeInputError {
    padding: 12px 11px;
    border: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.colorError};
    outline: transparent;
    outline-offset: -1px;
    width: 60%;
    height: 42px;
    transition: border-bottom ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 375px) {
      width: 255px;
    }

    @media only screen and (min-width: 768px) {
      width: 528px;
      height: 56px;
    }
  }

  .subscribeInputSuccess {
    padding: 12px 11px;
    border: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.colorSuccess};
    outline: transparent;
    outline-offset: -1px;

    width: 60%;
    height: 42px;
    transition: border-bottom ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 375px) {
      width: 255px;
    }

    @media only screen and (min-width: 768px) {
      width: 528px;
      height: 56px;
    }
  }

  .errorMessage {
    position: absolute;
    bottom: -28px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 10px;

    @media only screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .successMessage {
    position: absolute;
    bottom: -28px;
    left: 0;
    color: ${({ theme }) => theme.colors.colorSuccess};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 10px;

    @media only screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .subscribeButton {
    border: transparent;
    border-radius: 12px;
    padding: 14px 7px;
    width: 79px;
    height: 42px;

    background-color: ${({ theme }) => theme.colors.buttonBgColor};
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightColorButton};
    transition: background-color ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 768px) {
      padding: 16px 24px;
      width: 157px;
      height: 56px;
      font-weight: 600;
      font-size: 20px;
    }
  }
  .subscribeButton:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  .subscribeButton:focus {
    background-color: ${({ theme }) => theme.colors.focusButton};
  }

  .subscribeButtonDisabled {
    border: transparent;
    border-radius: 12px;
    padding: 14px 7px;
    width: 79px;
    height: 42px;

    background-color: ${({ theme }) => theme.colors.disabledButtonBg};
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightColorButton};
    transition: background-color ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 768px) {
      padding: 16px 24px;
      width: 157px;
      height: 56px;
      font-weight: 600;
      font-size: 20px;
    }
  }
  .subscribeButtonDisabled:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  .subscribeButtonDisabled:focus {
    background-color: ${({ theme }) => theme.colors.focusButton};
  }
`;
