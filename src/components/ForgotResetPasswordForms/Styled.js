import { Form } from "formik";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  padding: 57px 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  .styledLabel {
    position: relative;
  }

  .iconEye {
    position: absolute;
    top: 20px;
    right: 15px;
  }

  .inputAuth {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    padding: 18px 0px 18px 15px;
    width: 390px;
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
    width: 390px;
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
    width: 390px;
    height: 60px;
    outline: transparent;
    outline-offset: -1px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
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
    padding: 0;
    gap: 24px;
    border: transparent;

    .inputAuth {
      padding: 14px 0px 14px 15px;
      width: 335px;
      height: 52px;
    }

    .inputError {
      padding: 14px 0px 14px 15px;
      width: 335px;
      height: 52px;
    }

    .inputSuccess {
      padding: 14px 0px 14px 15px;
      width: 335px;
      height: 52px;
    }
  }
`;

export const WrapperModal = styled.div`
  position: relative;
  padding: 42px 30px;
  border-radius: 10px;
  width: 443px;
  height: 149px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  box-shadow: 5px 5px 10px 0 #c0bfbf;

  .buttonModal {
    position: absolute;
    top: 13px;
    right: 13px;
    background-color: transparent;
    border: transparent;
    justify-content: center;
    align-items: center;
  }

  .iconClose {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .description {
    font-weight: 400;
    font-size: 22px;
    line-height: 1.20833;
    text-align: center;
  }
`;
