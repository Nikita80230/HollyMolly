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

  @media (max-width: 1239px) {
    margin-bottom: 40px;

    .titleRecommendation {
      margin-bottom: 24px;
      font-size: 30px;
      line-height: 1.2;
      white-space: nowrap;
    }

    .buttonSwiper {
      display: none;
    }

    .swiperCustom {
      margin-right: -20px;
      height: auto;
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

  @media (max-width: 564px) {
     margin-bottom: 24px;
    .titleRecommendation {
      margin-bottom: 10px;
      font-size: 20px;
    }

   .swiperCustom {
      margin-right: 0px;
      height: 276px;
    }
  }
`;
