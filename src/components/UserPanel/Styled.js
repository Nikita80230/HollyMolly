import { styled } from "styled-components";

export const StyledUserPanel = styled.div`
  display: flex;

  gap: 17px;

  max-width: 168px;
  width: 100%;

  .userPanelLink {
    display: block;

    padding: 11px;
  }

  .userPanelLink.active {
    border: 1px solid ${({ theme }) => theme.colors.secondaryTxtColor};
    border-radius: 8px;
  }
`;
