import { styled } from "styled-components";
import { Field } from "formik";

export const StyledField = styled(Field)`
  background: ${({ theme }) => theme.colors.primaryBgColor};
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  border:1px solid ${({ theme }) => theme.colors.borderColor};
  /* border: 1px solid
    ${({ theme, isError, isValid }) =>
      isError
        ? theme.colors.colorError
        : isValid
        ? theme.colors.colorSuccess
        : theme.colors.borderColor}; */
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  font-weight: 400;
  font-size: 20px;
  border-radius: 5px;
  padding: 18px 0px 18px 15px;
  width: 100%;
  outline: transparent;
  outline-offset: -1px;

  transition: border-color ${({ theme }) => theme.animations.transition};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderHoverColor};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderFocusColor};
    /* width: 390px;
height: 60px; */
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }
`;