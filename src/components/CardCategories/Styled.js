import { styled } from "styled-components";

export const StyledCardCategories = styled.div`
  text-align: center;
  height: 166px;

  @media only screen and (min-width: 768px) {
    height: 294px;
  }

  .swiper-picture {
    margin-bottom: 16px;
    width: 128px;
    height: 134px;
    border-radius: 20px;

    @media only screen and (min-width: 768px) {
      width: 310px;
      height: 216px;
      margin-bottom:53px;
    }
  }

  .textCard {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textCard};

    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
