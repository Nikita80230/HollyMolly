import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import { createOrder } from "src/redux/orders/operations";
// import {
//   clearBasket,
  
// } from "src/redux/products/productsSlice";
import { selectProfiles } from "src/redux/user/selectors";
import { SubmitOrderSchema } from "src/schemas/SubmitOrderSchema";
import { getNewPostCities } from "src/services/getNewPostCities";
import { getNewPostWarehouses } from "src/services/getNewPostWarehouses";
import Loader from "../Loader/Loader";

const OrderForm = ({ onSuccess }) => {
  // const user = useSelector(selectProfiles);
  
  // const dispatch = useDispatch();
  // const [city, setCity] = useState(null);
  // const [warehouse, setWarehouse] = useState(null);

  // const initialValues =
  //   user && user.length > 0
  //     ? {
  //         firstName: user[0]?.firstName || "",
  //         lastName: user[0]?.lastName || "",
  //         phoneNumber: user[0]?.phoneNumber || "",
  //         city: "",
  //         deliveryAddress: "",
  //       }
  //     : {
  //         firstName: "",
  //         lastName: "",
  //         phoneNumber: "",
  //         city: "",
  //         deliveryAddress: "",
  //       };

  // const loadOptions = async (inputValue) => {
  //   try {
  //     const response = await getNewPostCities(inputValue);
  //     const cityOptions = response.map((city) => ({
  //       value: city.text,
  //       label: city.text,
  //       koatuu: city.koatuu,
  //     }));
  //     return cityOptions;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  // const loadOptionsWarehouses = async (inputValue) => {
  //   if (!city) {
  //     return [];
  //   }
  //   try {
  //     const response = await getNewPostWarehouses(city.koatuu);
  //     const warehouseOptions = response.map((warehouse) => ({
  //       value: warehouse.text,
  //       label: warehouse.text,
  //     }));
  //     return warehouseOptions;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  // const handleSubmit = async (values) => {
  //   const order = {
  //     customer: {
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       phoneNumber: values.phoneNumber,
  //       city: values.city,
  //       deliveryAddress: values.deliveryAddress,
  //     },
  //     orderRecords: basketProducts.map((product) => ({
  //       productInstanceId: product.productInstanceId,
  //       quantity: product.quantity,
  //     })),
  //   };

  //   try {
  //     dispatch(createOrder(order)).unwrap();
  //     onSuccess();
  //     dispatch(clearBasket());
  //   } catch (error) {
  //     console.error("Помилка при створенні замовлення:", error);
  //   }
  // };

  return (<></>
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={SubmitOrderSchema}
    //   onSubmit={handleSubmit}
    // >
    //   {({ setFieldValue, values }) => (
    //     <Form>
    //       <Field id="firstName" name="firstName" type="text" />
    //       <ErrorMessage name="firstName" component="p" />
    //       <Field name="lastName" type="text" />
    //       <ErrorMessage name="lastName" component="p" />
    //       <Field name="phoneNumber" />
    //       <ErrorMessage name="phoneNumber" component="p" />
    //       <AsyncSelect
    //         name="city"
    //         id="city"
    //         placeholder="Введіть ваше місто"
    //         loadOptions={loadOptions}
    //         onChange={(option) => {
    //           setCity(option);
    //           setFieldValue("city", option ? option.value : "");
    //         }}
    //         value={city}
    //         isClearable
    //       />
    //       <ErrorMessage name="city" component="p" />
    //       <AsyncSelect
    //         name="warehouse"
    //         id="warehouse"
    //         placeholder="Виберіть відділення"
    //         loadOptions={loadOptionsWarehouses}
    //         onChange={(option) => {
    //           setWarehouse(option);
    //           setFieldValue("deliveryAddress", option ? option.value : "");
    //         }}
    //         value={warehouse}
    //         isClearable
    //         isDisabled={!city}
    //       />
    //       <ErrorMessage name="deliveryAddress" component="p" />

    //       <button type="submit">Підтвердити замовлення</button>
    //     </Form>
    //   )}
    // </Formik>
  );
};

export default OrderForm;
