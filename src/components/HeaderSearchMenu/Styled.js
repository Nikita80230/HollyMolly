import styled from "styled-components";

export const StyledHeaderSearchMenu = styled.div`
  position: absolute;

  top: 0;
  left: 50%;

  transform: translateX(-50%);

  z-index: 1;

  /* max-width: 1240px; */
  width: 100%;

  max-height: 485px;
  height: 100vh;

  background-color: #fff;
  .searchMenuTop {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;

    min-height: 120px;

    /* padding: 33px 0; */
  }
  .searchMenuLogo {
    margin-right: 60px;
  }

  .inputGroup {
    display: flex;
    align-items: center;

    max-width: 866px;
    width: 100%;

    margin-right: auto;

    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverInput};
  }

  .searchIcon {
    margin-right: 18px;
  }

  .searchMenuInput {
    /* background: red; */

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.inputFocus};
  }
  .searchMenuLogoIcon {
  }
  .closeSearchMenuBtn {
    border: none;
    background: transparent;
    padding: 15px;
  }
  .closeSearchMenuIcon {
    display: block;
  }
`;
