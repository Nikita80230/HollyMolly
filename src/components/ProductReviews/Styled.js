import { styled } from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  margin-bottom: 39px;

  .titleReviews {
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.22222;
  }

  .textReviews{
font-weight: 400;
font-size: 30px;
line-height: 1.2;
color:${({theme})=>theme.colors.greyTxtColor};
  }

  .buttonSwiper {
    position: absolute;
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
    /* transition: background-color ${({ theme }) =>
      theme.animations.transition}; */
  }
  .nextProductBtn:focus {
    /* background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper}; */
    border: transparent;
  }

  .prevProductBtn:focus {
    /* background-color: ${({ theme }) => theme.colors.focusButtonBgSwiper}; */
    border: transparent;
  }

  .nextProductBtn:hover {
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
  }

  .prevProductBtn:hover {
    /* border: 1px solid ${({ theme }) => theme.colors.hoverBorderSwiper}; */
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

  .swiperCustom {
    width: 100%;
    height: 242px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    
  }

  .swiper-slideCustom {
    font-size: 18px;
    background: #fff;
    width: 410px;
    height: 242px;
  }

  .buttonReview {
    margin-left: 1060px;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
    /* padding: 15px 8px; */
    width: 277px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};

    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
    transition: box-shadow ${({ theme }) => theme.animations.transition},
      color ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
