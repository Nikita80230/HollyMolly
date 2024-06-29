import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  width: 300px;
  /* height: 447px; */
  transition: transform ${({ theme }) => theme.animations.transition};
  overflow: hidden;

  &:hover {
    .productPhoto {
      transform: scale(1.2);
    }
  }

  .iconHeart {
    /* opacity: 0;
    pointer-events: none;
    user-select: none; */
    width: 24px;
    height: 24px;
    transition: ${({ theme }) => theme.animations.transition};
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
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

  /* &:hover {
    .iconHeart {
      opacity: 1;
      pointer-events: all;
      user-select: all;
      transition: opacity ${({ theme }) => theme.animations.transition};

      path {
        fill: transparent;
      }
    } */
  .iconHeart.added {
    path {
      fill: ${({ theme }) => theme.colors.accentColor};
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

  .wrapperColorFavorite {
    display: flex;
    justify-content: space-between;
  }

  .styledSpan {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 3px 29px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanNovelty};
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .styledSpanDiscount {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 3px 29px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanDiscount};
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .styledSpanRating {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 3px 29px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanRating};
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .wrapperPhoto {
    overflow: hidden;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .productPhoto {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: transform ${({ theme }) => theme.animations.transition};
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

    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.21429;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
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
    display: flex;
    background-color: transparent;
    border: transparent;
  }
`;
