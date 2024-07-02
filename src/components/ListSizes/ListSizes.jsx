import { StyledList } from './Styled';

const ListSizes = ({ sizes, activeSizeId, setActiveSizeId }) => {
  const uniqueSizes = sizes.filter(
    (size, index) => index === sizes.findIndex((t) => t === size)
  );

  return (
    <StyledList>
      {uniqueSizes.map((size, index) => (
        <li key={index}>
          <button
            type="button"
            className={`itemSizes ${size === activeSizeId ? 'active' : ''}`}
            onClick={() => {
              console.log(`Clicked size: ${size}`);
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
