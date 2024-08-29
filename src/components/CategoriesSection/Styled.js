import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  margin-bottom: 36px;

  .titleCategories {
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
  }

  .listCategories {
    display: flex;
    justify-content: space-between;
    gap: 46px;
  }

  .wrapperItem {
    border-radius: 10px;
    width: 300px;
    height: 413px;
    transition: ${({ theme }) => theme.animations.transition};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowCategory};
    }
  }

  .categoriesPhoto {
    margin-bottom: 37px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 300px;
  }

  .textCard {
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  /* =======Mobile - @media (max-width: 564px)======== */

  @media (max-width: 564px) {
    margin-bottom: 16px;

    .titleCategories {
      margin-bottom: 10px;
      font-size: 20px;
    }

    .listCategories {
      flex-wrap: wrap;
      gap: 15px;
    }

    .wrapperItem {
      /* width: 160px; */
      width:47%;
      height: 200px;
    }

    .categoriesPhoto {
      margin-bottom: 15px;
      height: 150px;
    }

    .textCard {
      font-size: 16px;
    }
  }
`;
