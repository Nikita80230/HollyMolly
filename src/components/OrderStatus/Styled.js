import styled from "styled-components";

export const StyledOrderStatus = styled.div`
  .orderStatusTitle {
    margin-bottom: 20px;

    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    /* text-align: center; */
    color: ${({ theme }) => theme.colors.titleCardProduct};
  }
  .orderStatusList {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .orderStatusItem {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 20px;
  }
  .iconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
  .statusText {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    .statusData {
      margin-left: 5px;
    }
  }
`;
