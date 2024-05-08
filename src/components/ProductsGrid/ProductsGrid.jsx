import { useSelector } from "react-redux";
import { StyledProductsGrid } from "./Styled";
import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";

const ProductsGrid = ({ className }) => {
  const productsByCurrentCategory = useSelector(
    selectProductsByCurrentCategory
  );

  console.log("ProductsGrid", productsByCurrentCategory);

  return (
    <StyledProductsGrid className={className}>ProductsGrid</StyledProductsGrid>
  );
};

export default ProductsGrid;
