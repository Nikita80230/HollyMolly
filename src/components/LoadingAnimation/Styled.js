import { keyframes, styled } from "styled-components";
import DesktopLogo from "src/assets/images/logo.svg?react";

const fadeIn = keyframes`
   0% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, 0.4); }
`;

const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotateY(0deg); }
  100% { transform: translate(-50%, -50%) rotateY(360deg); }
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
  background-color: rgba(0, 0, 0, 0.4);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 9999;
  animation: ${fadeIn} 1s forwards;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 1s forwards;
`;

export const RotatingIcon = styled(DesktopLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  width: 406px;
  height: 91px;
  animation: ${spin} 2s linear 1 forwards;
  animation-delay: 0.5s;

  @media (max-width: 564px) {
    width: 190px;
    height: 30px;
  }
`;
