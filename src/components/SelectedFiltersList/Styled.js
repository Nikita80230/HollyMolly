import styled from "styled-components";

export const StyledSelectedFiltersList = styled.div`
  position: absolute;
  left: 320px;
  top: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9px;

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 39px;

    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    padding: 5px 8px;
  }
  .filterName {
    font-family: ${({theme})=>theme.fonts.familyDidact};
font-weight: 400;
font-size: 16px;
color:${({ theme }) => theme.colors.primaryTxtColor} ;
  }
  .removeFilterBtn {
    border: none;
    background: transparent;
  }
`;
