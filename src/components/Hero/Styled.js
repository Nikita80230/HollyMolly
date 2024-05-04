import styled from "styled-components";
import backgroundFirst1x from "../../assets/images/hero/cool-charming-girl-1x.webp";
import backgroundFirst2x from "../../assets/images/hero/cool-charming-girl-2x.webp";
import backgroundSecond1x from "../../assets/images/hero/hero-second1x.webp";
import backgroundSecond2x from "../../assets/images/hero/hero-second2x.webp";
import backgroundFirstMobile1x from "../../assets/images/hero/cool-charming- mobile-1x.webp";
import backgroundFirstMobile2x from "../../assets/images/hero/cool-charming-mobile-2x.webp";
import backgroundSecondMobile1x from "../../assets/images/hero/hero-second-mobile-1x.webp";
import backgroundSecondMobile2x from "../../assets/images/hero/hero-second-mobile-2x.webp";

export const StyledHero = styled.section`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
    flex-direction: row;
    gap: 24px;
  }

  .wrapperImage {
    padding-top: 34px;
    padding-left: 32px;
    padding-bottom: 22px;
    border-radius: 20px;
    width: 100%;
    height: 226px;
    background: url(${backgroundFirstMobile1x}),
      linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${backgroundFirstMobile2x}),
        linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }

    @media only screen and (min-width: 768px) {
      padding-top: 50px;
      padding-left: 87px;
      padding-bottom: 86px;
      width: 978px;
      height: 548px;
      background: url(${backgroundFirst1x}),
        linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: url(${backgroundFirst2x}),
          linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right center;
        background-color: ${({ theme }) => theme.colors.heroBgColor};
      }
    }
  }

  .heroTitle {
    width: 178px;
    height: 90px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    color: ${({ theme }) => theme.colors.lightTxtColor};
    font-size: 22px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 24px;
      width: 423px;
      height: 344px;
      text-transform: none;
      font-size: 72px;
      line-height: 1.2;
    }
  }

  .spanTitle {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 28px;
    color: ${({ theme }) => theme.colors.accentTxtColor};

    @media only screen and (min-width: 768px) {
      font-size: 72px;
      line-height: 1.2;
    }
  }

  .heroImageText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
      font-family: ${({ theme }) => theme.fonts.familyNunito};
      font-weight: 500;
      font-size: 32px;
      color: ${({ theme }) => theme.colors.lightTxtColor};
    }
  }

  .wrapperSecondImage {
    padding-top: 15px;
    padding-bottom: 14px;
    border-radius: 20px;
    width: 100%;
    height: 80px;
    background: url(${backgroundSecondMobile1x});

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${backgroundSecondMobile2x});

      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};
    }

    @media only screen and (min-width: 768px) {
      padding: 64px 34px;
      width: 310px;
      height: 548px;
      background: url(${backgroundSecond1x});

      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: ${({ theme }) => theme.colors.heroBgColor};

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: url(${backgroundSecond2x}),
          linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${({ theme }) => theme.colors.heroBgColor};
      }
    }
  }

  .wrapperHeroSubtitle {
    @media only screen and (min-width: 768px) {
      border-radius: 16px;
      padding: 12px 8px 8px 8px;
      width: 244px;
      height: 90px;
      backdrop-filter: blur(8px);
      background-color: ${({ theme }) => theme.colors.backgroundHeroSubtitle};
    }
  }

  .heroSubtitle {
    margin-bottom: 4px;
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.accentTxtColor};
    white-space: nowrap;
    text-align: center;

    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
  }
  .textSubtitle {
    font-family: ${({ theme }) => theme.fonts.familyNunito};
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentTxtColor};

    @media only screen and (min-width: 768px) {
      font-weight: 500;
      font-size: 22px;
    }
  }
`;
