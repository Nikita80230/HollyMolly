import { styled } from "styled-components";

export const StyledAside = styled.aside`
display:flex;
flex-direction:column;
gap:31px;
width:268px;

.listNavLinks{
    display:flex;
    flex-direction:column;
    gap:31px;
}

.linkAside{

font-weight: 400;
font-size: 30px;
line-height: 1.2;
text-align: center;
color: ${({ theme }) => theme.colors.primaryTxtColor}; 

&.active{
   color: ${({ theme }) => theme.colors.whiteTxtColor};
    .wrapperLink{
        background-color:${({ theme }) => theme.colors.accentColor};
    }
}
}

.wrapperLink{
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px;
width: 268px;
height: 71px;
white-space:nowrap;

}
`