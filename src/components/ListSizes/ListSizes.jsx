import { formatSize } from 'src/utils/formatSize';
import { StyledList } from './Styled';

const sizeOrder = ['S', 'M', 'L'];

const ListSizes = ({ sizes, activeSizeId, setActiveSizeId }) => {
  const uniqueSizes = [...new Set(sizes.map(formatSize))].sort(
    (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
  );

  return (
    <StyledList>
      {uniqueSizes.map((size, index) => (
        <li key={index}>
          <button
            type="button"
            className={`itemSizes ${size === activeSizeId ? 'active' : ''}`}
            onClick={() => {
              setActiveSizeId(size);
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