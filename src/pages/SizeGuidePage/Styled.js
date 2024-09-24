import { styled } from "styled-components";

export const StyledSection = styled.section`
  padding: 36px 0 320px 0;

  .wrapperTables {
    margin-top: 14px;
    display: flex;
    gap: 134px;
  }

  .title {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
  }

  .containerSizes {
    display: flex;
    flex-direction: column;
    width: 190px;
  }

  .textSize {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
  }

  .styledTable {
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    border-collapse: collapse;
  }

  .headerCell {
    padding-right: 16px;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    text-align: left;
  }

  .dataCell {
    padding: 3px 16px 0 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.20833;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  @media (max-width: 564px) {
    padding: 24px 0 16px 0;

    .wrapperTables {
      margin-top: 6px;
      flex-direction: column;
      gap: 24px;
    }

    .title {
      font-size: 24px;
      line-height: 1.20833;
    }

    .containerSizes {
      width: 100%;
    }

    .textSize {
      font-size: 16px;
      line-height: 1.25;
    }

    .headerCell {
      padding-right: 56px;
      font-size: 16px;
      line-height: 1.25;
    }

    .dataCell {
      padding: 3px 16px 10px 2px;
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
