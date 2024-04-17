import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  position: relative;
  margin-bottom: 36px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }

  .titleCategories {
    margin-bottom: 40px;
    font-family: ${({ theme }) => theme.fonts.fontNunito};
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media only screen and (min-width: 768px) {
      font-weight: 600;
      font-size: 32px;
    }
  }

  .swiper-wrapper {
    width: 280px;
    height: 356px;
    @media only screen and (min-width: 768px) {
      width: 1312px;
      height: 294px;
    }
  }

  .button-swiper {
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media only screen and (min-width: 768px) {
      width: 132px;
      height: 44px;
      gap: 24px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    padding: 7px;
    width: 31px;
    height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    border-radius: 8px;

    @media only screen and (min-width: 768px) {
      padding: 10px;
      width: 44px;
      height: 44px;
    }
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
`;
