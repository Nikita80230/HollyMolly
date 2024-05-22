import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

import { StyledProductsGrid } from "./Styled";

const ProductsGrid = ({ className, filteredProducts, sortType }) => {
  return (
    <StyledProductsGrid className={className}>
      {filteredProducts.map((product) => {
        return <CardProductCatalog key={product.id} product={product} />;
      })}
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
