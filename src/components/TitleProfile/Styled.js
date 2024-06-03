import { styled } from "styled-components";

export const WrapperTitleProfile = styled.div`
margin-bottom:16px;
width:100%;
border-bottom: 1px solid ${({theme})=>theme.colors.borderTitle};

.title{
font-weight: 700;
font-size: 36px;
line-height: 1.38535;
color: ${({theme})=>theme.colors.profileColorPrimary};
}
`