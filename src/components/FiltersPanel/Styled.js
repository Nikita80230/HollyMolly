import styled from "styled-components";

export const StyledFiltersPanel = styled.div`
  .title {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 32px;
    text-align: left;
    color: #000;
  }

  .priceFilter {
    margin-bottom: 32px;
  }

  .priceFilterTitle {
    margin-bottom: 32px;
  }

  .minPriceLabel,
  .maxPriceLabel {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
  }
  .priceLabels {
    display: flex;
    justify-content: space-between;
  }
`;
