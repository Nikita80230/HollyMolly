import styled from "styled-components";

export const StyledColorSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .colorBtn {
    width: 24px;
    height: 24px;

    border: transparent;
    border-radius: 2px;
  }

  .colorBtn.activeColorBtn {
    outline: 2px solid ${({theme})=>theme.colors.cardBorderColor};
  }
`;
