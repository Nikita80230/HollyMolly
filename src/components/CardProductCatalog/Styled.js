import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid #e2e2e2;
  width: 310px;
  height: 603px;
  transition: opacity ${({ theme }) => theme.animations.transition},
    transform ${({ theme }) => theme.animations.transition};

  .iconHeart {
    opacity: 0;
    pointer-events: none;
    user-select: none;

    transition: ${({ theme }) => theme.animations.transition};
    path {
      stroke: #3251ae;
      transition: ${({ theme }) => theme.animations.transition};
    }
  }

  .iconBasket {
    opacity: 0;
    pointer-events: none;
    user-select: none;

    transition: ${({ theme }) => theme.animations.transition};

    path {
      /* stroke: #3251ae; */
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
      transition: ${({ theme }) => theme.animations.transition};

      path {
        fill: transparent;
      }
    }
    .iconBasket {
      opacity: 1;
      pointer-events: all;
      user-select: all;
      transition: ${({ theme }) => theme.animations.transition};

      path {
        fill: #3251ae;
      }
    }

    .iconHeart.added {
      path {
        fill: #3251ae;
      }
    }
    .iconBasket.added {
      path {
        fill: #3251ae;
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
    margin-bottom: 10px;
  }

  .title {
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.titleCardProduct};
  }

   .wrapperPriceIcon {
    position:relative;
    padding-top:14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    position:absolute;
    top:0;
    left:0;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 14px;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.colorPrice};
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorPriceSecondary};
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
