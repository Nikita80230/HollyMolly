import { keyframes } from "styled-components";

const slideInFromBottom = keyframes`
from{
  transform:translateY(100%);
}
to{
  transform:translateY(0);
}
`

export const theme = {
  colors: {
    primaryBgColor: "#FFFFFF",
    secondaryBgColor: "#f3f2f1",
    heroBgColor: "#f3c59b ",
    primaryTxtColor: "#323234",
    secondaryTxtColor: " rgba(0, 3, 15, 0.6)",
    headerSearchMenuList: "#000105",
    lightTxtColor: "#fcf2ea",
    lightColorButton: "#f3f4fc",
    accentTxtColor: "#1d2f65",
    colorLogo: "#6b5034",
    colorLink: "#4169e1",
    colorInput: " #727273",
    inputFocus: "#19191a",
    inputBorder: "#4c4c4d",
    hoverInput: "#323234",
    footerSubtitle: "#4c4c4d",
    buttonBgColor: "#3251ae",
    hoverButton: "#1d2f65",
    focusButton: "#8094e7",
    backgroundCard: "#FFE959",
    textCard: "#19191a",
    borderButton: "#727273",
    placeholderColor: "rgba(0, 1, 5, 0.6)",
    footerLinks: "#000105",
    subCategoryHover: "rgba(0, 0, 0, 0.37)",
    backgroundHeroSubtitle: "rgba(243, 244, 252, 0.4)",
    disabledButtonBg: "#a9b5ed",
    dividerBurgerMenu: "#e4e4e4",
    footerTitleMobileColor: "#0c0d0d",
    backgroundLowerBlockMobile: "rgba(243, 244, 252, 0.2)",
    colorError: "#c61a0e",
    colorSuccess: "#40bb27",
    accentFocusColor: "rgba(169, 181, 237, 0.8)",
    descriptionModal: "#000105",
    borderButtonSwiper: "#4c4c4d",
    hoverBorderSwiper: "#19191a",
    hoverButtonBgSwiper: "rgba(169, 181, 237, 0.8)",
    cardSwiperBg: " rgba(243, 244, 252, 0.4)",
    checkboxText: "#000",
    focusButtonBgSwiper: "rgba(169, 181, 237, 0.4)",
    titleCardProduct: "#000",
    colorBgSpanNovelty: "#4169e1",
    spanTextColor: "#fff",
    colorPrice: "#797878",
    colorPriceSecondary: "#6b5034",
    colorBgSpanDiscount: "#ff7673",
    borderButtonColor: "#000",
    activeBgNavLink: "rgba(169, 181, 237, 0.4)",
    hoverIcon: " #a9b5ed",
    borderPagination: " #a1a1a2",
    activePaginationBg: "rgba(202, 208, 243, 0.8)",
    borderActivePagination:"rgba(41, 66, 142, 0.8)",
    hoverPaginationBg: "rgba(202, 208, 243, 0.6)",
    borderHoverPagination: "#cad0f3",
    colorBgSpanRating: " #f0b375",
    borderButtonColors: "#e2e2e2",
    backgroundAuth: "rgba(0, 1, 5, 0.32)",
    colorAuth: "#e6e9f9",
    authBorderInput: "#e0e0e0",
    authBgInput: "rgba(255, 255, 255, 0.05)",
    authTextColor: " #fff",
    authButtonBg: "#1d2f65",
    authColorSecondaryText: "#e6e9f9",
    colorGoogleButton: " #000",
    profileColorPrimary: " #000",
    profileColorSecondary: " #fff",
    profileBgColorAccent: "#4169e1",
    borderTitle: "#e4e4e4",
    colorProfileSubtitle: "#000105",
    colorSubtitle: "#19191a",
    colorLabelProfile: "#323234",
    iconAdd:"#3251ae",

  },

  updatedColors: {
    foundationYellowLight: "#fcf7f3",
    foundationYellowLightHover: "#fbf4ed",
    foundationYellowLightActive: "#f7e7d9",
    foundationYellowNormal: "#e5b385",
    foundationYellowNormalHover: "#cea178",
    foundationYellowNormalActive: "#b78f6a",
    foundationYellowDark: "#ac8664",
    foundationYellowDarkHover: "#896b50",
    foundationYellowDarkActive: "#67513c",
    foundationYellowDarker: "#503f2f",
    white: "#efe7eb",
    pink: "#e5b2c9",
    defaultBlack: "#000",
    black: "#260127",
    background: "#f3f2f1",
    benthicBlack100: "#f2f2f2",
    benthicBlack200: "#e4e4e4",
    benthicBlack300: "#c6c6c6",
    benthicBlack400: "#a1a1a2",
    benthicBlack500: "#727273",
    benthicBlack600: "#4c4c4d",
    benthicBlack700: "#323234",
    benthicBlack800: "#19191a",
    benthicBlack900: "#0c0d0d",
    benthicBlack1000: "#000105",
    royalBlue100: "#f3f4fc",
    royalBlue200: "#e6e9f9",
    royalBlue300: "#cad0f3",
    royalBlue400: "#a9b5ed",
    royalBlue500: "#8094e7",
    royalBlue600: "#4169e1",
    royalBlue700: "#3a5ec9",
    royalBlue800: "#3251ae",
    royalBlue900: "#29428e",
    royalBlue1000: "#1d2f65",
    textColor: "#211c1c",
    error100: "#fff2f2",
    error200: "#ffe5e4",
    error300: "#ffc7c6",
    error400: "#ffa3a2",
    error500: "#ff7673",
    error600: "#ff2112",
    error700: "#e41e10",
    error800: "#c61a0e",
    error900: "#a1150b",
    error1000: "#720f08",
    done100: "#f3fef2",
    done200: "#e7fce5",
    done300: "#ccfac8",
    done400: "#adf7a6",
    done500: "#88f57a",
    done600: "#52f232",
    done700: "#49d82d",
    done800: "#40bb27",
    done900: "#349920",
    done1000: "#256c16",
    arizona100: "#fef8f5",
    arizona200: "#fcf2ea",
    arizona300: "#f9e4d3",
    arizona400: "#f6d5b9",
    arizona500: "#f3c59b",
    arizona600: "#f0b375",
    arizona700: "#d7a069",
    arizona800: "#ba8b5b",
    arizona900: "#98714a",
    arizona1000: "#6b5034",
    benthicBlack100060: "rgba(0, 1, 5, 0.6)",
    cini: "#6b5034",
  },

  fonts: {
    familyNunito: "Nunito",
    familyRoboto: "Roboto",
  },

  animations: {
    transition: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slideInFromBottom,
  },
  shadows: {
    boxShadowAuth: "0 8px 32px 0 rgba(0, 0, 0, 0.32)",
  }
};
