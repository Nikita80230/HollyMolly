import { useState } from "react";
// import { StyledPriceRangeSlider } from "./Styled";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return value;
}

const PriceRangeSlider = ({ handleChangePrice }) => {
  const [value, setValue] = useState([500, 4500]);

  const handleChange = (event, newValue) => {
    // console.log("event.target.value", event.target.value);

    setValue(newValue);

    handleChangePrice(value);
  };

  return (
    <Box sx={{ maxWidth: 306, width: "100%" }}>
      <Slider
        sx={{
          marginBottom: 0,
          color: "#d9d9d9",
          "& .MuiSlider-thumb": {
            width: "24px",
            height: "24px",
            color: "#939fdf",
            // borderRadius: "1px",
          },
        }}
        min={120}
        max={5000}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <div className="priceLabels">
        <span className="minPriceLabel">₴120</span>
        <span className="maxPriceLabel">₴5000</span>
      </div>
    </Box>
  );
};

export default PriceRangeSlider;
