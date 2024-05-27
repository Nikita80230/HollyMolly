export const getSortedFilteredProducts = (filteredProducts, sortCriteria) => {
  if (sortCriteria === "byRate") {
    return [...filteredProducts].sort((a, b) => {
      return b.rating - a.rating;
    });
  }
  if (sortCriteria === "asc") {
    return [...filteredProducts]
      .map((filteredProduct) => {
        return {
          ...filteredProduct,
          productsInstances: [...filteredProduct.productsInstances].sort(
            (product1, product2) => {
              // console.log(product1, product2);
              return product1.priceAfterDiscount - product2.priceAfterDiscount;
            }
          ),
        };
      })
      .sort((product1, product2) => {
        return (
          product1.productsInstances[0].priceAfterDiscount -
          product2.productsInstances[0].priceAfterDiscount
        );
      });
  }
  if (sortCriteria === "desc") {
    return [...filteredProducts]
      .map((filteredProduct) => {
        return {
          ...filteredProduct,
          productsInstances: [...filteredProduct.productsInstances].sort(
            (product1, product2) => {
              return product2.priceAfterDiscount - product1.priceAfterDiscount;
            }
          ),
        };
      })
      .sort((product1, product2) => {
        return (
          product2.productsInstances[0].priceAfterDiscount -
          product1.productsInstances[0].priceAfterDiscount
        );
      });
  }
  // if (sortCriteria === "byDate") {
  //   return [...filteredProducts].sort((a, b) => {
  //     return b.rating - a.rating;
  //   });
  // }
};

export const getFilteredProducts = (filters, productsByCurrentCategory) =>
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
      if (filters?.materials.includes(product.productsInstances[0].material))
        return true;

      return false;
    })
    .filter((product) => {
      if (filters?.sizes.length === 0) return true;
      if (filters?.sizes.includes(product.productsInstances[0].size))
        return true;

      return false;
    });
