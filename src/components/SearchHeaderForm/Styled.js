import { styled } from "styled-components";

export const StyledSearchHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;

  max-width: 246px;
  width: 100%;

  padding: 8px;

  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};

  .searchIcon {
    margin: auto 0;
  }

  .placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: ${({ theme }) => theme.colors.placeholderTxtColor};
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

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 140px;
    width: 100%;

    gap: 12px;

    .placeholder {
      text-transform: capitalize;

      font-size: 10px;
    }

    .searchIcon {
      width: 16px;
    }
  }

  @media (max-width: 564px) {
    max-width: max-content;
    width: 100%;
    max-width: 532px;

    margin-bottom: 32px;
  }
`;
