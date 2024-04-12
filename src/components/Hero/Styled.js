import styled from "styled-components";
import backgroundFirst1x from "../../assets/images/hero/cool-charming-girl-1x.webp";
import backgroundFirst2x from "../../assets/images/hero/cool-charming-girl-2x.webp";
import backgroundSecond1x from "../../assets/images/hero/hero-second1x.webp";
import backgroundSecond2x from "../../assets/images/hero/hero-second2x.webp";

export const StyledHero = styled.section`
  margin-bottom: 80px;
  display: flex;
  gap: 24px;
  width: 100%;

  .wrapperImage {
    padding-top: 84px;
    padding-left: 82px;
    padding-bottom: 160px;
    border-radius: 20px;
    width: 978px;
    height: 548px;
    background: url(${backgroundFirst1x}),
      linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};

    @media
only screen and (-webkit-min-device-pixel-ratio: 2), /* Safari 6+ */
only screen and (min--moz-device-pixel-ratio: 2), /* Firefox 16+ */
only screen and (-o-min-device-pixel-ratio: 2/1), /* Opera */
only screen and (min-device-pixel-ratio: 2), /* Standard */
only screen and (min-resolution: 192dpi), /* Retina displays */
only screen and (min-resolution: 2dppx) { /* Standard */
   background: url(${backgroundFirst2x}),
        linear-gradient(90deg, #f3c59b 0%, #98714a 100%);
}
  }

  .heroImageText {
    margin-bottom: 40px;
    font-family: var(--familyNunito);
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.lightTxtColor};
  }
  .spanTitle {
    font-family: var(--familyNunito);
    font-weight: 700;
    font-size: 64px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accentTxtColor};
  }
  .heroTitle {
    width: 331px;
    height: 234px;
    font-family: var(--familyNunito);
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightTxtColor};
  }
  .wrapperSecondImage {
    padding-top: 41px;
    padding-right: 43px;
    padding-left: 44px;

    border-radius: 20px;
    width: 310px;
    height: 548px;
    background: url(${backgroundSecond1x}),
      linear-gradient(180deg, #ddc5b0 0%, #fff 100%);
    background-color: ${({ theme }) => theme.colors.heroBgColor};
    @media
only screen and (-webkit-min-device-pixel-ratio: 2), /* Safari 6+ */
only screen and (min--moz-device-pixel-ratio: 2), /* Firefox 16+ */
only screen and (-o-min-device-pixel-ratio: 2/1), /* Opera */
only screen and (min-device-pixel-ratio: 2), /* Standard */
only screen and (min-resolution: 192dpi), /* Retina displays */
only screen and (min-resolution: 2dppx) { /* Standard */
     background: url(${backgroundSecond2x}),
        linear-gradient(180deg, #ddc5b0 0%, #fff 100%);
}
  }
  .heroSubtitle {
    font-family: var(--familyNunito);
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.accentTxtColor};
    white-space: nowrap;
  }
  .textSubtitle {
    font-family: var(--familyNunito);
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    color: ${({ theme }) => theme.colors.accentTxtColor};
  }
`;
