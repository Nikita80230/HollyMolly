import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 11;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;

  background: ${({ theme }) => theme.colors.primaryBgColor};

  .header {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    min-height: 115px;

    background: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .leftHeader {
    display: flex;
    align-items: center;
    flex-direction: row;

    max-width: 426px;
    width: 100%;
  }

  .headerLogo {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .headerDesktopLogoImg {
    display: block;
    path {
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .headerTabletLogoImg {
    display: none;
  }

  .headerMobileLogoImg {
    display: none;
  }

  .openBurgerBtn {
    display: none;
  }
  .openUserPanelBtn {
    display: none;
  }

  /* =============================@media (max-width: 768px)=================================== */
  @media (max-width: 768px) {
    .header {
      min-height: 84px;
    }
    .leftHeader {
      max-width: 239px;
    }

    .headerDesktopLogoImg {
      display: none;
    }

    .headerTabletLogoImg {
      display: block;
      path {
        fill: ${({ theme }) => theme.colors.accentColor};
      }

      height: 34px;
    }

    .tabletButton {
      margin-right: 50px;
      padding: 6px 3px;
      border: transparent;
      background: transparent;
      width: 24px;
      height: 24px;
    }

    .openBurgerIcon {
      width: 18px;
      height: 12px;
    }

    .closeBurgerIcon {
      width: 18px;
      height: 12px;
    }
  }

  /* @media (min-width: 768px) and (max-width: 1024px) {
    .header {
      min-height: 82px;
    }
    .headerDesktopLogoImg {
      width: 139px;
    }
    .leftHeader {
      max-width: 235px;
    }
  } */

  /* ============================= =================================== */
  /* @media (max-width: 767px) {
    margin-bottom: 17px;

    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15),
      0 1px 2px 0 rgba(0, 0, 0, 0.3);

    .leftHeader {
      display: none;
    }

    .header {
      min-height: 64px;
    }

    .headerLogo {
      top: 50%;
      left: 32%;

      transform: translate(-50%, -50%);

      display: flex;
      margin-left: 8px;
      margin-right: auto;
    }

    .headerDesktopLogoImg {
      display: none;
    }

    .headerMobileLogoImg {
      display: block;
    }

    .mobileButton {
      display: block;
      padding: 13px;
      border: none;
      background: transparent;
    }
  } */

  /* ============================= Mobile - @media (max-width: 564px)=================================== */

  @media (max-width: 564px) {
    .leftHeader {
      display: none;
    }

    .header {
      min-height: 70px;
    }

    .openBurgerIcon {
      width: 24px;
      height: 24px;
    }

    .headerLogo {
      top: 50%;
      left: 37%;

      transform: translate(-50%, -50%);
    }

    .headerDesktopLogoImg {
      display: none;
    }

    .headerTabletLogoImg {
      display: none;
    }

    .headerMobileLogoImg {
      display: block;
      path {
        fill: ${({ theme }) => theme.colors.accentColor};
      }
      width: 159px;
      height: 30px;
    }

    .mobileButton {
      display: block;
      padding: 0;
      border: none;
      background: transparent;
    }
  }
`;
