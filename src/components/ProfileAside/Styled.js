import { styled } from "styled-components";

export const StyledAside = styled.aside`

.linkAside{
font-weight: 500;
font-size: 18px;
color: ${({ theme }) => theme.colors.profileColorPrimary}; 
&.active{
   color: ${({ theme }) => theme.colors.profileColorSecondary};
    .wrapperLink{
        background-color:${({ theme }) => theme.colors.profileBgColorAccent};
    }
}
}

.wrapperLink{
border-radius: 0 16px 16px 0;
padding: 16px 64px;
width: 263px;
height: 60px;
white-space:nowrap;

}
`