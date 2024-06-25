import styled from "styled-components";

export const StyledList = styled.ul`
  margin-bottom: 15px;
  display: flex;
  gap: 12px;

  .buttonColor {
    position: relative;
    border-radius: 2px;
    border: transparent;
    width: 24px;
    height: 24px;
    transition: border ${({ theme }) => theme.animations.transition};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
  }

  .buttonColor.active {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    width: 24px;
    height: 24px;
    background-color: transparent;
  }

  .containerColor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    width: 20px;
    height: 20px;
  }
`;
