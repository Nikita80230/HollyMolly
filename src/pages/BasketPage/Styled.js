import { styled } from "styled-components";

export const WrapperBasketPage = styled.section`
  padding-top: 36px;
  margin-bottom: 44px;

  .wrapperBasket {
    margin-top: 36px;
    display: flex;
    gap: 75px;
  }

  .wrapperList {
    padding: 46px 39px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 807px;
  }

  .containerPrices {
    width: 372px;
  }

  .wrapperPrice {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  }

  .span {
    font-family:  ${({theme})=>theme.fonts.familyGaramond}; 
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    color:${({ theme }) => theme.colors.primaryTxtColor};
  }

  .price {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color:${({ theme }) => theme.colors.primaryTxtColor};
  }

  .wrapper {
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  }

  .containerTotalPrice {
    margin-bottom: 39px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  }

  .spanTotalPrice {
    font-family:  ${({theme})=>theme.fonts.familyGaramond}; 
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
    color:${({ theme }) => theme.colors.primaryTxtColor};
  }

  .numberTotalPrice {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 45px;
    line-height: 1.2;

    color: ${({ theme }) => theme.colors.accentColor};
  }

  .buttonOrder {
    border: transparent;
    background: ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
    width: 373px;
    height: 60px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: background ${({ theme }) => theme.animations.transition},
      box-shadows ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }
  }

  .order {
font-weight: 400;
font-size: 22px;
line-height: 1.20833;


  }
  .link {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
