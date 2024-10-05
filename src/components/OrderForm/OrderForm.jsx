import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import { createOrder } from "src/redux/orders/operations";
import { selectProfiles } from "src/redux/user/selectors";
import { SubmitOrderSchema } from "src/schemas/SubmitOrderSchema";
import { getNewPostCities } from "src/services/getNewPostCities";
import { getNewPostWarehouses } from "src/services/getNewPostWarehouses";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import { WrapperFormOrder } from "./Styled";
import IconSearch from "src/assets/images/search.svg?react";
import { selectBasket } from "src/redux/basket/selectors";
import { createProfile, updateProfile } from "src/redux/user/operations";
import { checkout } from "src/services/checkout";
import { selectUser } from "src/redux/auth/selectors";
import NotificationCustom from "../NotificationCustom/NotificationCustom";
import { toast } from "react-hot-toast";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: 15,
    paddingLeft: 15,
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

const OrderForm = () => {
  const user = useSelector(selectProfiles);
  const emailUser = useSelector(selectUser);
  const basketProducts = useSelector(selectBasket);
  const dispatch = useDispatch();
  const initialCity = user?.[0]?.city
    ? { value: user[0].city, label: user[0].city }
    : null;
  const initialWarehouse = user?.[0]?.deliveryAddress
    ? { value: user[0].deliveryAddress, label: user[0].deliveryAddress }
    : null;
  const [city, setCity] = useState(initialCity);
  const [warehouse, setWarehouse] = useState(initialWarehouse);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const cityRef = useRef(null);
  const warehouseRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  // Прокрутка до поля, яке не пройшло валідацію
  const scrollToError = (errors) => {
    let element = null;

    if (errors.firstName && firstNameRef.current) {
      element = firstNameRef.current;
    } else if (errors.lastName && lastNameRef.current) {
      element = lastNameRef.current;
    } else if (errors.phoneNumber && phoneNumberRef.current) {
      element = phoneNumberRef.current;
    } else if (errors.city && cityRef.current) {
      element = cityRef.current;
    } else if (errors.deliveryAddress && warehouseRef.current) {
      element = warehouseRef.current;
    }

    if (element) {
      // Прокручуємо до елемента
      element.scrollIntoView({ behavior: "smooth" });

      // Додаємо зміщення на -100px
      setTimeout(() => {
        window.scrollBy({ top: -100, behavior: "smooth" });
      }, 300); // Невелика затримка, щоб дочекатися завершення scrollIntoView
    }
  };

  useEffect(() => {
    if (user && user.length > 0) {
      const userInfo = user[0];
      setFirstName(userInfo.firstName || "");
      setLastName(userInfo.lastName || "");
      setPhoneNumber(userInfo.phoneNumber || "");
      setUserEmail(emailUser);
      setCity(
        userInfo.city ? { value: userInfo.city, label: userInfo.city } : null
      );
      setWarehouse(
        userInfo.deliveryAddress
          ? { value: userInfo.deliveryAddress, label: userInfo.deliveryAddress }
          : null
      );
    }
  }, [user]);

  const initialValues = {
    firstName,
    lastName,
    phoneNumber,
    email: emailUser,
    city: city ? city.value : "",
    deliveryAddress: warehouse ? warehouse.value : "",
  };

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

  const handleUpdateProfile = async (values) => {
    try {
      const currentUser = user[0];
      const dateOfBirth = currentUser.dateOfBirth;
      const profileData = {
        ...values,
        dateOfBirth,
        deliveryAddress:
          values.deliveryAddress.trim() === "" ? null : values.deliveryAddress,
        city: values.city.trim() === "" ? null : values.city,
      };
      const profileId = user[0]?.id;
      const result = await dispatch(
        updateProfile({ user: profileData, profileId })
      );

      if (result.payload === 200) {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Дані оновлено."} />
          </div>,
          {
            duration: 2000,
          }
        );
      }
    } catch (error) {
      toast.custom(
        <div className="custom-toast">
          <NotificationCustom title={"Сталася помилка."} />
        </div>,
        {
          duration: 2000,
        }
      );
      throw new Error(result.error.message || "Failed to update profile");
    }
  };

  const handleCreateProfile = async (values) => {
    try {
      const profileData = {
        ...values,
        deliveryAddress:
          values.deliveryAddress.trim() === "" ? null : values.deliveryAddress,
        city: values.city.trim() === "" ? null : values.city,
      };
      const result = await dispatch(createProfile(profileData));

      if (result.payload === 200) {
        toast.custom(
          <div className="custom-toast">
            <NotificationCustom title={"Дані збережено."} />
          </div>,
          {
            duration: 2000,
          }
        );
      }
    } catch (error) {
      toast.custom(
        <div className="custom-toast">
          <NotificationCustom title={"Сталася помилка."} />
        </div>,
        {
          duration: 2000,
        }
      );
      throw new Error(result.error.message || "Failed to create profile");
    }
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const order = {
      customer: {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        city: values.city,
        deliveryAddress: values.deliveryAddress,
      },
      orderRecords: basketProducts.map((product) => ({
        productInstanceId: product.productInstanceId,
        quantity: product.quantity,
      })),
    };

    try {
      const response = await dispatch(createOrder(order)).unwrap();
      const orderId = response.id;
      console.log("before checkout",orderId)
      checkout(orderId);
    } catch (error) {
      console.error("Помилка при створенні замовлення:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WrapperFormOrder>
      {isLoading && <Loader />}
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={SubmitOrderSchema}
        validate={(values) => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = "Поле обов'язкове";
          }
          if (!values.lastName) {
            errors.lastName = "Поле обов'язкове";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Поле обов'язкове";
          }
          if (!values.city) {
            errors.city = "Поле обов'язкове";
          }
          if (!values.deliveryAddress) {
            errors.deliveryAddress = "Поле обов'язкове";
          }

          // Прокрутка до першого поля з помилкою
          if (Object.keys(errors).length > 0) {
            scrollToError(errors);
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className="styledForm">
            <div className="wrapperFields">
              <div className="containerLeft">
                {" "}
                <label className="styledLabel" ref={firstNameRef}>
                  <Input
                    name={"firstName"}
                    type={"text"}
                    placeholder={"Ваше ім'я"}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="errorMessage"
                  />
                </label>
                <label className="styledLabel" ref={lastNameRef}>
                  <Input
                    name={"lastName"}
                    type={"text"}
                    placeholder={"Ваше прізвище"}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="errorMessage"
                  />
                </label>
              </div>
              <div className="containerRight">
                {" "}
                <label className="styledLabel">
                  <Input name={"email"} type={"email"} readOnly={true} />
                  <ErrorMessage
                    className="errorMessage"
                    name="email"
                    component="p"
                  />
                </label>
                <label className="styledLabel" ref={phoneNumberRef}>
                  <Input
                    name={"phoneNumber"}
                    type={"text"}
                    placeholder={"Ваш номер телефону"}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="errorMessage"
                  />
                </label>
              </div>
            </div>

            {user && user.length > 0 ? (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleUpdateProfile(values)}
              >
                Змінити контактну інформацію
              </button>
            ) : (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleCreateProfile(values)}
              >
                Зберегти контактну інформацію
              </button>
            )}

            <Title title={"Доставка"} />
            <div className="containerIconSpan">
              <div className="circle">
                <div className="point"></div>
              </div>{" "}
              <span className="text">Відділення Нової Пошти</span>
            </div>
            <label className="styledLabel" ref={cityRef}>
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
            <label className="styledLabel" ref={warehouseRef}>
              <AsyncSelect
                name="warehouse"
                id="warehouse"
                placeholder="Відділення"
                loadOptions={(inputValue) =>
                  loadOptionsWarehouses(inputValue, city ? city.value : "")
                }
                onChange={(option) => {
                  setWarehouse(option);
                  setFieldValue("deliveryAddress", option ? option.value : "");
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
            {user && user.length > 0 ? (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleUpdateProfile(values)}
              >
                Змінити адресу
              </button>
            ) : (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleCreateProfile(values)}
              >
                Зберегти адресу
              </button>
            )}

            <Title title={"Оплата"} />
            <div className="containerIconSpan">
              <div className="circle">
                <div className="point"></div>
              </div>{" "}
              <span className="text">Онлайн</span>
            </div>
            <ButtonAuth title={"Перейти до оплати"} width={"390px"} />
          </Form>
        )}
      </Formik>
    </WrapperFormOrder>
  );
};

export default OrderForm;
