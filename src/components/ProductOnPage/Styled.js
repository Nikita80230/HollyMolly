import { styled } from "styled-components";

export const StyledSectionProduct = styled.section`
  padding-right: 138px;
  margin-bottom: 40px;
  display: flex;
  gap: 50px;

  /* .containerMainPhoto {
  margin-bottom: 8px;
  border-radius: 10px;
  
  width: 600px;
  height: 374px;
  
}

.styledImg {
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
  width: 600px;
 height: 374px;
  
}

.nextPhoto{
    border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
  width: 295px;
 height: 200px;
}

.wrapperPictures {
  display: flex;
  gap: 10px;
}
   */

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
  .description {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 30px;
  }

  .wrapperListSpan {
    margin-bottom: 20px;
    display: flex;
    align-items: self-end;
    width: 299px;
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
    top: 15px;
    left: 95px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    text-decoration: line-through;
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

    &:focus {
      svg {
        stroke: ${({ theme }) => theme.colors.accentColor};
      }
    }
  }
`;
