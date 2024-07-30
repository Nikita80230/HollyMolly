import styled from "styled-components";

export const StyledSortOrdersPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  .sortButton {
    border: none;
    border-radius: 8px;
    padding: 8px 10px;
    max-width: 172px;
    /* width: 100%; */
    /* height: 40px; */

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.familyDidact};
    background: ${({ theme }) => theme.colors.spanTextColor};
    color: ${({ theme }) => theme.colors.greyTxtColor};
  }

  .sortButton.active {
    box-shadow: 5px 5px 5px 0 #a5a4a4;
    /* font-family: ${({ theme }) => theme.fonts.familyDidact}; */
    /* background: ${({ theme }) => theme.colors.spanTextColor}; */
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
