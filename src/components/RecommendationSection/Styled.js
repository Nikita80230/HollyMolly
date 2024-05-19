import styled from "styled-components";

export const StyledRecommendationSection = styled.section`
  position: relative;
  margin-bottom: 80px;

  .titleRecommendation {
    margin-bottom: 40px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .buttonSwiper {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    gap: 24px;
  }

  .nextProductBtn,
  .prevProductBtn {
    padding: 10px;
    width: 56px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderButtonSwiper};
    border-radius: 8px;
    transition: background-color ${({ theme }) => theme.animations.transition}
      border ${({ theme }) => theme.animations.transition};
  }
  .nextProductBtn:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .prevProductBtn:focus {
    background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper};
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .nextProductBtn:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .prevProductBtn:hover {
    border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper};
  }

  .nextProductBtn:after,
  .prevProductBtn:after {
    display: none;
  }
  .prevProductBtn.swiper-button-disabled,
  .nextProductBtn.swiper-button-disabled {
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
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

      border-radius: 6px;
      padding: 7px;
    }

    .swiperCustom {
      width: 100%;
      /* height: 100%; */
      margin-left: auto;
      margin-right: auto;
      height: 750px;
    }

    .swiper-slideCustom {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 10px) / 2) !important;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 520px) and (max-width: 565px) {
    .swiperCustom {
      height: 750px;
    }
  }

  @media (min-width: 480px) and (max-width: 519px) {
    .swiperCustom {
      height: 700px;
    }
  }

  @media (min-width: 420px) and (max-width: 479px) {
    .swiperCustom {
      height: 660px;
    }
  }

  @media (min-width: 395px) and (max-width: 419px) {
    .swiperCustom {
      height: 600px;
    }
  }

  @media (min-width: 350px) and (max-width: 394px) {
    .swiperCustom {
      height: 567px;
    }
  }
  @media (min-width: 320px) and (max-width: 349px) {
    .swiperCustom {
      height: 500px;
    }
  }
`;
