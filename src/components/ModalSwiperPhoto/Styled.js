import { styled } from "styled-components";

export const WrapperModal = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  /* background-color: ${({ theme }) => theme.colors.primaryBgColor}; */
  border-radius: 10px;

  .buttonSwiper {
    position: absolute;
    top: 370px;
    left: -75px;
    z-index: 1111111;

    display: flex;
    align-items: center;
    gap: 830px;
  }

  .nextProductBtn,
  .prevProductBtn {
    border-radius: 10px;
    padding: 18px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: transparent;
  }

  .iconSwiper {
    path {
      fill: ${({ theme }) => theme.colors.whiteTxtColor};
    }
  }

  .nextProductBtn:after,
  .prevProductBtn:after {
    display: none;
  }
  .prevProductBtn.swiper-button-disabled,
  .nextProductBtn.swiper-button-disabled {
    border: transparent;
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }

  .mySwiper {
    width: 100%;
    height: 100%;
  }

  .swiperSlide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px; */
  }

  .modalImg {
    width: 800px;
    height: 800px;
    border-radius: 10px;
    object-position: center center;
  }
`;
