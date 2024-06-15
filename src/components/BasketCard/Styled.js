import { styled } from "styled-components";

export const BasketItem = styled.li`
  margin-bottom: 80px;
  .wrapperCardBasket {
    display: flex;
    gap: 40px;
  }
  .wrapperPhoto {
    border-radius: 25px;
    width: 200px;
    height: 200px;
    background: #d9d9d9;
  }

  .wrapperBox {
    display: flex;
    flex-direction: column;
  }

  .boxNameDelete {
    display: flex;
    justify-content: space-between;
    width: 516px;
  }

  .buttonTrash {
    border: transparent;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }
  .spanColor {
    margin-bottom: auto;
  }

  .wrapperCounter {
    display: flex;
    gap: 16px;
  }
  .wrapperCountPrice {
    display: flex;
    justify-content: space-between;
  }
`;
