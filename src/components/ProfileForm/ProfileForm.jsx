import { ErrorMessage, Field, Formik } from "formik";
import { DatePickerWrapper, StyledForm } from "./Styled";
import DatePicker from "react-datepicker";
import { uk } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "src/redux/user/operations";
import { selectProfiles } from "src/redux/user/selectors";
import { ProfileSchema } from "src/schemas/ProfileSchema";
import Input from "../Input/Input";
import ButtonLight from "../ButtonLight/ButtonLight";
import { useEffect, useState } from "react";

const ProfileForm = ({ userEmail }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  
  const initialCity = profiles?.[0]?.city
    ? { value: profiles[0].city, label: profiles[0].city }
    : null;
  const initialWarehouse = profiles?.[0]?.deliveryAddress
    ? { value: profiles[0].deliveryAddress, label: profiles[0].deliveryAddress }
    : null;
  const [city, setCity] = useState(initialCity);
  const [warehouse, setWarehouse] = useState(initialWarehouse);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailUser, setEmailUser] = useState("");

  const initialValues =
    profiles && profiles.length > 0
      ? {
          firstName: profiles[0]?.firstName || "",
          lastName: profiles[0]?.lastName || "",
          email: userEmail || "",
          phoneNumber: profiles[0]?.phoneNumber || "",
          city: profiles[0]?.city || "",
          warehouse: profiles[0]?.deliveryAddress || "",
          dateOfBirth: profiles[0]?.dateOfBirth
            ? new Date(profiles[0].dateOfBirth)
            : "",
        }
      : {
          firstName: "",
          lastName: "",
          email: userEmail || "",
          phoneNumber: "",
          city: "",
          warehouse: "",
          dateOfBirth: "",
        };

  const handleSubmit = (values) => {
    const updatedValues = {
      ...values,

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

  useEffect(() => {
    if (profiles && profiles.length > 0) {
      const userInfo = profiles[0];
      setFirstName(userInfo.firstName || "");
      setLastName(userInfo.lastName || "");
      setPhoneNumber(userInfo.phoneNumber || "");
      setEmailUser(userEmail);
      setCity(
        userInfo.city ? { value: userInfo.city, label: userInfo.city } : null
      );
      setWarehouse(
        userInfo.deliveryAddress
          ? { value: userInfo.deliveryAddress, label: userInfo.deliveryAddress }
          : null
      );
    }
  }, [profiles]);

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
            <div className="wrapperFields">
              <div className="containerLeft">
                <label className="labelProfile">
                  <Input
                    name={"firstName"}
                    type={"text"}
                    placeholder={"Ім'я"}
                  />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="firstName"
                    component="div"
                  />
                </label>
                <label className="labelProfile">
                  <Input
                    name={"lastName"}
                    type={"text"}
                    placeholder={"Прізвище"}
                  />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="lastName"
                    component="div"
                  />
                </label>
                <label className="labelProfile">
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
                  <Input name={"email"} type={"email"} readOnly={true} />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="email"
                    component="div"
                  />
                </label>
              </div>
              <div className="containerRight">
                <label className="labelProfile">
                  <DatePickerWrapper>
                    <DatePicker
                      className="styledDatePicker"
                      selected={values.dateOfBirth}
                      onChange={(date) => setFieldValue("dateOfBirth", date)}
                      dateFormat="dd/MM/yyyy"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      onBlur={handleBlur}
                      placeholderText="Дата народження"
                      // showYearDropdown
                       locale={uk}
                    />
                  </DatePickerWrapper>
                  <ErrorMessage
                    className="errorMessageDate"
                    name="dateOfBirth"
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
              </div>
            </div>

            <ButtonLight title={"Зберегти зміни"} width={"390px"} />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
