import { styled } from "styled-components";
import backgroundDesktop1x from "src/assets/images/hero/background-hero-desktop-1x.webp";
import backgroundDesktop2x from "src/assets/images/hero/background-hero-desktop-2x.webp";

export const StyledHero = styled.section`
  @media only screen and (min-width: 1440px) {
    padding: 214px 40px 43px 65px;
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

  .containerInHero {
    @media only screen and (min-width: 1440px) {
      padding: 60px 47px;
      margin-bottom: 65px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 712px;
      height: 389px;
      border-radius: 10px;
      backdrop-filter: blur(60px);
      background: ${({ theme }) => theme.colors.gradient};
      opacity: 0.5;
    }
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
      margin-left: 927px;
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
      font-size: 46px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primaryTxtColor};
    }
  }
`;
