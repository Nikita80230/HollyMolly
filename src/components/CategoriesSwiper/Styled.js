import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  position: relative;
  margin-bottom: 36px;
  margin-top: 364px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 63px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }

  .titleCategories {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media only screen and (min-width: 768px) {
      font-size: 28px;
    }

    @media only screen and (min-width: 1440px) {
      margin-bottom: 41px;
      font-size: 32px;
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
      height: 324px;
    }
  }

  .button-swiper {
    position: absolute;
    top: 5px;
    right: 0;
    width: 105px;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 15px;

    @media only screen and (min-width: 768px) {
      
      width: 124px;
      height: 40px;
      gap: 16px;
    }

    @media only screen and (min-width: 1440px) {
      top: 0;
      width: 165px;
      height: 50px;
      gap: 33px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    padding: 7px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderButtonSwiper};
    border-radius: 8px;
    transition: background-color ${({ theme }) => theme.animations.transition},
      border ${({ theme }) => theme.animations.transition};

    @media only screen and (min-width: 768px) {
      padding: 8px 11px;
      width: 46px;
      height: 40px;
      border-radius: 6px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 10px;
      width: 56px;
      height: 48px;
      border-radius: 8px;
    }
  }

  .swiper-button-next:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .swiper-button-prev:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .swiper-button-next:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .swiper-button-prev:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
  }
  .swiperSlide {
    width: 164px;
    height: 158px;

    @media only screen and (min-width: 768px) {
      width: 121px;
      height: 150px;
    }

    @media only screen and (min-width: 1440px) {
      width: 310px;
      height: 294px;
    }
  }
`;
