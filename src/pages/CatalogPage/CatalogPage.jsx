// import Container from "src/components/Container/Container";
import { StyledCatalogPage } from "./Styled";
import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import { routes } from "src/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import SubcategoriesList from "src/components/SubcategoriesList/SubcategoriesList";
import SortingPanel from "src/components/SortingPanel/SortingPanel";
import FiltersPanel from "src/components/FiltersPanel/FiltersPanel";
import ProductsGrid from "src/components/ProductsGrid/ProductsGrid";
import { useEffect, useState } from "react";
import { getProductsByCurrentCategory } from "src/redux/products/operations";
import { selectFilters } from "src/redux/filters/filtersSlice";
import {
  filterProducts,
  selectFilteredProducts,
  selectLoading,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import Loader from "src/components/Loader/Loader";
import PaginationContainer from "src/components/PaginationContainer/PaginationContainer";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { categoryGroupId, categoryId } = useParams();
  const [sortType, setSortType] = useState({ value: "", label: "" });

  const isLoading = useSelector(selectLoading);
  const filteredProducts = useSelector(selectFilteredProducts);
  const productsByCurrentCategory = useSelector(
    selectProductsByCurrentCategory
  );
  
  const allCategories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);

  const mainCategory = allCategories?.find(
    (mainCategory) => mainCategory.id === Number(categoryGroupId)
  );

  const handleSorting = (option) => {
    setSortType(option);
  };

  const sorting = () => {
    if (sortType.value === "byRate") {
      return [...filteredProducts].sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    if (sortType.value === "asc") {
      return [...filteredProducts]
        .map((filteredProduct) => {
          return [...filteredProduct.productsInstances].sort(
            (product1, product2) => {
              // console.log(product1, product2);
              return product1.price - product2.price;
            }
          )[0];
        })
        .sort((product1, product2) => {
          return product1.price - product2.price;
        });
    }
    if (sortType.value === "desc") {
      return [...filteredProducts]
        .map((filteredProduct) => {
          console.log(
            "filteredProduct.productsInstances",
            filteredProduct.productsInstances
          );

          return [...filteredProduct.productsInstances].sort(
            (product1, product2) => {
              // console.log(product1, product2);
              return product2.price - product1.price;
            }
          )[0];
        })
        .sort((product1, product2) => {
          return product2.price - product1.price;
        });
    }
    // if (sortType.value === "byDate") {
    //   return [...filteredProducts].sort((a, b) => {
    //     return b.rating - a.rating;
    //   });
    // }
  };

  console.log(`${sortType.value}`, sorting());
  // console.log("Not sorted", filteredProducts);

  const categoryName = mainCategory?.name ?? "Завантаження...";

  const subCategoryName =
    mainCategory?.categories?.find((subCat) => subCat.id === Number(categoryId))
      ?.name ?? "Завантаження...";

  const structure = [
    { url: routes.HOME, text: "Головна" },
    {
      url: categoryId
        ? `${routes.CATALOG_PAGE}/${categoryGroupId}/${categoryId}`
        : `${routes.CATALOG_PAGE}/${categoryGroupId}`,
      text: categoryId ? subCategoryName : categoryName,
    },
  ];

  useEffect(() => {
    dispatch(getProductsByCurrentCategory({ categoryGroupId, categoryId }));
  }, [categoryGroupId, categoryId, dispatch]);

  useEffect(() => {
    dispatch(filterProducts(filters));
  }, [filters, productsByCurrentCategory, dispatch]);

  // ==============================================================================================
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );
 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo({
      top: document.querySelector(".navigation").offsetTop,
      behavior: "smooth",
    });
  }, [currentPage]);

  // =======================================================================================
  console.log(sortType);

  return (
    <StyledCatalogPage>
      <div className="navigation">
        <Breadcrumb structure={structure} />
        <SubcategoriesList
          allCategories={allCategories}
          categoryGroupId={categoryGroupId}
        />
      </div>
      <div className="layout">
        <SortingPanel className="sorting" handleSorting={handleSorting} />
        <FiltersPanel className="filters" />
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsGrid
            className="productsGrid"
            filters={filters}
            filteredProducts={currentProduct}
          />
        )}
        
        <PaginationContainer
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
          currentProduct={currentProduct}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </StyledCatalogPage>
  );
};

export default CatalogPage;

// const filteredProducts = useMemo(
//   () =>
//     productsByCurrentCategory
//       .filter((product) => {
//         if (filters?.priceRange.length === 0) return true;
//         if (
//           product.productsInstances[0].price >= filters?.priceRange[0] &&
//           product.productsInstances[0].price <= filters?.priceRange[1]
//         )
//           return true;

//         return false;
//       })
//       .filter((product) => {
//         if (filters?.colors.length === 0) return true;
//         if (filters?.colors.includes(product.productsInstances[0].color))
//           return true;

//         return false;
//       })
//       .filter((product) => {
//         if (filters?.materials?.length === 0) return true;
//         if (
//           filters?.materials.includes(product.productsInstances[0].material)
//         )
//           return true;

//         return false;
//       })
//       .filter((product) => {
//         if (filters?.sizes.length === 0) return true;
//         if (filters?.sizes.includes(product.productsInstances[0].size))
//           return true;

//         return false;
//       }),
//   [filters, productsByCurrentCategory]
// );
