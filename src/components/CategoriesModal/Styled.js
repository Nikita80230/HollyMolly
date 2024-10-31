import styled from "styled-components";

export const StyledCategoriesModal = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;

  .categoriesModal {
    position: relative;
    z-index: 2;

    top: 70px;
    left: 0;

    max-width: 882px;
    width: 100%;
    height: 288px;

    padding: 30px 50px 50px 50px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadows.boxShadowCategoryModal};
    background: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .categoriesList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }

  .categoryGroup {
    display: flex;
    flex-direction: column;

    max-width: 168px;
    width: 100%;
    height: 208px;
  }

  .categoryGroupTitle {
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentColor};
    white-space: nowrap;
  }

  .categoryGroupList {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .categoryItem:not(:last-child) {
    margin-bottom: 8px;
  }

  .subCategoryLink {
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

 

  .subCategoryLinkContent {
    border-radius: 8px;
    padding: 5px 10px;
    width: 168px;
    height: 46px;
    transition: box-shadow ${({ theme }) => theme.animations.transition};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }
  }

  @media (max-width: 768px) {
    .categoriesModal {
      top: 50px;

      max-width: 720px;
      width: 100%;
      height: 229px;

      padding: 32px;
    }

    .categoryGroup {
      max-width: 146px;

      height: 165px;
    }

    .categoryGroupTitle {
      font-size: 24px;
      line-height: 1.16667;
    }

    .subCategoryLink {
      font-size: 24px;
      line-height: 1.20833;
    }

    .categoryItem:not(:last-child) {
    margin-bottom: 0px;
  }

    .subCategoryLinkContent {
      padding: 0px 10px;
      width: 146px;
      height: 44px;
      transition: box-shadow ${({ theme }) => theme.animations.transition};
      &:hover,
      &:focus,
      &:active  {
        box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
      }
    }
  }
`;
