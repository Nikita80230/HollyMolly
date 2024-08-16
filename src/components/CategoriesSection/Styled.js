import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  margin-bottom: 36px;

  @media (max-width: 375px) {
    margin-bottom: 16px;
  }

  .titleCategories {
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;

    @media (max-width: 375px) {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }

  .listCategories {
    display: flex;
    justify-content: space-between;
    gap: 46px;

    @media (max-width: 375px) {
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  .wrapperItem {
    border-radius: 10px;
    width: 300px;
    height: 413px;
    transition: ${({ theme }) => theme.animations.transition};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowCategory};
    }

    @media (max-width: 375px) {
      width: 160px;
      height: 200px;
    }
  }

  .categoriesPhoto {
    margin-bottom: 37px;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 300px;

    @media (max-width: 375px) {
      margin-bottom: 15px;
      height: 150px;
    }
  }

  .textCard {
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    @media (max-width: 375px) {
      font-size: 16px;
    }
  }
`;
