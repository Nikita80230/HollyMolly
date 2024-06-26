import { styled } from "styled-components";

export const StyledUserPanel = styled.div`
  display: flex;
  gap: 17px;

  .userPanelLink {
    display: block;
  }

  .icon {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ theme }) => theme.colors.primaryTxtColor};
    }
    transition: fill ${({ theme }) => theme.animations.transition};
  }
  .iconBasket {
    width: 32px;
    height: 32px;
    path {
      fill: transparent;
      stroke: ${({ theme }) => theme.colors.primaryTxtColor};
    }
    transition: stroke ${({ theme }) => theme.animations.transition};
  }

  /* .userPanelLink.active {
    .icon {
      path {
        fill: ${({ theme }) => theme.colors.accentColor};
      }
    }
    .iconBasket{
      path {
        stroke: ${({ theme }) => theme.colors.accentColor};
      }
    }
  } */

  .buttonIcon {
    /* border-radius: 8px; */

    padding: 11px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: transparent;
    background-color: transparent;

    &:hover {
      .icon {
        path {
          fill: ${({ theme }) => theme.colors.accentColor};
        }
      }
      .iconBasket {
        path {
          stroke: ${({ theme }) => theme.colors.accentColor};
        }
      }
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
