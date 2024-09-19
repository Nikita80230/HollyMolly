import styled from "styled-components";

export const StyleOrderInstancesList = styled.div`
  margin-top: 25px;
  margin-bottom: 76px;

  .ordersList {
    display: flex;
    flex-direction: column;
    gap: 23px;

    max-width: 929px;
    width: 100%;
    height: 429px;

    overflow-y: auto;

    margin-bottom: 20px;
    padding: 30px 35px;

    border-radius: 10px;

    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background: ${({ theme }) => theme.colors.primaryBgColor};

    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px transparent;
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .sumWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 50px;
  }

  .sumText {
    font-weight: 400;
    font-size: 20px;
    line-height: 1;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .sumQuantity {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.7;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  @media (max-width: 564px) {
    margin-top: 29px;
    margin-bottom: 24px;

    .ordersList {
      gap: 24px;

      max-width: 564px;
      width: 100%;
      height: auto;

      overflow-y: visible;

      margin-bottom: 24px;
      padding: 0;

      border-radius: 0;

      border: 1px solid transparent;

      overflow-y: visible;
    }

    .sumWrapper {
      justify-content: space-between;
      gap: 0;
    }

    .sumText {
      line-height: 1.2;
    }

    .sumQuantity {
      font-size: 24px;
      line-height: 1.16667;
    }
  }
`;
