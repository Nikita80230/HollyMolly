import { styled } from "styled-components";

export const WrapperPage = styled.section`
  padding-top: 36px;
  margin-bottom: 121px;

  .wrapperFormList {
    display: flex;
    justify-content: space-between;
  }

  .basketContainer {
    /* padding: 27px 32px 16px 32px; */
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 380px;
    height: 457px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 48px; */
  }

  .containerList {
    padding: 27px 32px 0 32px;
    width: 380px;
    height: 250px;
    overflow-y: auto;
  }

  .containerList::-webkit-scrollbar {
    width: 5px;
    height: 129px;
  }

  .containerList::-webkit-scrollbar-track {
    background: transparent;
  }

  .containerList::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 10px;
  }

  .containerSpan {
    padding: 0 32px 16px 32px;
  }

  .wrapperSpan {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .spanText {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .spanPrice {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.7;
  }

  .totalPrice {
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 28px;
    line-height: 1.21429;

    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
