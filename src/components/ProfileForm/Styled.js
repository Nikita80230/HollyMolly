import { Form } from "formik";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
/* width: 852px; */
/* height: 576px; */
display:flex;
flex-wrap:wrap;

.label{
    display:flex;
    flex-direction:column;
    gap:16px;
font-weight: 500;  
font-size: 16px;
color: ${({theme})=>theme.colors.colorLabelProfile};
}

.inputProfile{
    margin-bottom:80px;
    margin-right:184px;
    border:transparent;
   border-bottom: 1px solid ${({theme})=>theme.colors.colorLabelProfile};
padding: 12px;
width: 334px;
height: 56px;
outline: none; 
}

.inputEmail{
    margin-bottom:120px;
    margin-right:78px;
    border:transparent;
    border-bottom: 1px solid ${({theme})=>theme.colors.colorLabelProfile};
padding: 12px;
width: 334px;
height: 56px;
outline: none; 
}

.inputPhone{
     margin-right:78px;
     border:transparent;
     border-bottom: 1px solid ${({theme})=>theme.colors.colorLabelProfile};
padding: 8px 4px;
   width: 181px;
height: 46px;
outline: none; 
}

.buttonProfile{
    border-radius: 12px;
padding: 16px 24px;
width: 198px;
height: 59px;
font-weight: 700;
font-size: 20px;
white-space:nowrap;
border:transparent;
}

.labelCalendar{
    position:relative;
    display:flex;
    flex-direction:column;
    gap:16px;
font-weight: 500;  
font-size: 16px;
color: ${({theme})=>theme.colors.colorLabelProfile};
}

.borderBox{
    position:absolute;
    top:35px;
    left:49px;
    z-index:1;
    border: 1px solid rgba(0, 1, 5, 0.6);
    border-radius: 12px;
width: 124px;
height: 35px;
background-color:transparent;
}


`

export const DatePickerWrapper = styled.div`
/* position:relative; */
margin-right:78px;
width: 181px;
height: 60px;


.calendar{
    /* position:absolute;
    top:0;
    left:0; */
    
    pointer-events: none; 
    width:36px;
    height:36px;
}

.styledDatePicker{
    border:transparent;

padding-left:60px;
width: 173px;
height: 36px;

font-family: "Nunito", sans-serif;
font-weight: 400;
font-size: 20px;
color: #000105;

}

.styledDatePicker:focus {
  outline: none; /* Видаляємо стандартний outline при фокусі */
}

.react-datepicker-wrapper {
    border:red;
}

.react-datepicker__month-container {}




`


