import { Form } from "formik";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  /* display: flex;
  flex-wrap: wrap;
  gap:33px 50px; */

  .wrapperFields{
    margin-bottom:30px;
    display:flex;
    gap:50px;
  }

  .containerLeft{
    width: 390px;
    display:flex;
    flex-direction:column;
    gap:33px;
  }

  .containerRight{
     width: 390px;
    display:flex;
    flex-direction:column;
    gap:33px;
  }

  .labelProfile {
   /* width: 390px; */
   height: 60px;
    /* position: relative; */
    
  }

  .errorMessageProfile {
    position: absolute;
   top: 100%;
    left: 0;
    z-index:1;
    color: ${({ theme }) => theme.colors.colorError};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.25;
  }

 
`;

export const DatePickerWrapper = styled.div`
   height: 60px;
  border:1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;

  .styledDatePicker {
     width: 387px;
    height: 58px;
    border: transparent;
   
   color: ${({ theme }) => theme.colors.primaryTxtColor};
font-family: ${({ theme }) => theme.fonts.familyDidact};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
 padding: 16px 0px 16px 15px;
    /* width: 251px;
    height: 238px; */
    /* box-shadow: ${({ theme }) => theme.shadows.boxShadowCalendar}; */

    
  }

  .styledDatePicker::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }

  .styledDatePicker:focus {
    outline: none; /* Видаляємо стандартний outline при фокусі */
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }



  
  .react-datepicker-wrapper {
  }

  .react-datepicker__month-container {
  }
`;
