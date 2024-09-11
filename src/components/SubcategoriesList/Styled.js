import styled from "styled-components";

export const StyledSubcategoriesList = styled.div`
  margin-bottom: 87px;

  .title {
    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
  }
  .subcategoriesList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 54px;
  }
  .subCategoryItem {
    max-width: 410px;
    width: 100%;
    height: 413px;
    /* overflow: hidden; */
    border-radius: 10px;
  }
  /* .subCategoryLink {
  }
  .subCategoryContent {
    position: relative;
    overflow: hidden;
  } */

  /* .subCategoryContent:hover {
    .titleOverlay {
      opacity: 1;
    } */

  /* .subCategoryImg {
      transform: scale(1.2);
    }
  } */

  .subCategoryImg {
    margin-bottom: 37px;
    width: 100%;
    max-height: 300px;
    border-radius: 10px 10px 0 0;

    /* transform: scale(1);
    transition: ${({ theme }) => theme.animations.transition}; */
  }
  /* .titleOverlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;

    /* z-index: -1; */

  /* width: 100%;
    min-height: 100%;

    background-color: ${({ theme }) => theme.colors.subCategoryHover};

    transition: ${({ theme }) => theme.animations.transition};
  }  */

  .subCategoryTitle {
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  @media (max-width: 564px) {
    .title {
      margin-bottom: 16px;

      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }

    .subcategoriesList {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 54px;
    }
    .subCategoryItem {
      max-width: 410px;
      width: 100%;
      height: 200px;
      /* overflow: hidden; */
      border-radius: 10px;
    }
    .subCategoryImg {
      margin-bottom: 0;
      height: 150px;
    }
    .subCategoryTitle {
      margin: 15px auto;

      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
