import { styled } from "styled-components";

export const ButtonAddToBasket = styled.button`
  background-color: transparent;
  border: transparent;

  .iconBasket {
    opacity: 0;
    pointer-events: none;
    user-select: none;

    transition: ${({ theme }) => theme.animations.transition};

    path {
      transition: ${({ theme }) => theme.animations.transition};
    }
  }

  .selectedBasketPath {
    opacity: 0;
    transition: ${({ theme }) => theme.animations.transition};
  }
`;
