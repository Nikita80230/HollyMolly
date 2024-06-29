import styled from "styled-components";

export const StyledFiltersPanel = styled.div`
  position: relative;

  .title {
font-weight: 400;
font-size: 36px;
line-height: 1.22222;

  }

  .priceFilter {
    margin-bottom: 36px;
  }

  .priceFilterTitle {
    margin-bottom: 36px;
  }

  .minPriceLabel,
  .maxPriceLabel {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
  }

  /* ----------colors---------- */
`;
