import { styled } from "styled-components";

export const StyledCategoriesSection = styled.section`
  margin-bottom: 36px;

  .titleCategories {
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    margin-bottom: 36px;
    font-weight: 500;
    font-size: 40px;
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
`;
