import styled from "styled-components";

export const MobileStyledSortOrdersPanel = styled.div`
  .sortButton {
    border: none;
    border-radius: 8px;
    padding: 10px;
    height: 40px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    background: ${({ theme }) => theme.colors.primaryBgColor};
    color: ${({ theme }) => theme.colors.greyTxtColor};
  }

  .sortButton.active {
    box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .swiperCustomSorted {
    width: 100%;
    height: 44px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    width: auto;
  }

  .swiper-slideCustomSorted {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
