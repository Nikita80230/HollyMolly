import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: -1px;
  left: 0;

  z-index: 11;

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row;

  background: #fffbfe;

  .header {
    display: flex;
    align-items: center;
    flex-direction: row;
    min-height: 108px;

    background: #fffbfe;
  }

  .leftHeader {
    display: flex;
    align-items: center;
    flex-direction: row;

    max-width: 350px;
    width: 100%;
  }

  .title {
    /* font-family: var(--family-croissantOne); */
    font-size: 30px;
    color: ${({ theme }) => theme.colors.accentTxtColor};
  }

  .headerLogo {
    display: flex;
    margin: 0 auto;
  }

  .headerDesktopLogoImg {
    display: block;
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

  /* =============================@media (max-width: 564px)=================================== */

  @media (max-width: 564px) {
    margin-bottom: 25px;

    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15),
      0 1px 2px 0 rgba(0, 0, 0, 0.3);

    .leftHeader {
      display: none;
    }

    .header {
      min-height: 64px;
    }

    .headerLogo {
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
  }
`;
