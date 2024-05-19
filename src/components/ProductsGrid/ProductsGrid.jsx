import { StyledProductsGrid } from "./Styled";
import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

const ProductsGrid = ({ className, products }) => {
  console.log("ProductsGrid", products);

  return (
    <StyledProductsGrid className={className}>
      {products.map((product) => (
        <CardProductCatalog key={product.id} product={product} />
      ))}
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
