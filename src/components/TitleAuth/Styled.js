import { styled } from "styled-components";

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.familyPacifico};
  font-weight: 400;
  font-size: 48px;
  line-height: 1.16667;
  background: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 260px;
  height: 76px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 564px) {
    position: absolute;
    top: 164px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    font-size: 32px;
    line-height: 1.1875;
    height: 48px;
  }
`;
