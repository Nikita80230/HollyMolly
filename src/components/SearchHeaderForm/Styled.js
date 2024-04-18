import { styled } from "styled-components";

export const StyledSearchHeaderForm = styled.form`
  position: relative;

  display: flex;
  justify-content: space-evenly;
  /* flex-direction: column; */

  max-width: 246px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};

  .searchIcon {
    margin: auto 0;
  }

  .placeholder {
    position: absolute;
    bottom: 8px;
    left: 47px;

    transition: all 0.3s;

    text-transform: capitalize;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};

    pointer-events: none;
    font-family: "Roboto";
    /* &:focus,
    &:hover {
      color: #fc842d;
    } */
  }

  .input {
    min-height: 35px;

    padding-bottom: 3px;

    outline: none;
    border: none;

    transition: all 0.3s;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};
    background-color: transparent;
    /* text-transform: capitalize; */

    /* &:focus,
    &:hover {
      border-bottom: 1px solid #fc842d;
    } */

    &:not(:placeholder-shown) + .placeholder {
      transform: translateY(-28px);
      /* color: #fc842d; */
      font-weight: 500;
      font-size: 12px;
    }
  }
  .validationError {
    position: absolute;
    top: 120%;
    left: 0;

    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: #fc842d;
  }
`;
