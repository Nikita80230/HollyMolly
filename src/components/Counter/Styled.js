import { styled } from "styled-components";

export const WrapperCounter = styled.div`
display:flex;
gap:5.5px;
width: 119px;
height: 40px;
 align-items:center;

.buttonCounter{
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid ${({theme})=>theme.colors.borderColor};
border-radius: 5px;
width: 40px;
height: 40px;
background-color:transparent;


}

.spanCounter{   
font-weight: 400;
font-size: 24px;
line-height: 1.20833;
text-align: center;
}
`