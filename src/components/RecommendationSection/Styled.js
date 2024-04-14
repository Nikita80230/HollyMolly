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
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderButton};
    border-radius: 8px;
  }
  .nextProductBtn:after,
  .prevProductBtn:after {
    display: none;
  }
  .prevProductBtn.swiper-button-disabled,
  .nextProductBtn.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
`;
