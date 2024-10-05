import { DatePickerWrapper } from "./Styled";
import DatePicker from "react-datepicker";
import { uk } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ values, onBlur, setFieldValue, error, touched }) => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1924 + 1 },
    (_, i) => 1924 + i
  );
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  const borderClass =
    touched && error ? "errorBorder" : touched && !error ? "successBorder" : "";

  return (
    <DatePickerWrapper>
      <DatePicker
        className={`styledDatePicker ${borderClass}`}
        selected={values}
        onChange={(date) => setFieldValue("dateOfBirth", date)}
        dateFormat="dd/MM/yyyy"
        id="dateOfBirth"
        name="dateOfBirth"
        onBlur={onBlur}
        placeholderText="Дата народження"
        showMonthDropdown
        showYearDropdown
        locale={uk}
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className="custom-header">
            <select
              className="customSelect"
              value={months[new Date(date).getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option, index) => (
                <option className="customOption" key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className="customSelect"
              value={new Date(date).getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option className="customOption" key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      />
    </DatePickerWrapper>
  );
};

export default Calendar;
