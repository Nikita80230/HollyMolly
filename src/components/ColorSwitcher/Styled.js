import styled from "styled-components";

export const StyledColorSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  padding-left: 2px;

  .colorBtn {
    width: 24px;
    height: 24px;

    border: 1px solid #3a3a3a;
    border-radius: 3px;
  }

  .colorBtn.activeColorBtn {
    outline: 2px solid #000;
  }
`;
