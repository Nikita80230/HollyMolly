import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 64px;

  width: 100vw;
  height: calc(100vh - 64px);

  padding-top: 25px;

  /* border: 2px solid red; */

  z-index: 10;

  background: ${({ theme }) => theme.colors.primaryBgColor};

  .accountLink {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 36px;
    padding-bottom: 36px;
    margin-bottom: 36px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerBurgerMenu};
  }

  .userAccountIcon {
    margin: 6px 14px 6px 6px;
  }
  .userName {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 600;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.headerSearchMenuList};
  }
  .burgerMenuBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 36px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 16px;

    max-width: 93px;
    width: 100%;
  }

  .link {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.headerSearchMenuList};
  }
`;
