import { ErrorMessage, Field, Formik } from "formik";
import { DatePickerWrapper, StyledForm } from "./Styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "src/assets/images/calendar.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "src/redux/user/operations";
import { selectProfiles } from "src/redux/user/selectors";
import { ProfileSchema } from "src/schemas/ProfileSchema";
import Input from "../Input/Input";
import ButtonLight from "../ButtonLight/ButtonLight";

const ProfileForm = ({ userEmail }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
 console.log(profiles)

  const initialValues =
    profiles && profiles.length > 0
      ? {
          firstName: profiles[0]?.firstName || "",
          lastName: profiles[0]?.lastName || "",
          email: userEmail || "",
          // phoneCode: profiles[0]?.phoneNumber?.slice(0, 4) || "+380",
          // phoneNumber: profiles[0]?.phoneNumber?.slice(4) || "",
        phoneNumber: profiles[0]?.phoneNumber || "",
        city: profiles[0]?.city || null,
          warehouse: profiles[0]?.deliveryAddress || null,
          dateOfBirth: profiles[0]?.dateOfBirth
            ? new Date(profiles[0].dateOfBirth)
            : null,
        }
      : {
          firstName: "",
          lastName: "",
          email: userEmail || "",
          // phoneCode:"+380",
        phoneNumber: "",
          city: null,
          warehouse: null,
          dateOfBirth: null,
        };

  const handleSubmit = (values) => {
   
    const updatedValues = {
      ...values,
      // phoneNumber: `${values.phoneCode}${values.phoneNumber}`,
      dateOfBirth: values.dateOfBirth
        ? values.dateOfBirth.toISOString().split("T")[0]
        : null,
    };

    if (profiles && profiles.length > 0) {
      dispatch(
        updateProfile({ user: updatedValues, profileId: profiles[0].id })
      );
    }
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
              <Input name={"firstName"} type={"text"} placeholder={"Ім'я"} />
              <ErrorMessage
                className="errorMessageProfile"
                name="firstName"
                component="div"
              />
            </label>
            <label className="labelProfile">
              <Input name={"email"} type={"email"} readOnly={true} />
              <ErrorMessage
                className="errorMessageProfile"
                name="email"
                component="div"
              />
            </label>
            <label className="labelProfile">
              <Input name={"lastName"} type={"text"} placeholder={"Прізвище"} />
              <ErrorMessage
                className="errorMessageProfile"
                name="lastName"
                component="div"
              />
            </label>
            <label className="labelProfile">
              <Input name={"city"} type={"text"} placeholder="Місто" />

              <ErrorMessage
                className="errorMessageProfile"
                name="city"
                component="div"
              />
            </label>
            

            <label className="labelProfile">
               {/* <Input
                // className="phoneCode"
                name={"phoneCode"}
                type={"text"}
                placeholder="+380"
              /> */}
              <Input
                name={"phoneNumber"}
                type={"text"}
                placeholder="Номер телефону"
              />

              <ErrorMessage
                className="errorMessageProfile"
                name="phoneNumber"
                component="div"
              />
            </label>

            <label className="labelProfile">
              <Input
                name={"warehouse"}
                type={"text"}
                placeholder="Відділення"
              />

              <ErrorMessage
                className="errorMessageProfile"
                name="warehouse"
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
            <ErrorMessage
                className="errorMessageDate"
                name="dateOfBirth"
                component="div"
              />
            </label>

            <ButtonLight title={"Зберегти зміни"} width={"390px"} />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
