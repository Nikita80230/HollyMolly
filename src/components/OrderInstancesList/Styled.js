import styled from "styled-components";

export const StyleOrderInstancesList = styled.div`
  margin-top: 25px;
  margin-bottom: 76px;

  .ordersList {
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 929px;
    width: 100%;
    height: 429px;

    overflow-y: auto;

    margin-bottom: 20px;
    padding: 27px;

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

  /* font-family: ${({ theme }) => theme.fonts.familyDidact};
  color: ${({ theme }) => theme.colors.primaryTxtColor}; */
`;
