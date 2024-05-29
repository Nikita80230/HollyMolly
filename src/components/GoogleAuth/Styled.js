import { styled } from "styled-components";

export const ButtonGoogle = styled.button`
margin-bottom:24px;
border-radius: 8px;
padding: 14px;
display:flex;
justify-content:center;
align-items:center;
gap:4px;
width: 100%;
height: 56px;
border:transparent;
background-color:${({ theme }) => theme.colors.lightColorButton};
font-family: "Nunito", sans-serif;
font-weight: 500;
font-size: 22px;
color: ${({ theme }) => theme.colors.colorGoogleButton};
`