import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 10px 0 0 10px;
  width: 430px;
  height: 500px;

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
    font-size: 16px;
    line-height: 1.25;
  }

  .buttonAuth {
    border-radius: 5px;
    border: transparent;
    padding: 15px 5px;
    width: 310px;
    height: 60px;
    background: ${({ theme }) => theme.colors.accentColor};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: background ${({ theme }) => theme.animations.transition},
      box-shadows ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }
  }
`;

export const LabelRegisterSubscribe = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: 309px;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
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
`;

export const ContainerCheckboxLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const StyledLink = styled(Link)`
  margin-left: 59px;
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;
