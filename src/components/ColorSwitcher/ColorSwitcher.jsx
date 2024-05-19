import { useState } from "react";
import { StyledColorSwitcher } from "./Styled";

const colors = [
  { colorName: "green", colorRgb: "#dfc7b1" },
  { colorName: "yellow", colorRgb: "#4169E1" },
  { colorName: "blue", colorRgb: "#161616" },
  { colorName: "black", colorRgb: "#fff" },
  
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
