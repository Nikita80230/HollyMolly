import styled from "styled-components";

export const StyledSelectedFiltersList = styled.div`
  position: absolute;
  left: 320px;
  top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9px;

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 26px;

    border: 1px solid ${({ theme }) => theme.updatedColors.benthicBlack400};
    border-radius: 23px;
    padding: 5px 8px;
  }
  .filterName {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme.updatedColors.benthicBlack1000};
  }
  .removeFilterBtn {
    border: none;
    background: transparent;
  }
`;
