import { styled } from "styled-components";

export const DatePickerWrapper = styled.div`
  height: 60px;
  
 

  .styledDatePicker {
    width: 387px;
    height: 57px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
     border-radius: 5px;

    color: ${({ theme }) => theme.colors.primaryTxtColor};
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    padding: 16px 0px 16px 15px;
  }

  .styledDatePicker::placeholder {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    color: ${({ theme }) => theme.colors.placeholderTxtColor};

    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
  }

  .styledDatePicker:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .errorBorder {
  border: 1px solid ${({ theme }) => theme.colors.colorError};
}

.successBorder {
  border: 1px solid ${({ theme }) => theme.colors.colorSuccess};
}

  .react-datepicker {
    border: transparent;
    width: 251px;
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    
    margin-top: -60px;
    margin-left: 200px;
    transform: translateY(-10px);
  }

  .react-datepicker__triangle {
    display: none;
  }

 

  .custom-header{
    display:flex;
    gap:10px;
  }

  .customSelect{
     /* -webkit-appearance: none; */
    border:none;
    outline:none;
    }

  

  .customOption{
    background-color: ${({ theme }) => theme.colors.hoverCalendar};
    
  }


  .customSelect::-webkit-scrollbar {
    border-radius: 0 4px 4px 0;
width: 4px;
height: 302px;
    
  }

  .customSelect::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderColorActive};
  }

  
  .customSelect::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 4px;
  }

  .react-datepicker__header {
    margin-bottom: 15px;
    top: -5px;
    left: -19px;
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
    border: none;
    padding: 0;
    width: 261px;
    height: auto; 
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 5px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 11px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    text-transform: capitalize;
  }

  .react-datepicker__day {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.colors.hoverCalendar}; 
      color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .react-datepicker__day,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--today {
    display: inline-block;
    width: 23px;
    height: 20px;
    line-height: 20px; 
    text-align: center; 
    border-radius: 5px; 
    background-color: transparent; 
    margin: 5px;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.whiteTxtColor};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    /* background-color: ${({ theme }) => theme.colors.hoverCalendar};
    color: inherit;  */
  }

  .react-datepicker__day--today {
    background-color: ${({ theme }) => theme.colors.hoverCalendar}; /
   color: ${({ theme }) => theme.colors.primaryTxtColor};
    
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
    width: 61px;
    display: flex;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    font-family: ${({ theme }) => theme.fonts.familyDidact};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primaryTxtColor};
  }

  .react-datepicker-wrapper {
  }

  .react-datepicker__month-container {
    padding: 18px 18px 15px 18px;
    border: transparent;
    border-radius: 10px;
    width: 261px;
    height: auto;
    box-shadow: ${({ theme }) => theme.shadows.boxShadowCalendar};
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.whiteTxtColor};
  }

   /*========== Mobile - @media (max-width: 564px)================ */

  @media (max-width: 564px) {
    
     height: 54px;
 

  .styledDatePicker {
    min-width:335px;
    width: 100%;
    height: 52px;
    
    padding: 14px 0px 14px 15px;
  }

  .react-datepicker {
      margin-top: 0;
    margin-left: 170px;
   
  }
  }
`;
