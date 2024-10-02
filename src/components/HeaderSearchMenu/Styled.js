import styled from "styled-components";

export const StyledHeaderSearchMenu = styled.div`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translateX(-50%);

  z-index: 1;

  width: 100%;

  /* max-height: 485px; */
  height: 100vh;

  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .searchMenuTop {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */

    min-height: 120px;

    padding: 33px 0;
  }
  .searchMenuLogo {
    padding: 15px;
    margin: 0 0 auto;
    margin-right: 60px;
  }

  .searchMenuForm {
    display: flex;
    flex-direction: column;
    gap: 30px;

    max-width: 866px;
    width: 100%;

    margin: 20px 0;
    margin-right: auto;
  }

  .inputGroup {
    display: flex;
    align-items: center;

    /* margin: auto 0; */

    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .searchMenuList {
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    height: 240px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 2px;
      background: #264061;
    }
  }

  .searchMenuItem {
    margin-bottom: 16px;
  }

  .searchMenuItemLink {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .searchMenuItemText {
  }

  .searchIcon {
    margin-right: 18px;
  }

  .searchMenuInput {
    width: 100%;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
  /* .searchMenuLogoIcon {
  } */

  .closeSearchMenuBtn {
    border: none;
    background: transparent;
    padding: 15px;
    margin-bottom: auto;
  }
  .closeSearchMenuIcon {
    display: block;
  }

  /* =====================================================@media (max-width: 564px)=========================================================== */

  @media (max-width: 564px) {
    position: fixed;

    top: 0;
    left: 0;

    transform: unset;

    z-index: 13;

    width: 100vw;

    /* max-height: 485px; */
    height: 260px;

    border-radius: 0;
    box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};
    background: ${({ theme }) => theme.colors.primaryBgColor};

    .searchMenuTop {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      gap: 10px;

      min-height: 41px;

      padding: 10px 20px;
    }
    .searchMenuLogo {
      display: none;

      padding: 15px;

      margin-right: 60px;
    }

    .searchMenuForm {
      gap: 0px;
      margin: 0px;
      /* display: flex;
      flex-direction: column;

      max-width: 866px;
      width: 100%;

      margin-right: auto; */
    }

    .inputGroup {
      margin-bottom: 16px;
    }

    .searchMenuList {
      height: 170px;
    }

    .searchMenuItem {
      margin-bottom: 16px;
    }

    .searchMenuItemLink {
      font-size: 14px;
      line-height: 1.21429;
    }

    .searchMenuItemText {
    }

    .searchIcon {
      margin-right: 18px;
    }

    .searchMenuInput {
      width: 100%;

      font-size: 14px;
      line-height: 1.21429;
    }

    .closeSearchMenuBtn {
      padding: 11px 0 0 0;
    }
    .closeSearchMenuIcon {
      width: 17px;
      height: 17px;
    }
  }
`;
