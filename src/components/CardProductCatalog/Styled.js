import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  width: 100%;

  transition: transform ${({ theme }) => theme.animations.transition};
  overflow: hidden;

  &:hover {
    .productPhoto {
      transform: scale(1.2);
    }
  }

  .iconHeart {
    width: 24px;
    height: 24px;
    transition: ${({ theme }) => theme.animations.transition};
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
      transition: ${({ theme }) => theme.animations.transition};
    }
  }

  .iconHeart.added {
    path {
      fill: ${({ theme }) => theme.colors.accentColor};
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
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .productPhoto {
    /* width: 100%; */
    width: 300px;
    height: 300px;
    border-radius: 10px;
    transition: transform ${({ theme }) => theme.animations.transition};
    object-position: center center;
    object-fit: contain;
  }

  .containerTitle {
    overflow: hidden;
  }

  .title {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wrapperPrice {
    position: relative;
    margin-top: 15px;
  }

  .price {
    position: absolute;
    top: 10px;
    left: 65px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .price::after {
    content: "";
    position: absolute;
    top: 58%;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryTxtColor};
    transform: translateY(-50%);
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .buttonIcon {
    display: flex;
    background-color: transparent;
    border: transparent;
  }

  /* ========Mobile - @media (max-width: 564px)========= */

  @media (max-width: 564px) {
    min-width: 160px;
    width: 100%;

    .iconHeart {
      width: 16px;
      height: 16px;
    }

    .styledSpan {
      top: 6px;
      right: 66px;
      padding: 3px 10px;
      font-size: 16px;
      line-height: 1.25;
    }

    .styledSpanDiscount {
      top: 6px;
      right: 86px;
      padding: 3px 10px;
      font-size: 16px;
      line-height: 1.25;
    }

    .styledSpanRating {
      top: 6px;
      right: 36px;
      padding: 3px 10px;
      font-size: 16px;
      line-height: 1.25;
    }

    .wrapperPhoto {
      margin-bottom: 10px;
    }

    .productPhoto {
      /* width:160px; */
      width: 100%;
      height: 150px;
    }

    .title {
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 1.22222;
    }

    .wrapperPrice {
      margin-top: 10px;
    }

    .price {
      top: 3px;
      left: 55px;
      font-size: 16px;
    }

    .priceAfterDiscount {
      font-size: 20px;
      line-height: 1.2;
    }
  }
`;
