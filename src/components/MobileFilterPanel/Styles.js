import styled from "styled-components";

export const StyledMobileFiltersPanel = styled.div`
  position: fixed;
  z-index: 11;

  top: 0%;
  left: 0;

  width: 100vw;
  height: 100vh;

  /* padding: 20px; */

  /* box-shadow: 5px 5px 10px 0 ${({ theme }) =>
    theme.colors.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  overflow-y: scroll; */

  .mobileFiltersPanel {
    width: 100%;
    height: 478px;

    padding: 20px;

    box-shadow: 5px 5px 10px 0
      ${({ theme }) => theme.colors.boxShadowLeaveReview};
    background: ${({ theme }) => theme.colors.primaryBgColor};

    overflow-y: scroll;
  }

  .closeFiltersBtn {
    position: absolute;

    top: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
  }
  .closeFiltersBtnIcon {
    display: block;
    /* width: 13px; */
  }

  .filtersPanelTitle {
    margin-bottom: 16px;

    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;

    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .priceFilter {
    margin-bottom: 23px;
  }

  .priceFilterTitle {
    margin-bottom: 24px;
  }
`;
