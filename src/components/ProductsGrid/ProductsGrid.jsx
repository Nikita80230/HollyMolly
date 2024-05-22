import { useMemo } from "react";
// import { useSelector } from "react-redux";
import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

// import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";

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
