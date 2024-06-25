import { useState } from "react";
import { StyledColorSwitcher } from "./Styled";

const colors = [
  { colorName: "green", colorRgb: "#fff6e7" },
  { colorName: "yellow", colorRgb: "#e2edf4" },
  { colorName: "blue", colorRgb: " #eff9f1" },
  { colorName: "black", colorRgb: "#f9eff5" },
];

const ColorSwitcher = () => {
  const [chosenColor, setChosenColor] = useState({
    colorName: "",
    colorRgb: "",
  });
  return (
    <StyledColorSwitcher>
      {colors.map((color) => {
        return (
          <button
            className={`colorBtn ${
              chosenColor.colorName === color.colorName ? "activeColorBtn" : ""
            }`}
            onClick={() => setChosenColor(color)}
            key={color.colorName}
            type="button"
            style={
              color.colorRgb !== "#fff"
                ? { background: color.colorRgb }
                : { background: color.colorRgb }
            }
          ></button>
        );
      })}
    </StyledColorSwitcher>
  );
};

export default ColorSwitcher;
