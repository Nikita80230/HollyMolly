import { styled } from "styled-components";

export const WrapperFeedback = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 68px 20px 30px 20px;
  width: 426px;
  height: 517px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .buttonClose {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    background-color: transparent;
  }
  .iconClose {
    width: 24px;
    height: 24px;
  }

  .title {
    margin-bottom: 28px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .formFeedback {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .labelName {
    position: relative;
    margin-bottom: 22px;
    width: 100%;
    height: 40px;
  }

  .errorName {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .inputName {
    outline: transparent;
    outline-offset: -1px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    padding: 8px 0px 8px 15px;
    width: 100%;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .inputName::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.placeholderReview};
  }

  .labelRating {
    position: relative;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 29px;

    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .errorRating {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .inputRange {
    display: none;
  }

  .labelReview {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    height: 182px;
  }

  .errorReview {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .textarea {
    outline: transparent;
    outline-offset: -1px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    padding: 10px 15px;
    width: 100%;
    height: 182px;
    background: ${({ theme }) => theme.colors.primaryBgColor};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
  }

  .textarea::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.placeholderReview};
  }

  .buttonReview {
    border-radius: 5px;
    border: transparent;
    padding: 5px 8px;
    width: 136px;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    transition: background-color ${({ theme }) => theme.animations.transition},
      box-shadow ${({ theme }) => theme.animations.transition};
  }

  .buttonReview:hover {
    box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
  }
  .buttonReview:focus {
    background-color: ${({ theme }) => theme.colors.activeBgColor};
  }

  .buttonReview:disabled {
    background-color: ${({ theme }) => theme.colors.buttonBgDisabled};
    cursor: not-allowed;
  }

  .inputError {
    border: 1px solid ${({ theme }) => theme.colors.colorError};
  }

  @media (max-width: 564px) {

  border-radius: 0;
  padding: 64px 20px 26px 20px;
  width: 375px;
height: 511px;
  
  .buttonClose {
top:10px;
    
  }
 

  .title {
    font-size: 24px;
line-height: 1.16667;
  }

  .labelName {
    height: 44px;
  }

  .errorName {
    font-size: 14px;
    
  }

  .inputName {
    height: 44px;
    
  }


  .errorRating {
    font-size: 14px;
   
  }

  .errorReview {
    font-size: 14px;
    
  }

  .buttonReview {
    
    padding: 7px 5px;
    width: 100%;
    height: 44px;
    
  }

  }
`;
