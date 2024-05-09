import { styled } from "styled-components";

export const SubscribeWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    width:100%;

    @media only screen and (min-width: 768px) {
      display: block;
      gap: 0;
      width: 755px;
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
     };

    @media only screen and (min-width: 768px) {
      position: relative;
      width: 755px;
      height: 56px;
      font-size: 20px;
    };
  }
  .subscribeInput:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }
  .subscribeInput:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputFocus};
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }
  .subscribeInput::placeholder {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.placeholderColor};
     @media only screen and (min-width: 768px) {
       font-size: 20px;
     }
  }

  .errorMessage {
    position: absolute;
    top: 20px;
    right: 180px;
    color: red;
    font-size: 14px;
    font-style: italic;
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
      position: absolute;
      top: 0;
      right: 0;
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
      position: absolute;
      top: 0;
      right: 0;
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
}
`;
