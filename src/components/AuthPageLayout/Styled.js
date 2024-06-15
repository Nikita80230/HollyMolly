import { styled } from "styled-components";
import backgroundAuthLayout1x from "src/assets/images/authLayout/authPageBg1x.webp";
import backgroundAuthLayout2x from "src/assets/images/authLayout/authPageBg2x.webp";

export const StyledAuthPageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.05) url(${backgroundAuthLayout1x});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${({ theme }) => theme.colors.heroBgColor};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: rgba(0, 0, 0, 0.05) url(${backgroundAuthLayout2x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.heroBgColor};
  }
`;
