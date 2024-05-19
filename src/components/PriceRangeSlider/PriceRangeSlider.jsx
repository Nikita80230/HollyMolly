import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { StyledPriceRangeSlider } from "./Styled";
import { useDispatch } from "react-redux";

const PriceRangeSlider = ({ handleChangePrice }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([150, 2000]);

  const handleChange = (value) => {
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
        <span className="minPriceLabel">₴{value[0]}</span>
        <span className="maxPriceLabel">₴{value[1]}</span>
      </div>
    </StyledPriceRangeSlider>
  );
};

export default PriceRangeSlider;
