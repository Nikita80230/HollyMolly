import { styled } from "styled-components";
import backgroundDesktop1x from "src/assets/images/hero/background-hero-desktop-1x.webp";
import backgroundDesktop2x from "src/assets/images/hero/background-hero-desktop-2x.webp";
import backgroundDesktop3x from "src/assets/images/hero/backgroundDesktop3x.jpg";
import heroBackgroundForDesktopMaxSize from "src/assets/images/hero/heroBackgroundForDesktopMaxSize.jpg";
import backgroundMobile1x from "src/assets/images/hero/background1Mobile1x.jpg";
import backgroundMobile2x from "src/assets/images/hero/background1Mobile2x.jpg";

export const StyledHero = styled.section`
  position: relative;
  padding: 214px 0 43px 0;
  margin-bottom: 36px;

  width: 100%;
  height: 795px;
  background-color: ${({ theme }) => theme.colors.heroBgColor};

  background: url(${backgroundDesktop2x});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${backgroundDesktop3x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
  }

  .contentContainer {
    width: 726px;
    height: 389px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background: ${({theme})=>theme.colors.backgroundContentBox};
  }

  .titleHero {
    display: block;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 55px;
    background-image: ${({ theme }) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 85px;
  }

  .spanHero {
    margin-bottom: 18px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 96px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.accentColor};
  }

  .secondTitle {
    margin-top: 65px;
    margin-left: 880px;
    font-family: ${({ theme }) => theme.fonts.familyPacifico};
    font-weight: 400;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
    font-weight: 400;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  /* ========Mobile - @media (max-width: 564px)==============*/
  @media (max-width: 564px) {
    padding: 89px 0 14px 0;
    margin-bottom: 16px;
    width: 100%;
    height: 279px;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
    background: url(${backgroundMobile1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${backgroundMobile2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }

    .contentContainer {
      width: 257px;
      height: 112px;
    }

    .titleHero {
      font-size: 20px;
      height: 30px;
    }

    .spanHero {
      margin-bottom: 5px;
      font-size: 28px;
      line-height: 1.21429;
    }

    .secondTitle {
      margin-top: 38px;
      margin-left: 53%;
      font-size: 16px;
      line-height: 1.5;
      white-space: nowrap;
    }

    .title {
      font-size: 16px;
      line-height: 1.2;
    }
  }
`;
