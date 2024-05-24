import colorTranslations from "src/utils/colorTranslations";
import { StyledList } from "./Styled";


const translateColor = (color) => {
  return colorTranslations[color.toLowerCase()] || color;
};

const ListColorsButtons = ({ colors }) => {
  const translatedColors = colors.map((colorObj) => ({
    ...colorObj,
    color: translateColor(colorObj.color),
  }));

  const uniqueColors = translatedColors.filter(
    (colorObj, index, self) =>
      index === self.findIndex((t) => t.color === colorObj.color)
  );

  return (
    <StyledList>
      {uniqueColors.map(({ id, color }) => (
        <li key={id}>
          <button
            className="buttonColor"
            style={{
              backgroundColor: color,
            }}
          ></button>
        </li>
      ))}
    </StyledList>
  );
};

export default ListColorsButtons;
