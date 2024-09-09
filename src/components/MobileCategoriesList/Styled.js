import styled from "styled-components";

export const StyledMobileCategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .category {
    /* position: relative; */
  }

  .categoryBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 24px;

    border: none;
    background: transparent;
  }

  .categoryBtnIcon {
    width: 24px;
    height: 24px;
  }

  .openCategoryBtnIcon{
    transform: rotate(-180deg);
  }

  .categoryBtnLabel {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    margin-bottom: 10px;
  }

  .openCategoryBtnLabel{
     color: ${({ theme }) => theme.colors.accentColor};
  }

  .subCategoriesWrapper {
    display: none;
  }

  .subCategoriesWrapper.openedCategory {
    /* z-index: 1; */

    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;

    background: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .subCategory {
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    margin-bottom: 5px;
  }
`;
