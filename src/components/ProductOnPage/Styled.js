import { styled } from "styled-components";

export const StyledSectionProduct = styled.section`
  .sectionProduct {
    padding-right: 138px;
    margin-bottom: 40px;
    display: flex;
    gap: 50px;
  }

  .containerContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .titleProduct {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .styledSpan {
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};
  }

  .wrapperRating {
    margin-bottom: 20px;
    display: flex;
    gap: 60px;
  }

  .spanFeedback {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .description {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 30px;
  }

  .wrapperListSpan {
    margin-bottom: 20px;
    display: flex;
    align-items: self-end;
    height: 41px;
  }

  .styledListSpan {
    margin-right: 60px;
    font-weight: 400;
    font-size: 30px;
    width: 120px;
    white-space: nowrap;
  }

  .containerCounterPrices {
    margin-bottom: 20px;
    display: flex;
    align-items: self-end;
    gap: 60px;
  }

  .containerPrices {
    position: relative;
  }

  .price {
    position: absolute;
    top: 18px;
    left: 105px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .price::after {
    content: "";
    position: absolute;
    top: 57%;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryTxtColor};
    transform: translateY(-50%);
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .containerButtons {
    margin-bottom: 23px;
    display: flex;
    gap: 20px;
  }

  .buttonAddBasket {
    border-radius: 5px;
    padding: 10px 8px;
    width: 469px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: transparent;

    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.buttonBgDisabled};
    }
  }

  .buttonFavorites {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 10px;
    padding: 18px;
    width: 60px;
    height: 60px;
    background-color: transparent;
    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
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
     width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }

  @media (max-width: 1239px) {
 .sectionProduct {
    padding-right: 0;
    margin-bottom: 24px;
    gap: 25px;
  }

   .containerContent {
    width:264px;
   }

  .titleProduct {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 24px;
line-height: 1.20833;
    }

  .styledSpan {
    margin-bottom: 5px;
    font-size: 14px;
line-height: 1.28571;
  }

  .wrapperRating {
    margin-bottom: 10px;
    gap: 30px;
  }

  .spanFeedback {
font-size: 14px;
line-height: 1.28571;
  }

  .description {
    margin-bottom: 10px;
   font-size: 16px;
line-height: 1.1875;
  }

  .wrapperListSpan {
    margin-bottom: 7px;
    display: flex;
    align-items: self-end;
    height:83px;
  }

  .styledListSpan {
    margin-right: 60px;
    font-weight: 400;
    font-size: 30px;
    width: 120px;
    white-space: nowrap;
  }

  .containerCounterPrices {
    margin-bottom: 20px;
    display: flex;
    align-items: self-end;
    gap: 60px;
  }

  .containerPrices {
    position: relative;
  }

  .price {
    position: absolute;
    top: 18px;
    left: 105px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .price::after {
    content: "";
    position: absolute;
    top: 57%;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primaryTxtColor};
    transform: translateY(-50%);
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .containerButtons {
    margin-bottom: 23px;
    display: flex;
    gap: 20px;
  }

  .buttonAddBasket {
    border-radius: 5px;
    padding: 10px 8px;
    width: 469px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: transparent;

    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.buttonBgDisabled};
    }
  }

  .buttonFavorites {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 10px;
    padding: 18px;
    width: 60px;
    height: 60px;
    background-color: transparent;
    transition: box-shadow ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
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
     width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }


  }

  @media (max-width: 564px) {
    .sectionProduct {
      flex-direction: column;
      padding-right: 0;
      margin-bottom: 16px;
      gap: 8px;
    }

    .containerContent {
      width:100%;
    }

    .titleProduct {
      font-weight: 400;
      font-size: 24px;
    }

    .styledSpan {
      margin-bottom: 5px;
      font-size: 14px;
    }

    .wrapperRating {
      margin-bottom: 10px;
      display: flex;
      gap: 30px;
    }

    .spanFeedback {
      font-size: 14px;
      line-height: 1.28571;
    }

    .description {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .wrapperListSpan {
      margin-bottom: 8px;
      height: 29px;
    }

    .styledListSpan {
      margin-right: 0;

      font-size: 16px;
      width: 132px;
      white-space: nowrap;
    }

    .containerCounterPrices {
      margin-bottom: 25px;
      gap: 40px;
    }

    .containerPrices {
      position: relative;
    }

    .price {
      top: 6px;
      left: 60px;
      font-size: 18px;
      line-height: 1.22222;
    }

    .priceAfterDiscount {
      font-size: 24px;
      line-height: 1.16667;
    }

    .containerButtons {
      margin-bottom: 0;
      gap: 8px;
    }

    .buttonAddBasket {
      padding: 8px 8px;
      width: 270px;
      height: 52px;
      font-size: 22px;
      line-height: 1.22727;
    }

    .buttonFavorites {
      padding: 10px;
      width: 50px;
      height: 52px;
    }


  }
`;
