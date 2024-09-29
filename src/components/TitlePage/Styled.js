import { styled } from "styled-components";

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.familyPacifico};
  font-weight: 400;
  font-size: 48px;
  line-height: 1.16667;
  width: ${({ width }) => width || "auto"};
  height: ${(props) => props.height || 'auto'};

  background: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

  @media (max-width: 564px) {
    font-size: 32px;
    line-height: 1.1875;
    text-align: center;
    height: 48px;
  }
`;
