import { styled } from "styled-components";

export const StyledListOrders = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .orderItem {
    padding: 28px 30px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 100%;
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
    width:198px;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.familyGaramont};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;

    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
  .iconDetails {
    display:none;
  }

  @media (max-width: 564px) {
    gap: 16px;

    .orderItem {
      padding: 22px 12px;
      height: 135px;
      /* gap: 12px; */
      gap: 0;
    }

    .containerSpans {
      margin-bottom: 5px;
    }

    .orderNumber {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
    }

    .date {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 1.25;
    }

    .wrapperStatus {
      padding: 5px 14px;
      height: 30px;
    }

    .spanStatus {
      font-size: 16px;
      line-height: 1.25;
    }

    .price {
      font-size: 20px;
      line-height: 1.2;
    }

    .link {
      border: transparent;
      padding: 0;
      width: 30px;
      height: 28px;
    }

    .spanDetails {
      display: none;
    }

    .iconDetails {
      display: block;
      width: 24px;
      height: 24px;
      path {
        fill: ${({ theme }) => theme.colors.primaryTxtColor};
      }
    }
  }
`;
