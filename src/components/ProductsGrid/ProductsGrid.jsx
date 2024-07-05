import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

import { StyledProductsGrid } from "./Styled";

const ProductsGrid = ({
  className,
  filteredProducts,
  sortType,
  colors,
}) => {
  return (
    <StyledProductsGrid className={className}>
      {filteredProducts.map((product,index) => {
        return (
          <CardProductCatalog
            key={product.id}
            product={product}
            sortType={sortType}
            index={index}
            borderColor={colors[index % colors.length]}
          />
        );
      })}
      {filteredProducts.length === 0 && (
        <h2 style={{ width: "100%", height: "50%", margin: "100px" }}>
          Таких товарів поки немає
        </h2>
      )}
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
