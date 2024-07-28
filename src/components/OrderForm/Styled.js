import { styled } from "styled-components";

export const WrapperFormOrder = styled.div`
padding-top:36px;
width:830px;

.styledForm{
    display:flex;
    flex-wrap:wrap;
    align-items:self-end;
    gap:20px 50px;
    width:100%;
}

.wrapperFields{
    /* margin-bottom:12px; */
    display:flex;
    gap:50px;
}

.containerLeft{
    display:flex;
    flex-direction:column;
    gap:20px;
}

.containerRight{
    display:flex;
    flex-direction:column;
    gap:20px;
}

.styledLabel{
position:relative;
width: 390px;
  height: 60px;
}

.errorMessage{
    position:absolute;
    top:100%;
    left:0;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.25;
}

.buttonSave{
    
    border:transparent;
    background-color:transparent;
    
height: 40px;
font-weight: 400;
font-size: 24px;
line-height: 1.20833;


}

.containerIconSpan{
    margin-right:300px;
    display:flex;
    align-items:center;
    gap:22px;
}

.circle{
    position:relative;
    width:20px;
    height:20px;
    border:1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius:50%;
   
}

.point{
    position:absolute;
    top:4px;
    left:4px;
    width:10px;
    height:10px;
    background-color:${({ theme }) => theme.colors.accentColor};
    border-radius:50%;
}

.text{
    
font-weight: 400;
font-size: 30px;
line-height: 1.2;

}
`