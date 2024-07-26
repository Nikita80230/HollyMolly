import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
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
import { updateProfile } from "src/redux/user/operations";
import { checkout } from "src/services/checkout";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#fff",
    borderColor: state.isFocused ? "#000" : "#c4c4c4",
    "&:hover": {
      borderColor: state.isFocused ? "#000" : "#a1a1a2",
    },
    width: 390,
    height: 60,
    boxShadow: "none",
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
  const [saveProfile, setSaveProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues =
    user && user.length > 0
      ? {
          firstName: user[0]?.firstName || "",
          lastName: user[0]?.lastName || "",
          phoneNumber: user[0]?.phoneNumber || "",
          city: user[0]?.city || null,
          deliveryAddress: user[0]?.deliveryAddress || null,
        }
      : {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          city: "",
          deliveryAddress: "",
        };

  const loadOptions = async (inputValue) => {
    try {
      const response = await getNewPostCities(inputValue);
      const cityOptions = response.map((city) => ({
        value: city.text,
        label: city.text,
        koatuu: city.koatuu,
      }));
      return cityOptions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const loadOptionsWarehouses = async (inputValue) => {
    if (!city) {
      return [];
    }
    try {
      const response = await getNewPostWarehouses(city.koatuu);
      const warehouseOptions = response.map((warehouse) => ({
        value: warehouse.text,
        label: warehouse.text,
      }));
      return warehouseOptions;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSaveProfile = (values) => {
    if (user && user.length > 0) {
      const profileId = user[0]?.id;
      dispatch(updateProfile({ user: values, profileId }));
    }
    setSaveProfile(false);
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
      checkout(orderId);
    } catch (error) {
      console.error("Помилка при створенні замовлення:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(isLoading)

  return (
    <WrapperFormOrder>
      {isLoading && <Loader/>}
      <Formik
        initialValues={initialValues}
        // enableReinitialize={true}
        validationSchema={SubmitOrderSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="styledForm">
            <label className="styledLabel">
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
            <label className="styledLabel">
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
            <label className="styledLabel">
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
            {user ? (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleSaveProfile(values)}
              >
                Змінити контактну інформацію
              </button>
            ) : (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleSaveProfile(values)}
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
            <label className="styledLabel">
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
              />
              <ErrorMessage
                name="city"
                component="p"
                className="errorMessage"
              />
            </label>
            <label className="styledLabel">
              <AsyncSelect
                name="warehouse"
                id="warehouse"
                placeholder="Відділення"
                loadOptions={loadOptionsWarehouses}
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
              />
              <ErrorMessage
                name="deliveryAddress"
                component="p"
                className="errorMessage"
              />
            </label>
            {user ? (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleSaveProfile(values)}
              >
                Змінити адресу
              </button>
            ) : (
              <button
                type="button"
                className="buttonSave"
                onClick={() => handleSaveProfile(values)}
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
