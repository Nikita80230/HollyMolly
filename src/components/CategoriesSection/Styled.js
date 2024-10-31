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

  .swiperCategories {
    margin-right: -20px;
    height: auto;
  }

  @media (max-width: 1239px) {
    margin-bottom: 40px;
    .titleCategories {
      margin-bottom: 24px;
      font-size: 30px;
    }

    .swiper-slideCategories {
      width: 240px;
      height: 300px;
      border-radius: 15px;
    }

    .categoriesPhoto {
      margin-bottom: 22px;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 225px;
    }

    .textCard {
      font-size: 24px;
      line-height: 1.25;
    }
  }

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
      width: 47%;
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
