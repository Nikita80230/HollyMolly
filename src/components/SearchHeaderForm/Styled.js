import { styled } from "styled-components";

export const StyledSearchHeaderBtn = styled.button`
  display: flex;
  gap: 16px;

  max-width: 246px;
  width: 100%;

  padding: 8px;

  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};

  .searchIcon {
    margin: auto 0;
  }

  .placeholder {
    text-transform: capitalize;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};

    font-family: "Roboto";
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

    &:not(:placeholder-shown) + .placeholder {
      transform: translateY(-28px);
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

  @media (max-width: 564px) {
    max-width: max-content;
    width: 100%;
    max-width: 532px;

    margin-bottom: 32px;
  }
`;
