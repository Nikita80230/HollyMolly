import { styled } from "styled-components";

export const ButtonGoogle = styled.button`
margin-bottom:5px;
margin-left:59px;
border: 1px solid ${({theme})=>theme.colors.accentColor};
border-radius: 5px;
padding: 15px 5px;
width: 310px;
height: 60px;
background: ${({ theme }) => theme.colors.primaryBgColor};
font-weight: 400;
font-size: 24px;
line-height: 1.20833;

`