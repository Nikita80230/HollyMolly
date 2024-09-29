import styled from "styled-components";

export const StyledFiltersAndSortingButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

  .filterButton {
    display: flex;
    align-items: center;

    max-width: 150px;
    width: 100%;
    height: 40px;

    padding: 11px 10px;

    border-radius: 10px;

    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 400;
    font-size: 14px;

    /* line-height: 17px; */
    line-height: 1.21429;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryTxtColor};

    border: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};
    background: ${({ theme }) => theme.colors.whiteTxtColor};
  }
  .filterButtonText {
    margin: 0 auto;

    font-weight: 400;
    font-size: 14px;

    line-height: 1.21429;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }
`;
