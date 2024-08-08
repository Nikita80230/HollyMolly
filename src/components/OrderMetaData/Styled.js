import styled from "styled-components";

export const StyledOrderMetaData = styled.div`
  .breadcrumbs {
    display: flex;
    flex-direction: row;
    gap: 24px;

    padding-top: 36px;
    margin-bottom: 20px;
  }

  .backButton {
    position: relative;

    border: none;
    background: transparent;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    &::after {
      content: "|";
      position: absolute;
      right: -12px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .currentOrderNumber {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.secondaryTxtColor};

    pointer-events: none;
  }
  .orderTitleWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .orderTitle {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;

    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .orderDate {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
  .orderStatus {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 200px;
    width: 100%;
    min-height: 43px;

    padding: 5px;

    border-radius: 5px;

    background: ${({ theme }) => theme.colors.colorBgSpanDiscount};

    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
