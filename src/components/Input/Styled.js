import { styled } from "styled-components";
import { Field } from "formik";

export const StyledField = styled(Field)`
  background: ${({ theme }) => theme.colors.primaryBgColor};
  font-family: ${({ theme }) => theme.fonts.familyDidact};
  /* border:1px solid ${({ theme }) => theme.colors.borderColor}; */
  border: 1px solid
    ${({ theme, iserror, isvalid }) =>
      iserror === "true"
        ? theme.colors.colorError
        : isvalid === "true"
        ? theme.colors.colorSuccess
        : theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.primaryTxtColor};
  font-weight: 400;
  font-size: 20px;
  border-radius: 5px;
  padding: 16px 0px 16px 15px;
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

  /* ==== Mobile max-width:564px=== */
  @media (max-width: 564px) {

  padding: 14px 0px 14px 15px;

  }
`;