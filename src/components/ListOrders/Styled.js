import { styled } from "styled-components";

export const StyledListOrders = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .orderItem {
    padding: 28px 30px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 926px;
    height: 184px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .containerSpans {
    display: flex;
    justify-content: space-between;
  }

  .orderNumber {
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;
  }

  .date {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }

  .wrapperStatus {
    padding: 7px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    background: #eff9f1;
    border-radius: 5px;
  }

  .spanStatus {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;
  }

  .price {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .link {
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
    padding: 5px 5px;

    height: 40px;
    font-family: ${({ theme }) => theme.fonts.familyGaramont};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;

    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
