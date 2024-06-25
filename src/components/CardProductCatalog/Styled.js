import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  padding: 16px;
  /* border: 1px solid ${({ theme }) => theme.colors.borderButtonColors}; */
  width: 300px;
  height: 603px;
  transition: opacity ${({ theme }) => theme.animations.transition},
    transform ${({ theme }) => theme.animations.transition};

  .iconHeart {
    opacity: 0;
    pointer-events: none;
    user-select: none;

    transition: ${({ theme }) => theme.animations.transition};
    path {
      stroke: ${({ theme }) => theme.colors.iconAdd};
      transition: ${({ theme }) => theme.animations.transition};
    }
  }

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

  &:hover {
    .iconHeart {
      opacity: 1;
      pointer-events: all;
      user-select: all;
      transition: opacity ${({ theme }) => theme.animations.transition};

      path {
        fill: transparent;
      }
    }
    .iconHeart.added {
      path {
        fill: #3251ae;
      }
    }

    .iconBasket {
      opacity: 1;
      pointer-events: all;
      user-select: all;
      transition: opacity ${({ theme }) => theme.animations.transition};

      path {
        fill: ${({ theme }) => theme.colors.iconAdd};
      }
    }

    .iconBasket.added {
      path {
        fill: ${({ theme }) => theme.colors.iconAdd};
      }
      .selectedBasketPath {
        opacity: 1;
      }
    }
  }

  .styledSpan {
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 23px;
    padding: 5px 8px;
    width: 79px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanNovelty};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.spanTextColor};
  }

  .styledSpanDiscount {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    padding: 5px 8px;
    width: 48px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanDiscount};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.spanTextColor};
  }

  .styledSpanRating {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    padding: 5px 8px;
    width: 115px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanRating};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.spanTextColor};
  }

  .productPhoto {
    margin-bottom: 20px;
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }

  .title {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;
  }

  .wrapperPriceIcon {
    position: relative;
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    position: absolute;
    top: 0;
    left: 0;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 14px;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.colorPrice};
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .buttonsFeedback {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .wrapperFeedback {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .spanFeedback {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.titleCardProduct};
  }

  .wrapperColorsFeedbackHeart {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttonIcon {
    background-color: transparent;
    border: transparent;
  }
`;
