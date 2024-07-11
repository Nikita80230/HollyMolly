import { styled } from "styled-components";

export const WrapperModal = styled.div`
 width:1200px;
 height: 600px;
 background-color:white;
 border-radius: 10px;

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
    border: 5px solid ${({ theme }) => theme.colors.borderProductPhoto};
    border-radius: 10px;
  }

   .modalImg {
    height: auto;
    object-fit: contain;
    object-position: center center;
  }
  `