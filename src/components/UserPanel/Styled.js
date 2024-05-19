import { styled } from "styled-components";

export const StyledUserPanel = styled.div`
  display: flex;
  gap: 17px;
  max-width: 168px;
  width: 100%;

  .userPanelLink {
    display: block;
  }

  .userPanelLink.active {
    button {
      background-color: ${({ theme }) => theme.colors.activeBgNavLink};
    }
  }

  .buttonIcon {
    border-radius: 8px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    background-color: transparent;
    transition: background-color ${({ theme }) => theme.animations.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverIcon};
    }
  }

  /* ==================================@media (max-width: 564px)========================================= */

  @media (max-width: 564px) {
    gap: 0;
    width: auto;
  }
`;
