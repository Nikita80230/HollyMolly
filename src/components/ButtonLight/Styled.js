import { styled } from "styled-components";

export const StyledButton = styled.button`
border:1px solid ${({theme})=>theme.colors.accentColor};
border-radius: 5px;
padding: 15px 5px;
width: ${(props) => props.width || 'auto'};
height: 60px;
background: ${({ theme }) => theme.colors.primaryBgColor};
font-weight: 400;
font-size: 24px;
line-height: 1.20833;

transition: color ${({ theme }) => theme.animations.transition},
      box-shadows ${({ theme }) => theme.animations.transition};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.boxShadowButtonHover};
    }

    &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
    }
`