import { styled } from "styled-components";

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.familyPacifico};
  font-weight: 400;
  font-size: 45px;
  line-height: 1.2;
  background-image: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 220px;
`;
