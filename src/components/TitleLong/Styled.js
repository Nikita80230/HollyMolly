import { styled } from "styled-components";

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.familyPacifico};
  font-weight: 400;
  font-size: 45px;
  line-height: 1.16667;
  background: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 76px;

  @media (max-width: 564px) {
    font-size: 32px;
    line-height: 1.1875;
    height: 48px;
    
  }
`;
