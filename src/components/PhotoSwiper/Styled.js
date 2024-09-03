import { styled } from "styled-components";

export const WrapperPhoto = styled.div`

  .swiperCustom {
    position: relative;
    min-width: 325px;
    height: 300px;
  }

  .swiper-slideCustom{
     min-width: 325px;
  }

  .swiper-pagination{
    
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

  .styledPhoto {
    border-radius: 10px;
    min-width: 325px;
    width:100%;
    height: 300px;
  }
`;