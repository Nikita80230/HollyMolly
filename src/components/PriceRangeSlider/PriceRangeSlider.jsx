import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { StyledPriceRangeSlider } from "./Styled";

const PriceRangeSlider = ({ handleChangePrice }) => {
  const [value, setValue] = useState([900, 3000]);

  const handleChange = (value) => {
    setValue(value);

    handleChangePrice(value);
  };

  return (
    <StyledPriceRangeSlider>
      <RangeSlider
        min={500}
        max={4500}
        step={5}
        value={value}
        onInput={(value) => {
          handleChange(value);
        }}
        className="range-slider-yellow rangeSlider"
      />
      <div className="priceLabels">
        <span className="minPriceLabel">₴{value[0]}</span>
        <span className="maxPriceLabel">₴{value[1]}</span>
      </div>
    </StyledPriceRangeSlider>
  );
};

export default PriceRangeSlider;
