import { formatSize } from "src/utils/formatSize";
import { StyledList } from "./Styled";

const sizeOrder = ["S", "M", "L"];

const formatSizeForComparison = (size) => (size ? size.toUpperCase() : "");

const ListSizes = ({ sizes, activeColor, activeSize, handleClickSize }) => {
  const fallbackSize = ["Універсальний"];
  const uniqueSizes =
    sizes && sizes.length > 0
      ? [...new Set(sizes.map(formatSize))].sort(
          (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
        )
      : fallbackSize;

  return (
    <StyledList>
      {uniqueSizes.map((size, index) => (
        <li key={index}>
          <button
            type="button"
            className={`itemSizes ${
              formatSizeForComparison(size) ===
              formatSizeForComparison(activeSize)
                ? "active"
                : ""
            }`}
            onClick={() => {
              handleClickSize(activeColor, size);
            }}
          >
            <span className="sizeSpan">{size}</span>
          </button>
        </li>
      ))}
    </StyledList>
  );
};

export default ListSizes;
