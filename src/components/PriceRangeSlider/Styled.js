import styled from "styled-components";

export const StyledPriceRangeSlider = styled.div`
  .range-slider-yellow .range-slider__range {
    background: #939fdf;
    transition: height 0.3s;
  }
  .range-slider-yellow .range-slider__thumb {
    background: #939fdf;
    transition: transform 0.3s;
  }

  .rangeSlider {
    margin-bottom: 17px;
  }
  .priceLabels {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
  }
  .priceLabel {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    color: #000;
  }

  .priceInputs {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 14px;
  }

  .priceInput {
    display: flex;

    max-width: 80px;
    width: 100%;
    min-height: 40px;

    padding-left: 19px;

    border: 1px solid #a1a1a2;
    border-radius: 20px;
  }

  .divider {
    max-width: 18px;
    width: 100%;
    height: 0px;

    border: 1px solid #4c4c4d;
  }
`;
