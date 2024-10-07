import { ErrorMessage, Field, Formik } from "formik";
import { DatePickerWrapper, StyledForm } from "./Styled";
import DatePicker from "react-datepicker";
import { uk } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, updateProfile } from "src/redux/user/operations";
import { selectProfiles } from "src/redux/user/selectors";
import { ProfileSchema } from "src/schemas/ProfileSchema";
import Input from "../Input/Input";
import ButtonLight from "../ButtonLight/ButtonLight";
import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import IconSearch from "src/assets/images/search.svg?react";
import { getNewPostCities } from "src/services/getNewPostCities";
import { getNewPostWarehouses } from "src/services/getNewPostWarehouses";
import Calendar from "../Calendar/Calendar";
import { toast } from "react-hot-toast";
import NotificationCustom from "../NotificationCustom/NotificationCustom";
import Modal from "react-modal";
import ModalNotification from "../ModalNotification/ModalNotification";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import { updateUserEmail } from "src/redux/auth/operations";
import { logOut } from "src/redux/auth/authSlice";
import ButtonAuth from "../ButtonAuth/ButtonAuth";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: 15,
    paddingLeft: 15,
    position:"relative",
    backgroundColor: "#fff",
    borderColor: state.isFocused
      ? "#000"
      : state.selectProps.error && state.selectProps.touched
      ? "#e85a50"
      : state.selectProps.touched && !state.selectProps.error
      ? "#349920"
      : "#c4c4c4",

    "&:hover": {
      borderColor: state.isFocused ? "#000" : "#a1a1a2",
    },
    transition:"300ms cubic-bezier(0.4, 0, 0.2, 1)",
    width: 390,
    height: 60,
    boxShadow: "none",
    "@media (max-width: 564px)": {
      width: "100%",
      height: 52,
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#c4c4c4",
    fontFamily: "Didact Gothic",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#100503",
    fontFamily: "Didact Gothic",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
   
   
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: "Didact Gothic",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
    color: "#100503",
    
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "lightgray" : "white",
    color: "black",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    fontFamily: "Didact Gothic",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const ProfileForm = ({ userEmail }) => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);

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

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
    dispatch(logOut());
    navigate(routes.LOGIN);
  }

  const loadOptions = async (inputValue) => {
    try {
      const response = await getNewPostCities(inputValue);

      const cityOptions = response.map((city) => ({
        value: city.Description,
        label: city.Description,
      }));

      return cityOptions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const loadOptionsWarehouses = async (inputValue, city) => {
    if (!city) {
      return [];
    }
    try {
      const response = await getNewPostWarehouses(inputValue, city);

      const warehouseOptions = response.map((warehouse) => ({
        value: warehouse.Description,
        label: warehouse.Description,
      }));
      return warehouseOptions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSubmit = async (values) => {
    try {
      const updatedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth
          ? values.dateOfBirth.toISOString().split("T")[0]
          : null,
      };

      const profileFieldsToCompare = {
        firstName: updatedValues.firstName,
        lastName: updatedValues.lastName,
        phoneNumber: updatedValues.phoneNumber,
        dateOfBirth: updatedValues.dateOfBirth,
        city: updatedValues.city,
        warehouse: updatedValues.warehouse,
      };

      const initialProfileFields = {
        firstName: initialValues.firstName,
        lastName: initialValues.lastName,
        phoneNumber: initialValues.phoneNumber,
        dateOfBirth: initialValues.dateOfBirth
          ? new Date(initialValues.dateOfBirth).toISOString().split("T")[0]
          : null,
        city: initialValues.city,
        warehouse: initialValues.warehouse,
      };

      if (!profiles || !profiles.length) {
        const resultCreateProfile = await dispatch(
          createProfile(updatedValues)
        );
        if (resultCreateProfile.payload === 200) {
          toast.custom(
            <div className="custom-toast">
              <NotificationCustom title={"Дані успішно збережено"} />
            </div>,
            {
              duration: 3000,
            }
          );
        } else {
          throw new Error("Помилка при створенні профілю");
        }
      }

      const isProfileChanged = !Object.keys(profileFieldsToCompare).every(
        (key) => profileFieldsToCompare[key] === initialProfileFields[key]
      );

      if (isProfileChanged && profiles && profiles.length > 0) {
        const resultUpdateProfile = await dispatch(
          updateProfile({ user: updatedValues, profileId: profiles[0].id })
        );

        if (resultUpdateProfile.payload === 200) {
          toast.custom(
            <div className="custom-toast">
              <NotificationCustom title={"Дані успішно оновлено"} />
            </div>,
            {
              duration: 3000,
            }
          );
        } else {
          throw new Error("Помилка при створенні профілю");
        }
      }

      if (values.email !== initialValues.email) {
        const emailUpdateResult = await dispatch(
          updateUserEmail({ email: values.email })
        );

        if (emailUpdateResult.payload === 204) {
          openModal();
        } else if (emailUpdateResult.error) {
          toast.custom(
            <div className="custom-toast">
              <NotificationCustom
                title={"Користувач з таким email вже існує"}
              />
            </div>,
            {
              duration: 3000,
            }
          );
          throw new Error(
            emailUpdateResult.error.message || "Failed to update email"
          );
        }
      }
    } catch (error) {
      toast.custom(
        <div className="custom-toast">
          <NotificationCustom title={"Сталася помилка"} />
        </div>,
        {
          duration: 3000,
        }
      );
      throw new Error(
        emailUpdateResult.error.message || "Failed to update email"
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
  }, [profiles, userEmail]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 564);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleBlur, errors, touched }) => (
          <StyledForm autoComplete="off">
            <div className="wrapperFields">
              <div className="containerLeft">
                <label className="labelProfile">
                  <Input
                    name={"firstName"}
                    type={"text"}
                    placeholder={"Ім'я"}
                    value={values.firstName}
                    onChange={(e) => setFieldValue("firstName", e.target.value)}
                  />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="firstName"
                    component="p"
                  />
                </label>
                <label className="labelProfile">
                  <Input
                    name={"lastName"}
                    type={"text"}
                    placeholder={"Прізвище"}
                    value={values.lastName}
                    onChange={(e) => setFieldValue("lastName", e.target.value)}
                  />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="lastName"
                    component="p"
                  />
                </label>
                <label className="labelProfile">
                  <Input
                    name={"phoneNumber"}
                    type={"text"}
                    placeholder="Номер телефону"
                    value={values.phoneNumber}
                    onChange={(e) =>
                      setFieldValue("phoneNumber", e.target.value)
                    }
                  />

                  <ErrorMessage
                    className="errorMessageProfile"
                    name="phoneNumber"
                    component="p"
                  />
                </label>
                <label className="labelProfile">
                  <Input
                    name={"email"}
                    type={"email"}
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <ErrorMessage
                    className="errorMessageProfile"
                    name="email"
                    component="p"
                  />
                </label>
              </div>
              <div className="containerRight">
                <label className="labelProfile" autoComplete="off">
                  <Calendar
                    values={values.dateOfBirth}
                    onBlur={handleBlur}
                    setFieldValue={setFieldValue}
                    error={errors.dateOfBirth}
                    touched={touched.dateOfBirth}
                  />
                  <ErrorMessage
                    className="errorMessageDate"
                    name="dateOfBirth"
                    component="p"
                  />
                </label>
                <label className="labelProfile">
                  <AsyncSelect
                    name="city"
                    id="city"
                    placeholder="Місто"
                    loadOptions={loadOptions}
                    onChange={(option) => {
                      setCity(option);
                      setFieldValue("city", option ? option.value : "");
                    }}
                    value={city}
                    isClearable
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: null,
                      DropdownIndicator: () => <IconSearch />,
                    }}
                    error={errors.city}
                    touched={touched.city}
                  />
                  <ErrorMessage
                    name="city"
                    component="p"
                    className="errorMessage"
                  />
                </label>
                <label className="labelProfile">
                  <AsyncSelect
                    name="warehouse"
                    id="warehouse"
                    placeholder="Відділення"
                    loadOptions={(inputValue) =>
                      loadOptionsWarehouses(inputValue, city ? city.value : "")
                    }
                    onChange={(option) => {
                      setWarehouse(option);
                      setFieldValue(
                        "deliveryAddress",
                        option ? option.value : ""
                      );
                    }}
                    value={warehouse}
                    isClearable
                    isDisabled={!city}
                    styles={customStyles}
                    components={{
                      IndicatorSeparator: null,
                      DropdownIndicator: () => <IconSearch />,
                    }}
                    error={errors.warehouse}
                    touched={touched.warehouse}
                  />
                  <ErrorMessage
                    name="deliveryAddress"
                    component="p"
                    className="errorMessage"
                  />
                </label>
              </div>
            </div>
            {!isMobile ? (
              <ButtonLight title={"Зберегти зміни"} width={"390px"} />
            ) : (
              <ButtonAuth title={"Зберегти зміни"} width={"100%"} />
            )}
          </StyledForm>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content-register"
        overlayClassName="modal-overlay"
        contentLabel="Modal"
      >
        <ModalNotification
          message={"Щоб підтвердити зміну email, потрібно авторизуватись."}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default ProfileForm;
