import { ErrorMessage, Field, Formik } from "formik";
import { DatePickerWrapper, StyledForm } from "./Styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "src/assets/images/calendar.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "src/redux/user/operations";
import { selectProfiles } from "src/redux/user/selectors";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { ProfileSchema } from "src/schemas/ProfileSchema";
import { subscribeSentEmail } from "src/services/subscribeSentEmail";

const ProfileForm = ({ userEmail }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const [isSubscribe, setIsSubscribe] = useState(false);

  if (!profiles || profiles.length === 0) {
    return <Loader />;
  }

  const { firstName, lastName, phoneNumber, dateOfBirth, id } = profiles[0];

  const phoneCode = phoneNumber.slice(0, 4);
  const phoneNum = phoneNumber.slice(4);

  const initialValues = {
    firstName: firstName || "",
    lastName: lastName || "",
    email: userEmail || "",
    phoneCode: phoneCode || "+380",
    phoneNumber: phoneNum || "",
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
  };

  const handleSubmit = (values) => {
    const updatedValues = {
      ...values,
      phoneNumber: `${values.phoneCode}${values.phoneNumber}`,
      dateOfBirth: values.dateOfBirth
        ? values.dateOfBirth.toISOString().split("T")[0]
        : null,
    };

    if (isSubscribe) {
      subscribeSentEmail(values);
    }

    dispatch(updateProfile({ user: updatedValues, profileId: id }));
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleBlur }) => (
          <StyledForm>
            <label className="labelProfile">
              Ім'я
              <Field
                className="inputProfile"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Введіть своє ім'я"
              />
              <ErrorMessage
                className="errorMessageProfile"
                name="firstName"
                component="div"
              />
            </label>
            <label className="labelProfile">
              Прізвище
              <Field
                className="inputProfile"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Ввведіть своє прізвище"
              />
              <ErrorMessage
                className="errorMessageProfile"
                name="lastName"
                component="div"
              />
            </label>
            <label className="labelEmail">
              Пошта
              <Field
                className="inputEmail"
                id="email"
                name="email"
                type="email"
                readOnly
              />
              <ErrorMessage
                className="errorMessageEmail"
                name="email"
                component="div"
              />
            </label>
            <label className="labelPhone">
              Телефон
              <div>
                <Field
                  className="phoneCode"
                  name="phoneCode"
                  placeholder="+380"
                  readOnly
                />
                <Field
                  className="inputPhone"
                  name="phoneNumber"
                  placeholder=""
                  onChange={(e) => {
                    setFieldValue("phoneNumber", e.target.value);
                  }}
                />
              </div>
              <ErrorMessage
                className="errorMessagePhone"
                name="phoneNumber"
                component="div"
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
                  onBlur={handleBlur}
                />
              </DatePickerWrapper>
              {/* <ErrorMessage
                className="errorMessageDate"
                name="dateOfBirth"
                component="div"
              /> */}
            </label>
            <label className="labelSubscribe" htmlFor="subscribeCheckbox">
              {" "}
              Підписка
              <Field
                className="subscribeCheckbox"
                type="checkbox"
                name="subscribe"
                id="subscribeCheckbox"
                checked={isSubscribe}
                onChange={(e) => setIsSubscribe(e.target.checked)}
              />
              <span className="spanSubscribe">
                Я хочу підписатися на розсилку і отримувати повідомлення на
                пошту про усі новинки та акції
              </span>
            </label>
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
