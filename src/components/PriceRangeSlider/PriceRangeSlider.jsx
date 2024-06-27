import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { StyledPriceRangeSlider } from "./Styled";

const PriceRangeSlider = ({ handleChangePrice }) => {
  const [value, setValue] = useState([150, 2000]);

  const handleChange = (value) => {
    // console.log(value);
    setValue(value);
    handleChangePrice({ name: "priceRange", value });
  };

  return (
    <StyledPriceRangeSlider>
      <RangeSlider
        min={100}
        max={2500}
        step={5}
        value={value}
        onInput={(value) => {
          handleChange(value);
        }}
        className="range-slider-yellow rangeSlider"
       
      />
      <div className="priceLabels">
        <span className="priceLabel">{`₴${value[0]}`}</span>
        <span className="priceLabel">{`₴${value[1]}`}</span>
      </div>
      <div className="priceInputs">
        <input
          className="minPriceInput priceInput"
          onChange={(e) => {
            handleChange([e.target.value, value[1]]);
          }}
          value={value[0]}
        />
        <div className="divider"></div>
        <input
          className="maxPriceInput priceInput"
          onChange={(e) => {
            handleChange([value[0], e.target.value]);
          }}
          value={value[1]}
        />
      </div>
    </StyledPriceRangeSlider>
  );
};

export default PriceRangeSlider;
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
