import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  /* position: relative;
  margin-bottom: 36px;

  .titleCategories {
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
  }

  .listCategories {
    display: flex;
    gap: 46px;
  }

  .wrapperItem {
    border-radius: 10px;
    width: 300px;
    height: 413px;
    transition: ${({ theme }) => theme.animations.transition};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowCategory};
    }
  }

  .categoriesPhoto {
    margin-bottom: 37px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 300px;
  }

  .textCard {
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .mySwiper {
    width: 100%;
    height: 356px;

    height: 413px;
  }

  .button-swiper {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    gap: 27px;

    width: 111px;
    height: 32px;
  } */
  /* .swiper-button-next,
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

    @media (min-width: 768px) {
      padding: 0;
      width: 46px;
      height: 40px;
      border-radius: 6px;
    }

    @media (min-width: 1440px) {
      padding: 0;
      width: 32px;
      height: 32px;
      
    }
  } */

  /* .swiper-button-next:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
   
  }

  .swiper-button-prev:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    
  } */

  /* .swiper-button-next:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  } */

  /* .swiper-button-prev:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  } */

  /* .swiper-button-next:after,
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

    @media (min-width: 768px) {
      width: 121px;
      height: 150px;
    }

    @media (max-width: 1280px) {
      width: 300px;
      height: 413px;
    }
  } */

  /* =-=-=-=-=-==-=-=-=-===-=-=-=-====-=-=-=-=-=-=-=--=BUGFIX--=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=--=--=-=-=-=-=-=- */

  position: relative;
  margin-bottom: 36px;

  .titleCategories {
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
  }

  .listCategories {
    display: flex;
    justify-content: space-between;
    gap: 46px;
  }

  .wrapperItem {
    border-radius: 10px;
    width: 300px;
    height: 413px;
    transition: ${({ theme }) => theme.animations.transition};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowCategory};
    }
  }

  .categoriesPhoto {
    margin-bottom: 37px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 300px;
  }

  .textCard {
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .mySwiper {
    width: 100%;
    height: 356px;

    height: 413px;
  }

  .button-swiper {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    gap: 27px;

    width: 111px;
    height: 32px;
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
    @media (max-width: 1280px) {
    }
  }

  .swiper-button-next:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
  }

  .swiper-button-prev:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
  }

  .swiper-button-next:hover {
  }

  .swiper-button-prev:hover {
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
    width: 300px;
    height: 413px;
  }
`;
