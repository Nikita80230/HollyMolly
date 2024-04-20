import { styled } from "styled-components";

export const SubscribeWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-bottom: 22px;
    font-family: ${({ theme }) => theme.fonts.fontNunito};
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
  .description {
    margin-bottom: 41px;
    font-family: ${({ theme }) => theme.fonts.fontRoboto};
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
export const SubscribeEmailWrapper = styled.div`
position:relative;
  display: flex;
  gap: 36px;

  .subscribeInput {
    
    padding: 12px 11px;
    outline: transparent;
    outline-offset: -1px;
    border: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorInput};
    width: 531px;
    height: 56px;
    transition: border-bottom ${({ theme }) => theme.animations.transition};
  }
  .subscribeInput:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }
  .subscribeInput:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputFocus};
    background-color:${({theme})=>theme.colors.primaryBgColor};
  }

  .errorMessage{
  position: absolute;
  top: 20px;
  right: 180px;
color:red;
font-size: 14px;
font-style: italic;

  }
  .subscribeButton {
    border: transparent;
    border-radius: 12px;
    padding: 16px 24px;
    width: 157px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.buttonBgColor};
    font-family: ${({ theme }) => theme.fonts.fontRoboto};
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.lightColorButton};
    transition: background-color ${({ theme }) => theme.animations.transition};
  }
  .subscribeButton:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
  .subscribeButton:focus {
    background-color: ${({ theme }) => theme.colors.focusButton};
  }
`;
