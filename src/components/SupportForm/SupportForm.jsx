import Select from "react-select";
import { ErrorMessage, Field, Formik } from "formik";
import { SupportFormSchema } from "src/schemas/SupportFormScheme";
import CloseIcon from "../../assets/images/closeCrossIcon.svg?react";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import Input from "../Input/Input";
import { StyledForm, SupportContainer } from "./Styled";
import { supportSentEmail } from "src/services/supportSentEmail";
import { toast } from "react-hot-toast";

const customStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.20833,
      textAlign: "left",
      color: "#100503",
    };
  },
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: 5,
    borderColor: state.isFocused
      ? "#c4c4c4"
      : state.selectProps.error && state.selectProps.touched
      ? "#e85a50"
      : state.selectProps.touched && !state.selectProps.error
      ? "#349920"
      : "#c4c4c4",
    boxShadow: "none",
    paddingLeft: 10,
    paddingRight: 16,
    width: "100%",
    height: 60,
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.20833,
    textAlign: "left",
    color: "#100503",
    "&:hover": {
      borderColor: "#c4c4c4",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.20833,
    textAlign: "left",
    color: state.isSelected ? "#e85a50" : "#100503",
    backgroundColor: state.isFocused ? "#fff" : "#fff",
    "&:active": {
      backgroundColor: "#fff",
    },
    "@media only screen and (max-width: 564px)": {
      fontSize: 14,
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: "5px 5px 10px 0 #c0bfbf",
    borderRadius: 5,
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 16,
    borderRadius: 5,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const themeOptions = [
  { value: "accountIssues", label: "Проблеми з акаунтом" },
  { value: "productQuestions", label: "Питання по товару" },
  { value: "paymentQuestions", label: "Питання про оплату" },
  { value: "other", label: "Інше" },
];

const themeMapping = {
  accountIssues: 1,
  productQuestions: 2,
  paymentQuestions: 3,
  other: 0,
};

const SupportForm = ({ onClose, openModalNotification }) => {
  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    const mappedTheme = themeMapping[values.theme] || 0;
    const supportValues = {
      ...values,
      theme: mappedTheme,
    };

    supportSentEmail(supportValues);

    resetForm();
    setFieldValue("theme", "");
    openModalNotification();
    onClose();
    
  };

  return (
    <SupportContainer>
      <button type="button" className="buttonClose" onClick={onClose}>
        <CloseIcon className="styledIcon" />
      </button>
      <h2 className="titleSupport">Зворотній зв'язок</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          orderId: "",
          theme: "",
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SupportFormSchema}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <StyledForm>
            <label className="styledLabel">
              <Input
                name="name"
                type="text"
                placeholder="Твоє ім'я"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                name="name"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Input
                name="email"
                type="text"
                placeholder="Твій email"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                name="email"
                component="p"
              />
            </label>
            <label className="styledLabel">
              <Input
                name="orderId"
                type="text"
                placeholder="Номер замовлення"
                autoComplete="off"
              />
              <ErrorMessage
                className="errorMessage"
                name="orderId"
                component="p"
              />
            </label>

            <label className="styledLabelSelect">
              <Select
                name="theme"
                options={themeOptions}
                placeholder="Тема"
                styles={customStyles}
                onChange={(option) => setFieldValue("theme", option.value)}
                value={
                  themeOptions.find(
                    (option) => option.value === values.theme
                  ) || ""
                }
                error={errors.theme}
                touched={touched.theme}
              />
              <ErrorMessage
                className="errorMessage"
                name="theme"
                component="p"
              />
            </label>
            <label className="labelTextarea">
              <Field
                as="textarea"
                name="description"
                placeholder="Опис"
                className={`fieldTextarea ${
                  touched.description && !errors.description
                    ? "inputSuccess"
                    : errors.description && touched.description
                    ? "inputError"
                    : ""
                }`}
              />
              <ErrorMessage
                className="errorMessage"
                name="description"
                component="p"
              />
            </label>
            <ButtonAuth title={"Відправити"} />
          </StyledForm>
        )}
      </Formik>
    </SupportContainer>
  );
};

export default SupportForm;
