import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* height: 264px; */

  .productImg {
    margin-bottom: 8px;

    /* max-width: 310px; */
    width: 100%;
  }

  .productInfoWrapper {
    position: relative;

    display: flex;
    flex-direction: column;
  }

  .addToFavoriteButton {
    position: absolute;
    top: 5px;
    right: 0;

    padding: 0;

    background: transparent;
    border: none;
  }

  .addToFavoriteIcon {
    display: block;
    path {
      stroke: ${({ theme }) => theme.updatedColors.arizona900};
      fill: transparent;
      transition: ${({ theme }) => theme.animations.transition};
    }
  }

  .addToFavoriteIcon.added {
    path {
      fill: ${({ theme }) => theme.updatedColors.arizona900};
    }
  }

  .productTitle {
    min-height: 51px;

    margin-bottom: 5px;
    font-weight: 500;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 22px;
  }

  .productPrice {
    margin-bottom: 8px;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 20px;

    color: ${({ theme }) => theme.colors.colorLogo};
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
