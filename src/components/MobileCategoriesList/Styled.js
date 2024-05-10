import styled from "styled-components";

export const StyledMobileCategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding-bottom: 36px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerBurgerMenu};

  .category {
    /* position: relative; */
  }

  .categoryBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 27px;

    border: none;
    background: transparent;
  }

  .categoryBtnLabel {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.headerSearchMenuList};
  }

  .subCategoriesWrapper {
    display: none;

    /* position: absolute; */
    /* top: 36px;
    left: 6px; */
  }

  .subCategoriesWrapper.openedCategory {
    /* z-index: 1; */

    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    background: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;
