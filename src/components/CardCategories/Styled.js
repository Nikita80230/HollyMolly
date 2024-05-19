import { styled } from "styled-components";

export const StyledCardCategories = styled.div`
  text-align: center;
  width: 135px;
  height: 158px;
  border-radius: 18px;
  transition: background-color ${({ theme }) => theme.animations.transition};
  &:hover,
  &:focus {
    padding: 10px;
    width: 171px;
    background-color: ${({ theme }) => theme.colors.cardSwiperBg};
  }

  @media only screen and (min-width: 375px) {
    width: 164px;
  }

  @media only screen and (min-width: 768px) {
    width: 310px;
    height: 294px;
      border-radius: 16px;
    &:hover,
    &:focus {
      width: 330px;
       height: 314px;
    }
  }

  .swiper-picture {
    margin-bottom: 8px;
    width: 100%;
    height: 134px;
    border-radius: 20px;

    @media only screen and (min-width: 768px) {
      width: 310px;
      height: 216px;
      margin-bottom: 53px;
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
