import { styled } from "styled-components";

export const ContainerModal = styled.div`
  position: relative;
  width: 380px;
  height: 478px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .containerCardBasket {
    padding: 25px 32px;
    width: 100%;
    height: 367px;
    overflow-y: auto;
  }

  /* Стилізація вертикальної смужки прокрутки */
  .containerCardBasket::-webkit-scrollbar {
    width: 5px;
    height: 129px;
  }

  /* Колір фону смужки прокрутки  */
  .containerCardBasket::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Колір самої смужки прокрутки  */
  .containerCardBasket::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 10px;
  }

  

  .containerPriceLink {
    position: absolute;
    top: 75%;
    left: 0;

    padding: 16px 30px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 380px;
    height: 122px;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .wrapperPrice {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  }

  .spanSum {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .spanNum {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .buttonModal {
    border: transparent;
    border-radius: 5px;
    padding: 5px 5px;
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.accentColor};

    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
    transition: background ${({ theme }) => theme.animations.transition},
      box-shadows ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.activeBgColor};
    }
  }


`;
