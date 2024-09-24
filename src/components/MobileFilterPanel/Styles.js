import styled from "styled-components";

export const StyledMobileFiltersPanel = styled.div`
  position: fixed;
  z-index: 11;

  top: 0%;
  left: 0;

  width: 100vw;
  min-height: 478px;

  box-shadow: 5px 5px 10px 0 ${({ theme }) => theme.colors.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  /* font-family: ${({ theme }) => theme.fonts.familyPacifico}; */
  /* color: ${({ theme }) => theme.colors.primaryTxtColor}; */

  .closeFiltersBtn {
    position: absolute;

    top: 10px;
    right: 10px;

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
`;
