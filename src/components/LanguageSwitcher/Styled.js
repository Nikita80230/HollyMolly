import styled from "styled-components";

export const StyledLanguageSwitcher = styled.div`
  display: flex;
  gap: 5px;

  margin-right: 40px;

  .switchBtn {
    padding: 10px 11px 9px 12px;
    width: 44px;
    height: 44px;

    background: transparent;
    border: none;
    border-radius: 8px;
  }
  .switchBtn.active {
    border: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};
    border-radius: 8px;
  }
`;
