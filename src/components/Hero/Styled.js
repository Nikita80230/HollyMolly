import { styled } from "styled-components";
import backgroundDesktop1x from "src/assets/images/hero/background-hero-desktop-1x.webp";
import backgroundDesktop2x from "src/assets/images/hero/background-hero-desktop-2x.webp";

export const StyledHero = styled.section`
  @media only screen and (min-width: 1440px) {
    position: relative;
    padding: 214px 0 43px 0;
    margin-bottom: 36px;

    width: 100%;
    height: 795px;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
    background: url(${backgroundDesktop1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${backgroundDesktop2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 214px;
    left: 5.5%;
    width: 726px;
    height: 389px;
    border-radius: 10px;
    backdrop-filter: blur(60px);
    background: ${({ theme }) => theme.colors.primaryBgColor};
    opacity: 0.5;
    z-index: 1;
  }

  .contentContainer {
    position: relative;
    z-index: 2;
    width: 726px;
    height: 389px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .titleHero {
    @media only screen and (min-width: 1440px) {
      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      font-weight: 400;
      font-size: 55px;
      background-image: ${({ theme }) => theme.colors.gradientTitle};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      height: 85px;
    }
  }

  .spanHero {
    @media only screen and (min-width: 1440px) {
      margin-bottom: 18px;
      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      font-weight: 400;
      font-size: 96px;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .secondTitle {
    @media only screen and (min-width: 1440px) {
      margin-top: 65px;
      margin-left: 880px;
      font-family: ${({ theme }) => theme.fonts.familyPacifico};
      font-weight: 400;
      font-size: 48px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }

  .title {
    @media only screen and (min-width: 1440px) {
      font-family: ${({ theme }) => theme.fonts.familyGaramond};
      font-weight: 400;
      font-size: 48px;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
