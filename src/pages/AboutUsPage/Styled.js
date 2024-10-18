import { styled } from "styled-components";

export const WrapperAboutUsPage = styled.div`
padding-top:36px;

.title{
    margin: 0 auto 36px auto;
 font-family: ${({ theme }) => theme.fonts.familyPacifico};
font-weight: 400;
font-size: 55px;
line-height: 1.2;

width:210px;
height:86px;
background: ${({ theme }) => theme.colors.gradientTitle};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
`