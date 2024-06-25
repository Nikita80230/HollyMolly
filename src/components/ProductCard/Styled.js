import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  /* height: 264px; */

  .productImg {
    margin-bottom: 20px;

    border-radius: 10px;
    max-width:300px;
    width: 100%;
    height: 300px;

  }

  .productInfoWrapper {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  .addToFavoriteButton {
    background: transparent;
    border: none;
    transition: fill ${({ theme }) => theme.animations.transition};
  }

  .addToFavoriteIcon {
    display: block;
    path {
      stroke: ${({ theme }) => theme.colors.primaryTxtColor};
      fill: transparent;
    }
  }

  .addToFavoriteIcon.added {
    path {
      fill: ${({ theme }) => theme.updatedColors.arizona900};
    }
  }

  .productTitle {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .productPrice {
font-family: ${({theme})=> theme.fonts.familyPacifico};
font-weight: 400;
font-size: 28px;
line-height: 1.21429;
color: ${({theme})=> theme.colors.accentColor} ;
  }
  .productColorSwitcher {
  }

  @media (max-width: 564px) {
    .productImg {
      margin-bottom: 8px;

      max-width: 310px;
      width: 100%;
    }

    /* .productTitle {
      margin-bottom: 5px;
      font-weight: 500;

      font-family: ${({ theme }) => theme.fonts.familyNunito};
      font-size: 22px;
    } */

    .productTitle {
      min-height: auto;

      text-align: start;
      font-size: 12px;
      font-weight: 400;
    }

    .productPrice {
      text-align: start;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;
