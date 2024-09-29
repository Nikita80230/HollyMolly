import styled from "styled-components";

export const StyledSortingPanel = styled.div`
  margin-bottom: 19px;
  display: flex;
  gap: 22px;

  .titleSorting {
    font-weight: 400;
    font-size: 30px;
    text-align: center;
  }

  .css-1u9des2-indicatorSeparator {
    width: 0;
  }

  .css-tj5bde-Svg {
    fill: #000;
  }

  @media (max-width: 564px) {
    .titleSorting {
      display: none;
    }
    .css-1lv107v-control {
      width: 150px;

      margin-bottom: 0;

      padding-left: 0;
      padding-right: 0;
    }

    .css-6j6wwd-placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.21429;
      text-align: center;

      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
