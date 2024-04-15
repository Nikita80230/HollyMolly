import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* height: 264px; */

  .productImg {
    margin-bottom: 8px;

    max-width: 310px;
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
    right: 5px;

    background: transparent;
    border: none;
  }

  .addToFavoriteIcon {
    display: block;
  }

  .productTitle {
    margin-bottom: 5px;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 22px;
  }

  .productPrice {
    margin-bottom: 8px;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 20px;

    color: ${({ theme }) => theme.colors.colorLogo};
  }
  .productColorSwitcher {
  }
`;
