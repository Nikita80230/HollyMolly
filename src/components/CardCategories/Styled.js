import { styled } from "styled-components";

export const StyledCardCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  transition: background-color ${({ theme }) => theme.animations.transition};
  &:hover,
  &:focus {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.cardSwiperBg};
  }

  @media only screen and (min-width: 768px) {
    border-radius: 14px;
  }

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
  }

  .swiper-picture {
    margin-bottom: 8px;
    width: 100%;
    height: 134px;
    border-radius: 20px;

    @media only screen and (min-width: 768px) {
      border-radius: 14px;
      width: 100%;
      height: 121px;
    }

    @media only screen and (min-width: 1440px) {
      width: 310px;
      height: 216px;
      margin-bottom: 53px;
      border-radius: 20px;
    }
  }

  .textCard {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textCard};

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;
