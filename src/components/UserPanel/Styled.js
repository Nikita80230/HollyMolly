import { styled } from "styled-components";

export const StyledUserPanel = styled.div`
  display: flex;
  gap: 17px;
  /* max-width: 168px;
  width: 100%; */

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

    padding: 11px;

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

  /* ==================================@media (max-width: 768px)========================================= */

  @media (min-width: 768px) and (max-width: 1024px) {
    /* max-width: 88px; */

    gap: 8px;

    .buttonIcon {
      padding: 4px;
    }

    .icon {
      width: 15px;
      height: 15px;
      /* padding: 4px; */
    }
  }

  /* ==================================@media (max-width: 564px)========================================= */

  @media (max-width: 564px) {
    gap: 0;
    width: auto;
  }
`;
