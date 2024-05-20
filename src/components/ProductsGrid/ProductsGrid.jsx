import { useMemo } from "react";
import { useSelector } from "react-redux";
import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";

import { selectProductsByCurrentCategory } from "src/redux/products/productsSlice";

import { StyledProductsGrid } from "./Styled";

const ProductsGrid = ({ className, filters,productsByCurrentCategory }) => {
  // const productsByCurrentCategory = useSelector(
  //   selectProductsByCurrentCategory
  // );

  // console.log("filters", filters);

  const filteredProducts = useMemo(
    () =>
      productsByCurrentCategory
        .filter((product) => {
          if (filters?.priceRange.length === 0) return true;
          if (
            product.productsInstances[0].price >= filters?.priceRange[0] &&
            product.productsInstances[0].price <= filters?.priceRange[1]
          )
            return true;

          return false;
        })
        .filter((product) => {
          if (filters?.colors.length === 0) return true;
          if (filters?.colors.includes(product.productsInstances[0].color))
            return true;

          return false;
        })
        .filter((product) => {
          if (filters?.materials?.length === 0) return true;
          if (
            filters?.materials.includes(product.productsInstances[0].material)
          )
            return true;

          return false;
        })
        .filter((product) => {
          if (filters?.sizes.length === 0) return true;
          if (filters?.sizes.includes(product.productsInstances[0].size))
            return true;

          return false;
        }),
    [filters, productsByCurrentCategory]
  );

  console.log("filteredProducts", productsByCurrentCategory);

  return (
    <StyledProductsGrid className={className}>
      {filteredProducts.map((product) => {
        return <CardProductCatalog key={product.id} product={product} />;
      })}
    </StyledProductsGrid>
  );
};

export default ProductsGrid;
