import { Field, Form } from "formik";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  .inputAuth {
    padding: 18px 24px;
    border: 2px solid ${({ theme }) => theme.colors.authBorderInput};
    outline: none;
    border-radius: 8px;
    width: 100%;
    height: 57px;
    background-color: ${({ theme }) => theme.colors.authBgInput};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authTextColor};
  }

  .inputAuth::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authTextColor};
  }

  .inputError {
    padding: 18px 24px;
    border: 1px solid ${({ theme }) => theme.colors.authBorderInput};
    border-bottom: 2px solid ${({ theme }) => theme.colors.colorErrorAuth};
    outline: none;
    border-radius: 8px;
    width: 100%;
    height: 57px;
    background-color: ${({ theme }) => theme.colors.authBgInput};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authTextColor};
  }

  .styledLabel {
    position: relative;
  }

  .iconEye {
    position: absolute;
    top: 20px;
    right: 22px;
  }

  .errorMessage {
    position: absolute;
    bottom: -24px;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorErrorAuth};
  }

  .buttonAuth {
    margin-bottom: 24px;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    border: transparent;
    background-color: ${({ theme }) => theme.colors.authButtonBg};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.authTextColor};
  }
`;

export const LabelRegisterSubscribe = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.familyRoboto};
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.authColorSecondaryText};
`;

export const InputCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.authBorderInput};
  background-color: ${({ theme }) => theme.colors.authBgInput};
  cursor: pointer;
  position: relative;
  appearance: none;
  outline: none;

  &:checked {
    background-color: ${({ theme }) => theme.colors.authBgInput};
  }

  &:checked::after {
    content: "";
    content: "";
    position: absolute;
    top: 30%;
    left: 50%;
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.authColorSecondaryText};
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const ContainerCheckboxLink = styled.div`
  display: flex;
  justify-content: space-between;

  .linkForgotPassword {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.authColorSecondaryText};
  }
`;
