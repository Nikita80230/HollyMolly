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
  if (sortCriteria === "isNewCollection") {
    const products = [...filteredProducts].filter((filteredProduct) => {
      return [...filteredProduct.productsInstances].some((productInstance) => {
        return productInstance.isNewCollection === true;
      });
    });
    console.log("sorted products", products);
    return products;
  }
};

export const getFilteredProducts = (filters, productsByCurrentCategory) =>
  productsByCurrentCategory
    .filter((product) => {
      if (filters?.priceRange.length === 0) return true;

      const isInstancesPriceInPriceRage = product.productsInstances.some(
        (productInstance) =>
          productInstance.price >= filters?.priceRange[0] &&
          productInstance.price <= filters?.priceRange[1]
      );

      if (isInstancesPriceInPriceRage) return true;

      return false;
    })
    .filter((product) => {
      if (filters?.colors.length === 0) return true;

      const isFiltersColorIncludesInstancesColors =
        product.productsInstances.some((productInstance) => {
          return filters?.colors.includes(productInstance.color);
        });

      if (isFiltersColorIncludesInstancesColors) return true;

      return false;
    })
    .filter((product) => {
      if (filters?.materials?.length === 0) return true;

      const isFiltersMaterialIncludesInstancesMaterial =
        product.productsInstances.some((productInstance) => {
          return filters?.materials.includes(productInstance.material);
        });

      if (isFiltersMaterialIncludesInstancesMaterial) return true;

      return false;
    })
    .filter((product) => {
      if (filters?.sizes.length === 0) return true;

      const isFiltersSizeIncludesInstancesSize = product.productsInstances.some(
        (productInstance) => {
          return filters?.sizes.includes(productInstance.size);
        }
      );

      if (isFiltersSizeIncludesInstancesSize) return true;

      return false;
    });
