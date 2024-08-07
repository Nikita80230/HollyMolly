import styled from "styled-components";

export const StyledOrderDetails = styled.div`
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
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.secondaryTxtColor};
    pointer-events: none;
  }
`;
