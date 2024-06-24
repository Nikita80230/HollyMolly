import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  position: relative;
  margin-bottom: 36px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 63px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 36px;
  }

  .titleCategories {
    margin-bottom: 32px;
   
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media only screen and (min-width: 768px) {
      font-size: 28px;
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 36px;
      font-weight: 500;
      font-size: 40px;
    }
  }

  .listCategories {
    @media only screen and (min-width: 1440px) {
      display: flex;
      gap: 46px;
    }
  }

  .categoriesPhoto {
    @media only screen and (min-width: 1440px) {
      margin-bottom: 37px;
      border-radius: 10px 10px 0 0;
      width: 300px;
      height: 300px;
    }
  }

  .wrapperItem {
    @media only screen and (min-width: 1440px) {
      border-radius: 10px;
      width: 300px;
      height: 413px;
    }
  }

  .textCard {
    @media only screen and (min-width: 1440px) {
      font-size: 30px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .mySwiper {
    width: 100%;
    height: 356px;

    @media only screen and (min-width: 768px) {
      height: 150px;
    }

    @media only screen and (min-width: 1440px) {
      /* width: 100%; */
      height: 413px;
    }
  }

  .button-swiper {
    position: absolute;
    top: 5px;
    right: 0;
    /* width: 105px;
    height: 38px; */
    display: flex;
    align-items: center;
    gap: 15px;

    @media only screen and (min-width: 768px) {
      /* width: 124px;
      height: 40px; */
      gap: 16px;
    }

    @media only screen and (min-width: 1440px) {
      top: 0;
      width: 111px;
      height: 32px;
      gap: 27px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    padding: 0;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: transparent;
    border-radius: 8px;
    transition: background-color ${({ theme }) => theme.animations.transition},
      border ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 768px) {
      padding: 0;
      width: 46px;
      height: 40px;
      border-radius: 6px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 0;
      width: 32px;
      height: 32px;
      /* border-radius: 8px; */
    }
  }

  .swiper-button-next:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
  }

  .swiper-button-prev:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
  }

  .swiper-button-next:hover {
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
  }

  .swiper-button-prev:hover {
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    border: transparent;
  }
  .swiperSlide {
    width: 164px;
    height: 158px;

    @media only screen and (min-width: 768px) {
      width: 121px;
      height: 150px;
    }

    @media only screen and (min-width: 1440px) {
      width: 300px;
      height: 413px;
    }
  }
`;
