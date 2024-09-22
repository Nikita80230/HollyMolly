import { keyframes, styled } from "styled-components";
import DesktopLogo from "src/assets/images/logo.svg?react";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.3; }
`;

const spin = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

export const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 9999;
`;

export const LoadingImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  opacity: 0;
  animation: ${fadeIn} 5s forwards;
`;

export const RotatingIcon = styled(DesktopLogo)`
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 406px;
  height: 91px;
  animation: ${spin} 6s linear infinite;
`;
