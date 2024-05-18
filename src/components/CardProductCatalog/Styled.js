import { styled } from "styled-components";

export const WrapperCard = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid #e2e2e2;
  width: 310px;
  height: 603px;
  transition: opacity ${({ theme }) => theme.animations.transition},
    transform ${({ theme }) => theme.animations.transition};

  .iconHeart {
    display: none;
  }

  .iconBasket {
    display: none;
  }

  &:hover {
    .iconHeart {
      display: block;
    }
    .iconBasket {
      display: block;
    }
  }

  .styledSpan {
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 23px;
    padding: 5px 8px;
    width: 79px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanNovelty};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.spanTextColor};
  }

  .styledSpanDiscount {
    position: absolute;
    top: 16px;
    left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    padding: 5px 8px;
    width: 48px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.colorBgSpanDiscount};
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 800;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.spanTextColor};
  }

  .productPhoto {
    margin-bottom: 41px;
  }

  .title {
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.titleCardProduct};
  }

  .price {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 14px;
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.colorPrice};
  }

  .priceAfterDiscount {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorPriceSecondary};
  }

  .buttonsFeedback {
    display: flex;
    gap: 12px;
  }

  .buttonColor {
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borderButtonColor};
    width: 14px;
    height: 14px;
  }

  .wrapperFeedback {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .spanFeedback {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 500;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.titleCardProduct};
  }

  .wrapperColorsFeedbackHeart {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrapperPriceIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
