import { StyledColorSwitcher } from "./Styled";

const colors = [
  { colorName: "green", colorRgb: "#dfc7b1" },
  { colorName: "yellow", colorRgb: "#4169E1" },
  { colorName: "blue", colorRgb: "#161616" },
  { colorName: "black", colorRgb: "#fff" },
];

const ColorSwitcher = () => {
  return (
    <StyledColorSwitcher>
      {colors.map((color) => {
        return (
          <button
            key={color.colorName}
            type="button"
            className="colorBtn"
            style={
              color.colorRgb !== "#fff"
                ? { background: color.colorRgb }
                : { background: color.colorRgb, border: "0.50px solid #3a3a3a" }
            }
          ></button>
        );
      })}
    </StyledColorSwitcher>
  );
};

export default ColorSwitcher;
