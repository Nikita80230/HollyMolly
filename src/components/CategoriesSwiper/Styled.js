import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  position: relative;
  margin-bottom: 36px;
  margin-top: 364px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
    margin-top: 0;
  }

  .titleCategories {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media only screen and (min-width: 768px) {
      margin-bottom: 41px;
      font-size: 32px;
    }
  }

  .mySwiper {
    width: 100%;
    height: 356px;

    @media only screen and (min-width: 768px) {
      width: 100%;
      height: 294px;
    }
  }

  .button-swiper {
    position: absolute;
    top: 5px;
    right: 0;
    width: 100px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media only screen and (min-width: 768px) {
      top: 0;
      width: 147px;
      height: 50px;
      gap: 24px;
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
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    border-radius: 8px;

    @media only screen and (min-width: 768px) {
      padding: 10px;
      width: 56px;
      height: 48px;
    }
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiperSlide {
    width: 164px;
    height: 158px;
  }
`;
