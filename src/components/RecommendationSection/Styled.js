import styled from "styled-components";

export const StyledRecommendationSection = styled.section`
  position: relative;
  margin-bottom: 80px;

  .titleRecommendation {
    margin-bottom: 40px;
    font-family: ${({ theme }) => theme.fonts.fontNunito};
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .button-swiper {
    position: absolute;
    top: 0;
    right: 0;
    width: 132px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    padding: 10px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    border-radius: 8px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
`;
