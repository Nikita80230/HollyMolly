import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  max-width: 396px;
  max-height: 24px;

  .buttonColor {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 0.5px solid ${({ theme }) => theme.colors.borderColor};
    width: 24px;
    height: 24px;
    transition: border ${({ theme }) => theme.animations.transition};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
  }

  .buttonColor.active {
    border: 0.5px solid ${({ theme }) => theme.colors.borderColorActive};
    width: 24.5px;
    height: 24px;
    background-color: transparent;
  }

  .containerColor {
    margin: auto;
    border-radius: 2px;
    width: 19px;
    height: 19px;
  }

  /* ===================Mobile - @media (max-width: 564px)================== */
  @media (max-width: 564px) {
    .buttonColor {
      width: 16px;
      height: 16px;
    }
    .buttonColor.active {
      width: 16px;
      height: 16px;
    }
    .containerColor {
      width: 11.5px;
      height: 11.5px;
    }
  }
`;
