import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 20px;
  top: 55px;

  width: 271px;
  height: auto;
  border-radius: 10px;
  padding: 10px 20px 20px 20px;

  z-index: 1111;

  background: ${({ theme }) => theme.colors.primaryBgColor};
  box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};

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
