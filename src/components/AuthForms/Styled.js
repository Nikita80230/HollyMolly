import { Form } from "formik";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  .inputAuth {
    padding: 18px 24px;
    border: 1px solid ${({ theme }) => theme.colors.authBorderInput};
    outline: none;
    border-radius: 8px;
    width: 100%;
    height: 57px;
    background-color: ${({ theme }) => theme.colors.authBgInput};
    font-family: ${({theme})=>theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.authTextColor};

    &::placeholder {
      font-family:  ${({theme})=>theme.fonts.familyNunito};
      font-weight: 500;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.authTextColor};
    }
  }

  .buttonAuth{
    margin-bottom:24px;
    border-radius: 8px;
padding: 15px 192px;
display:flex;
justify-content:center;
align-items:center;
width: 100%;
height: 56px;
border:transparent;
background-color:${({ theme }) => theme.colors.authButtonBg};
font-family:  ${({theme})=>theme.fonts.familyNunito};
font-weight: 500;
font-size: 22px;
color: ${({theme})=>theme.colors.authTextColor};
  }
`;
