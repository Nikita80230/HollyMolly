import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 108px;

  .header {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .leftHeader {
    display: flex;
    align-items: center;
    flex-direction: row;
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
    background: #fffbfe, rgba(103, 80, 164, 0.08);

    .leftHeader {
      display: none;
    }

    .header {
      min-height: 64px;
    }

    .headerDesktopLogoImg {
      display: none;
    }

    .headerMobileLogoImg {
      display: block;
    }

    .mobileButton {
      display: block;
      padding: 0;
      border: none;
      background: transparent;
    }
  }
`;
