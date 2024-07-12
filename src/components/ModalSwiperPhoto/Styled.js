import { styled } from "styled-components";

export const WrapperModal = styled.div`
  width: 1200px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
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
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
  }

  .modalImg {
    height: auto;
    object-fit: contain;
    object-position: center center;
  }
`;
