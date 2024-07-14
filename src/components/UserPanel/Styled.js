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

  .buttonIconBasket {
    position: relative;
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

  .containerProducts {
    position: absolute;
    top: 28px;
    right: 12%;
    z-index: 111;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  .styledSpan {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.whiteTxtColor};
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


export const ContainerEmptyBasket = styled.div`
padding:25px 30px;
display:flex;
align-items:center;
justify-content:center;
gap:10px;
border-radius: 10px;
width: 277px;
height: 74px;
box-shadow: ${({ theme }) => theme.shadows.boxShadowLeaveReview};
  background: ${({ theme }) => theme.colors.primaryBgColor};

  .iconClose{
    width:24px;
    height:24px;
    path{
    stroke:${({ theme }) => theme.colors.accentColor};}
  }

  .textBasket{
    font-family:${({ theme }) => theme.fonts.familyDidact};
font-weight: 400;
font-size: 20px;
line-height: 1.2;
white-space:nowrap;

  }

`