import styled from "styled-components";

export const StyledPriceRangeSlider = styled.div`
  .range-slider-yellow .range-slider__range {
    height: 5px;
    background: ${({ theme }) => theme.colors.accentColor};
    transition: height 0.3s;
  }
  .range-slider-yellow .range-slider__thumb {
    border-radius: 2px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.accentColor};
    transition: transform 0.3s;
  }

  .rangeSlider {
    margin-bottom: 17px;
  }
  .priceLabels {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .priceLabel {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
  }

  .priceInputs {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 31px;
  }

  .priceInput {
    display: flex;
    max-width: 61px;
    width: 100%;
    min-height: 39px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    text-align: center;
  }

  .divider {
    max-width: 15px;
    width: 100%;
    height: 0px;

    border: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};
  }

  /* =======================================@media (max-width: 564px)============================================== */

  @media (max-width: 564px) {
    .priceLabels {
      margin-bottom: 12px;
    }

    .priceInput {
      max-width: 45px;
      min-height: 25px;
      font-size: 14px;
    }
  }
`;
