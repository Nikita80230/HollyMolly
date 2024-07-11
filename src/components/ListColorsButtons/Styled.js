import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 132px;
  max-height: 24px;
  overflow: hidden;

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
    width: 24px;
    height: 24px;
    background-color: transparent;
  }

  .containerColor {
    border-radius: 2px;
    width: 19.5px;
    height: 19.5px;
  }
`;
