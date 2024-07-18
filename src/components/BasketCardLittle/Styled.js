import { styled } from "styled-components";

export const BasketItem = styled.li`
width: 316px;
    height: 109px;
    display: flex;
    gap: 14px;

     .image {
     border: 1px solid ${({ $borderColor }) => $borderColor || ""};
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }

  .wrapperContent {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .productName {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .spanId {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21429;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};
  }

  .spanSize {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21429;
    text-transform: capitalize;
  }

  .containerCounterPrice {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  .wrapperCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .buttonCount {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    width: 20px;
    height: 20px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .countQuantity {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21429;
  }

  .spanTotalPrice {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.accentColor};
  }

`