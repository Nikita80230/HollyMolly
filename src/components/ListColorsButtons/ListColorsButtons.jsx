import { StyledList } from "./Styled";

const ListColorsButtons = ({ colors }) => {
  const uniqueColors = colors.filter(
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
