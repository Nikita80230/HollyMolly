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
    height: 76px;
`