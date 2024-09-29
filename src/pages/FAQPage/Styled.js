import { styled } from "styled-components";

export const StyledSection = styled.section`
  padding-bottom: 142px;

  .styledTitle {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 48px;
    line-height: 1.16667;
    width: 664px;
    height: 70px;

    background: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .list {
    padding-top: 16px;
    width: 48%;
  }

  .item {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  .wrapperTitle {
    padding: 16px 0 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
  }

  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 1.2;
  }

  .buttonWrapper {
    border: transparent;
    background-color: transparent;
  }

  .iconPlus {
    width: 14px;
    height: 14px;
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .iconClose {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .containerDesc {
    margin-bottom: 10px;
    width: 95%;
  }

  .description {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  @media (max-width: 564px) {
    padding-bottom: 0;

    .styledTitle {
      font-size: 32px;
      line-height: 1.1875;
      width: 100%;
      height: 86px;
    }

    .list {
      padding-top: 14px;
      width: 100%;
    }

    .wrapperTitle {
      padding: 10px 0 5px 0;
      height: 58px;
    }

    .title {
      font-size: 20px;
    }

    .iconPlus {
      width: 8px;
      height: 8px;
    }

    .iconClose {
      width: 16px;
      height: 16px;
    }

    .description {
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
