import styled from "styled-components";

export const StyledRecommendationSection = styled.section`
  position: relative;
  margin-bottom: 36px;

  .wrapperTop {
    display: flex;
    justify-content: space-between;
  }

  .titleRecommendation {
    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .buttonSwiper {
    /* position: absolute; */
    top: 0;
    right: 81px;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nextProductBtn,
  .prevProductBtn {
    padding: 10px;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: transparent;
  }
  .nextProductBtn:focus {
    border: transparent;
  }

  .prevProductBtn:focus {
    border: transparent;
  }

  .nextProductBtn:after,
  .prevProductBtn:after {
    display: none;
  }
  .prevProductBtn.swiper-button-disabled,
  .nextProductBtn.swiper-button-disabled {
    border: transparent;
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  .swiper-pagination-container {
    display: none;
  }

  /*========== Mobile - @media (max-width: 564px)================ */

  @media (max-width: 564px) {
    .titleRecommendation {
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 20px;
    }
    .buttonSwiper {
      display: none;
    }

    .swiperCustom {
      height: 252px;
    }

    .swiper-pagination-container {
      display: block;
      margin-left: auto;
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .swiper-pagination-bullet {
      background: ${({ theme }) => theme.colors.secondaryTxtColor};
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin: 0 4px;
    }

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  /* @media (max-width: 1024px) {
    .buttonSwiper {
      gap: 15px;
    }

    .nextProductBtn,
    .prevProductBtn {
      width: 46px;
      height: 40px;

      padding: 7px;
    }
  }

  @media (max-width: 565px) {
    .titleRecommendation {
      margin-bottom: 32px;
      font-weight: 500;
      font-size: 20px;
    }

    .buttonSwiper {
      gap: 15px;
    }

    .nextProductBtn,
    .prevProductBtn {
      width: 36px;
      height: 36px;
      padding: 7px;
    }

    .swiperCustom {
      width: 100%;
      
      margin-left: auto;
      margin-right: auto;
      height: 447px;
    }

    .swiper-slideCustom {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 10px) / 2) !important;

     
      display: flex;
      justify-content: center;
      align-items: center;
    }
  } 

    @media (min-width: 520px) and (max-width: 565px) {
    .swiperCustom {
      height: 770px;
    }
  }

  @media (min-width: 480px) and (max-width: 519px) {
    .swiperCustom {
      height: 716px;
    }
  }

  @media (min-width: 420px) and (max-width: 479px) {
    .swiperCustom {
      height: 684px;
    }
  }

  @media (min-width: 395px) and (max-width: 419px) {
    .swiperCustom {
      height: 644px;
    }
  }

  @media (min-width: 350px) and (max-width: 395px) {
    .swiperCustom {
      height: 639px;
    }
  }  */
`;
