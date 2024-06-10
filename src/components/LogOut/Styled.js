import { styled } from "styled-components";

export const StyledButtonLogOut = styled.button`
display:flex;
border-radius: 0 16px 16px 0;
padding: 16px 64px;
width: 263px;
height: 60px;
border:transparent;
background-color: ${({ theme }) => theme.colors.primaryBgColor};
font-weight: 500;
font-size: 18px;
color: ${({ theme }) => theme.colors.profileColorPrimary};
/* transition: background-color ${({ theme }) => theme.animations.transition}, color: ${({ theme }) => theme.animations.transition};

&:focus{
   color: ${({ theme }) => theme.colors.profileColorSecondary}; 
   background-color: ${({ theme }) => theme.colors.profileBgColorAccent};
} */
`