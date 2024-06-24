import styled from "styled-components";

export const StyledCategoriesModal = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  /* max-width: 654px; */
  width: 100vw;
  height: 100vh;

  z-index: 1;

  .categoriesModal {
    position: relative;
    z-index: 2;

    top: 9.5%;
    left: 0;

    max-width: 882px;
    width: 100%;
    height: 281px;

    padding: 30px 50px 50px 50px;
    border-radius: 10px;
    box-shadow: 10px 10px 20px 0 #a88465;
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
    margin-bottom:20px;
    font-family: ${({theme})=> theme.fonts.familyPacifico};
font-weight: 400;
font-size: 28px;
line-height: 1.21429;
text-align: center;
color: ${({ theme }) => theme.colors.accentColor};
white-space:nowrap;
  }

  .categoryGroupList {
    display: flex;
    flex-direction: column;

    /* max-height: 89px; */
    height: 100%;

    width: 100%;
  }

  .subCategoryLink {
  
font-weight: 400;
font-size: 30px;
text-align: center;
color:${({theme})=>theme.colors.primaryTxtColor}
  }

  .subCategoryLink:not(:last-child) {
    margin-bottom: 15px;
  }

  .subCategoryLink:hover,
  .subCategoryLink:focus {
    color: #3251ae;
  }
`;
