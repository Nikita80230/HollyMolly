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

  .textReviews {
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.greyTxtColor};
  }

  .buttonSwiper {
    position: absolute;
    top: 0;
    right: 0;

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

    .swiper-pagination-container {
      display:none;
    }

  .buttonReview {
    margin-left: 970px;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
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

@media (max-width: 564px) {
  margin-bottom: 16px;

   .titleReviews {
    margin-bottom: 16px;
    font-size: 20px;
line-height: 1.2;
  }

  .textReviews {
    font-size: 16px;
line-height: 1.25;
    
  }

  .buttonSwiper {
   display:none;
  }

  .swiperCustom {
     height: 160px;
     margin-bottom: 16px;
  }

  .swiper-slideCustom {
    font-size: 16px;
    width: 214px;
    height: 156px;
  }

      /* .swiper-pagination-container {
      display: block;
      margin-left: auto;
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    } */

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
  

  .buttonReview {
    margin-left: 0;
    width: 100%;
    height: 44px;
    font-size: 22px;
line-height: 1.31818;
  
  }
}

`;

export const WrapperModal = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 65px 38px;
  width: 440px;
  height: 252px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .buttonClose {
    position: absolute;
    top: 25px;
    right: 23px;
    background-color: transparent;
    border: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .descriptionModal {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
  }

  .button {
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
    padding: 15px 5px;
    width: 195px;
    height: 60px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    background-color: transparent;
    transition: box-shadow ${({ theme }) => theme.animations.transition},
      color ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  @media (max-width: 564px) {
  border-radius: 0;
  padding: 57px 19px 36px 19px;
  width: 374px;
  height: 198px;
  

  .buttonClose {
    position: absolute;
    top: 25px;
    right: 15px;
    
  }

  .descriptionModal {
    margin-bottom: 25px;
    font-size: 24px;
    line-height: 1.5;
  }

  .button {
    padding: 7px 5px;
    width: 100%;
    height: 44px;
    font-size: 24px;
    line-height: 1.20833;
  
  }

  }
`;
