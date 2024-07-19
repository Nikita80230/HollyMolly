import { Form } from "formik";
import { styled } from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap:33px 50px;

  .labelProfile {
   width: 390px;
   height: 60px;
    position: relative;
    
  }

  .errorMessageProfile {
    position: absolute;
    top: 100px;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorError};
    width: 334px;
  }

  /* .inputProfile {
    border: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorLabelProfile};
    padding: 12px;
    width: 334px;
    height: 56px;
    outline: none;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }

  .labelEmail {
    margin-bottom: 120px;
    margin-right: 82px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorLabelProfile};
  }

  .errorMessageEmail {
    position: absolute;
    top: 100px;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorError};
    width: 334px;
  }

  .inputEmail {
    border: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorLabelProfile};
    padding: 12px;
    width: 334px;
    height: 56px;
    outline: none;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }

  .labelPhone {
    position: relative;
    margin-right: 78px;
    margin-bottom: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorLabelProfile};
  }

  .errorMessagePhone {
    position: absolute;
    top: 100px;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorError};
    width: 181px;
  }

  .inputPhone {
    border: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorLabelProfile};
    padding: 8px 4px;
    width: 120px;
    height: 46px;
    outline: none;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorProfileSubtitle};
  }

  .phoneCode {
    margin-right: 8px;
    border: 1px solid rgba(0, 1, 5, 0.6);
    border-radius: 12px;
    padding: 4px 8px;
    width: 72px;
    height: 35px;
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #000105;
  }

  .labelSubscribe {
    margin-bottom: 64px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.colorLabelProfile};
  }

  .spanSubscribe {
    position: absolute;
    top: 40px;
    left: 24px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    cursor: default;
  }

  .subscribeCheckbox {
    width: 16px;
    height: 16px;
    border: 1px solid #000105;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    appearance: none;
    outline: none;

    &:checked {
      background-color: ${({ theme }) => theme.colors.authBgInput};
    }

    &:checked::after {
      content: "";
      content: "";
      position: absolute;
      top: 30%;
      left: 57%;
      width: 5px;
      height: 10px;
      border: solid #000105;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  .buttonProfile {
    border-radius: 12px;
    padding: 16px 24px;
    width: 198px;
    height: 59px;
    font-weight: 700;
    font-size: 20px;
    white-space: nowrap;
    border: transparent;
    margin-left: auto;
    margin-right: auto;
  }

  .labelCalendar {
    position: relative;
    margin-right: 78px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorLabelProfile};
  }

  .errorMessageDate {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorError};
    width: 181px;
  }

  .borderBox {
    position: absolute;
    top: 35px;
    left: 49px;
    z-index: 1;
    border: 1px solid rgba(0, 1, 5, 0.6);
    border-radius: 12px;
    width: 124px;
    height: 35px;
    background-color: transparent;
  } */
`;

export const DatePickerWrapper = styled.div`
  width: 181px;
  height: 60px;

  .styledDatePicker {
    position: relative;
    border: transparent;

    padding-left: 60px;
    width: 173px;
    height: 36px;

    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #000105;
  }

  .styledDatePicker:focus {
    outline: none; /* Видаляємо стандартний outline при фокусі */
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }

  .calendar {
    position: absolute;
    top: -8px;
    left: -10px;

    pointer-events: none;
    width: 36px;
    height: 36px;
    z-index: 1;
  }

  //  .errorMessageDate {
  //   position: absolute;
  //   top: 100px;
  //   left: 0;
  //   font-weight: 500;
  //   font-size: 16px;
  //   color: ${({ theme }) => theme.colors.colorError};
  //   width: 181px;
  // }
  .react-datepicker-wrapper {
  }

  .react-datepicker__month-container {
  }
`;
