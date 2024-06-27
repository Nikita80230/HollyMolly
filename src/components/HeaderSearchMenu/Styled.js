import styled from "styled-components";

export const StyledHeaderSearchMenu = styled.div`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translateX(-50%);

  z-index: 1;

  width: 100%;

  max-height: 485px;
  height: 100vh;

  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .searchMenuTop {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    min-height: 120px;

    padding: 33px 0;
  }
  .searchMenuLogo {
    padding: 15px;

    margin-right: 60px;
  }

  .searchMenuForm {
    display: flex;
    flex-direction: column;

    max-width: 866px;
    width: 100%;

    margin-right: auto;
  }

  .inputGroup {
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .searchMenuList {
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    height: 340px;
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
    /* background: red; */

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
  }
  .closeSearchMenuIcon {
    display: block;
  }
`;
