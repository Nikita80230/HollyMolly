import { Field, Form, Formik } from "formik";
import { DatePickerWrapper, StyledForm } from "./Styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "src/assets/images/calendar.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "src/redux/user/operations";
import { selectProfile } from "src/redux/user/selectors";

const ProfileForm = ({
  firstName,
    lastName,
  email,
  phoneNumber,
  dateOfBirth,
}) => {
  const dispatch = useDispatch();
console.log(firstName)
  return (
    <>
          <Formik
              enableReinitialize
        initialValues={{
          firstName: firstName || '' ,
          lastName: lastName || '',
          email: email || '',
          phoneNumber: phoneNumber || '' ,
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(updateProfile(values));
        }}
      >
        {({ setFieldValue, values }) => (
          <StyledForm>
            <label className="label">
              Ім'я
              <Field
                className="inputProfile"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Введіть своє ім'я"
              />
            </label>
            <label className="label">
              Прізвище
              <Field
                className="inputProfile"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Ввведіть своє прізвище"
              />
            </label>
            <label className="label">
              Пошта
              <Field
                className="inputEmail"
                id="email"
                name="email"
                type="email"
              />
            </label>
            <label className="label">
              Телефон
              <Field
                className="inputPhone"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="+38000-000-00-00"
              />
            </label>
            <label className="labelCalendar">
              Дата народження
              <div className="borderBox"></div>
              <DatePickerWrapper>
                <DatePicker
                  showIcon
                  className="styledDatePicker"
                  selected={values.dateOfBirth}
                  onChange={(date) => setFieldValue("dateOfBirth", date)}
                  dateFormat="dd/MM/yyyy"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  icon={<CalendarIcon className="calendar" />}
                />
                {/* <CalendarIcon className="calendar" /> */}
              </DatePickerWrapper>
            </label>
            {/* <label className="label">
            Підписка
            <Field type="checkbox" /><span>Я хочу підписатися на розсилку і отримувати
            повідомлення на пошту про всі новинки та акції</span>
          </label> */}

            <button className="buttonProfile" type="submit">
              Зберегти зміни
            </button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
