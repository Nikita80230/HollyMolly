import { styled } from "styled-components";

export const BasketItem = styled.li`
  margin-bottom: 31px;

  .wrapperCardBasket {
    display: flex;
    /* width: 729px; */
  }

  .basketPhoto {
    margin-right: 28px;
    border: 2px solid ${({ $borderColor }) => $borderColor || ""};
    border-radius: 10px;
    width: 160px;
    height: 160px;
  }

  .wrapperBox {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .boxNameDelete {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .nameProduct {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .buttonTrash {
    border: transparent;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .spanId {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};
  }

  .spanSize {
    margin-bottom: 5px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    text-transform: capitalize;
  }

  .containerColor {
    margin-bottom: 5px;
    display: flex;
    gap: 7px;
  }

  .spanColor {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .wrapperColor {
    width: 24px;
    height: 25px;
    border: 0.5px solid ${({ theme }) => theme.colors.borderColorActive};
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color {
    border-radius: 2px;
    width: 20px;
    height: 20px;
  }

  .wrapperCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .wrapperCountPrice {
    display: flex;
    justify-content: space-between;
  }

  .buttonCount {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    background-color: transparent;
  }

  .icon {
    width: 12px;
    height: 12px;
  }
  .countQuantity {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .priceBasket {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
