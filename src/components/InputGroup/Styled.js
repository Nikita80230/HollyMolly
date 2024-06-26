import styled from "styled-components";

export const StyledInputGroup = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;

  /* margin-bottom: 30px; */

  /* .placeholder {
    position: absolute;
    bottom: 8px;
    left: 0;

    transition: all 0.3s;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;

    pointer-events: none;

    &:focus,
    &:hover {
      color: #fc842d;
    }
  } */

  .input {
    min-height: 39px;

    /* padding-bottom: 10px; */

    outline: none;
    border: none;

    transition: all 0.3s;

    font-weight: inherit;
    font-size: inherit;
    letter-spacing: 0.04em;
    color: inherit;
    background-color: transparent;

    &:focus,
    &:hover {
      /* border-bottom: 1px solid #fc842d; */
    }

    &:not(:placeholder-shown) + .placeholder {
      transform: translateY(-28px);
      color: #fc842d;
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
