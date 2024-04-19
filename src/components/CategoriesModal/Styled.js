import styled from "styled-components";

export const StyledCategoriesModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(33, 33, 33, 0.12);

  z-index: 1;

  .categoriesModal {
    position: absolute;
    position: absolute;
    top: 38%;
    left: 35%;
    transform: translate(-61%, -50%);

    z-index: 2;

    max-width: 654px;
    width: 100%;
    height: 318px;

    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
  }

  .categoriesModalTitle {
    width: auto;

    margin-bottom: 25px;

    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 600;
    font-size: 32px;
    color: #000105;
  }

  .categoriesList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    /* padding: 12px 0; */
  }

  .categoryGroup {
    display: flex;
    flex-direction: column;

    max-width: 120px;
    width: 100%;
    height: 162px;
  }

  .categoryGroupTitle {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 300;
    font-size: 17px;
    color: #000105;

    padding: 3px;
    margin-bottom: 24px;

    border-bottom: 1px solid rgba(0, 1, 5, 0.4);
  }

  .categoryGroupList {
    display: flex;
    flex-direction: column;

    max-height: 89px;
    height: 100%;

    width: 100%;
  }

  .subCategoryLink {
    font-family: ${({ theme }) => theme.fonts.familyRoboto};
    font-weight: 400;
    font-size: 15px;
    color: #000105;
  }

  .subCategoryLink:not(:last-child) {
    margin-bottom: 10px;
  }

  .subCategoryLink:hover,
  .subCategoryLink:focus {
    color: #3251ae;
  }
`;
