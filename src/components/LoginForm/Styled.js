import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 43px;
  display: flex;
  flex-direction: column;


  @media (max-width: 564px) {
      
    position: absolute;
    top: 43px;
    left: 20px;
    padding: 90px 13px 28px 13px;
    width: 335px;
    height: 485px;
    background: ${({ theme }) => theme.colors.backgroundContentBox};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
  width: 430px;

  .inputAuth {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    padding: 18px 0px 18px 15px;
    width: 310px;
    height: 60px;
    outline: transparent;
    outline-offset: -1px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    transition: border-color ${({ theme }) => theme.animations.transition};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};
    }
  }

  .inputAuth::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.borderColor};
  }

  .inputError {
    border: transparent;
    border: 1px solid ${({ theme }) => theme.colors.colorError};
    border-radius: 5px;
    padding: 18px 0px 18px 15px;
    width: 310px;
    height: 60px;
    outline: transparent;
    outline-offset: -1px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .inputSuccess {
    border: transparent;
    border: 1px solid ${({ theme }) => theme.colors.colorSuccess};
    border-radius: 5px;
    padding: 18px 0px 18px 15px;
    width: 310px;
    height: 60px;
    outline: transparent;
    outline-offset: -1px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .styledLabel {
    position: relative;
    margin-bottom: 23px;
  }

  .styledLabelPassword {
    position: relative;
    margin-bottom: 35px;
  }

  .iconEye {
    position: absolute;
    top: 18px;
    right: 15px;
  }

  .errorMessage {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.25;
  }

  @media (max-width: 564px) {
    border-radius: 0;
    width: 100%;

    .inputAuth {
      padding: 14px 0px 14px 15px;
      width: 100%;
      height: 52px;
    }

    .inputError {
      padding: 14px 0px 14px 15px;
      width: 100%;
      height: 52px;
    }

    .inputSuccess {
      padding: 14px 0px 14px 15px;
      width: 100%;
      height: 52px;
    }

    .styledLabel {
      margin-bottom: 24px;
      width: 100%;
    }
  }
`;

export const ContainerCheckboxLink = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 564px) {
    margin-bottom: 24px;
  }
`;

export const LabelRegisterSubscribe = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  width: 309px;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryTxtColor};

  @media (max-width: 564px) {
    gap: 11px;
  }
`;

export const InputCheckbox = styled(Field)`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  cursor: pointer;
  position: relative;
  appearance: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};

  &:checked {
    background: ${({ theme }) => theme.colors.accentColor};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 14px;
    border: solid ${({ theme }) => theme.colors.whiteTxtColor};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }

  @media (max-width: 564px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 59px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryTxtColor};

  @media (max-width: 564px) {
    margin-left: 13px;
  }
`;
