import styled from "styled-components";

export const StyledOrderStatus = styled.div`
  .orderStatusTitle {
    margin-bottom: 20px;

    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
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
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 25px;
      background: ${({ theme }) => theme.colors.primaryBgColor};
      border-left: 1px dotted ${({ theme }) => theme.colors.accentColor};
    }
  }

  .orderStatusItem:last-child .iconWrapper::after {
    display: none;
  }

  .icon {
    path {
      fill: ${({ theme }) => theme.colors.whiteTxtColor};
    }
  }
  .statusText {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    white-space:nowrap;
    .statusData {
      margin-left: 5px;
    }
  }

  @media (max-width: 564px) {
    .orderStatusTitle {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 1.2;
      text-decoration: underline;
      text-decoration-skip-ink: none;
    }

    .statusData {
      margin-left: 5px;
    }
  }
`;
