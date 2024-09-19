import { styled } from "styled-components";

export const ContainerProfileMobile = styled.div`
  @media (max-width: 564px) {

    .listNavLinks {
    margin-bottom:24px;
      display: flex;
      flex-direction: column;
      gap: 24px;

    }

    .spanMobile {
      font-weight: 400;
      font-size: 24px;
      line-height: 1.20833;
      color: ${({ theme }) => theme.colors.primaryTxtColor};

      &.active {
        color: ${({ theme }) => theme.colors.accentColor};
      }
    }

    .wrapperLink {
      display: flex;
      justify-content: space-between;
      width: 100%;
      white-space: nowrap;
    }
    .buttonIcon {
      width: 24px;
      height: 24px;
      background-color: transparent;
      border: transparent;
    }

    .icon {
      width: 24px;
      height: 24px;
      path {
        stroke: ${({ theme }) => theme.colors.primaryTxtColor};
      }
      transition: ${({ theme }) => theme.animations.transition};
    }

    .icon.openedIcon {
      transform: rotate(-180deg);
    }

    .buttonLogOut {
     margin-bottom:208px;
      border: 1px solid ${({ theme }) => theme.colors.accentColor};
      background-color: transparent;
      border-radius: 5px;
      padding: 12px 5px;
      width: 100%;
      height: 53px;
      font-weight: 400;
      font-size: 24px;
      line-height: 1.20833;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
      text-align: center;
      transition: color ${({ theme }) => theme.animations.transition},
        box-shadows ${({ theme }) => theme.animations.transition};

      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
      }

      &:focus {
        color: ${({ theme }) => theme.colors.accentColor};
      }
    }
  }
`;

export const TitleProfile = styled.h1`

  @media (max-width: 564px) {
    margin-bottom:14px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 32px;
    line-height: 1.1875;
    text-align: center;
    /* width: 188px; */
    height: 48px;
    background-image: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
