import styled from "styled-components";

export const StyledSubcategoriesList = styled.div`
  margin-bottom: 64px;

  .title {
    margin-bottom: 12px;
    text-align: left;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 32px;
    color: #000;
  }
  .subcategoriesList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 17px;
  }
  .subCategoryItem {
    max-width: 421px;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
  }
  .subCategoryLink {
  }
  .subCategoryContent {
    position: relative;
    overflow: hidden;
  }

  .subCategoryContent:hover {
    .titleOverlay {
      opacity: 1;
    }

    .subCategoryImg {
      transform: scale(1.2);
    }
  }

  .subCategoryImg {
    width: 100%;
    max-height: 251px;

    transform: scale(1);
    transition: ${({ theme }) => theme.animations.transition};
  }
  .titleOverlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;

    /* z-index: -1; */

    width: 100%;
    min-height: 100%;

    background-color: ${({ theme }) => theme.colors.subCategoryHover};

    transition: ${({ theme }) => theme.animations.transition};
  }

  .subCategoryTitle {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: #fff;
  }
`;
