import { useSelector } from "react-redux";
import { StyledProductsGrid } from "./Styled";
import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";
import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

const ProductsGrid = ({ className }) => {
  const productsByCurrentCategory = useSelector(
    selectProductsByCurrentCategory
  );

  console.log("ProductsGrid", productsByCurrentCategory);

  return (
    <StyledProductsGrid className={className}>
      <CardProductCatalog/>
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
