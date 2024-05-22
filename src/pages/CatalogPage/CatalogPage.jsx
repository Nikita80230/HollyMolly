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
import { useEffect, useMemo, useState } from "react";
import { getProductsByCurrentCategory } from "src/redux/products/operations";
import { selectFilters } from "src/redux/filters/filtersSlice";
import {
  selectLoading,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import Loader from "src/components/Loader/Loader";
import Pagination from "src/components/Pagination/Pagination";
// import { selectAllProducts } from "src/redux/products/productsSlice";
import IconNext from "src/assets/images/nextPagination.svg?react";
import IconPrev from "src/assets/images/prevPagination.svg?react";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { categoryGroupId, categoryId } = useParams();
  const [sortType, setSortType] = useState({ value: "", label: "" });

  const isLoading = useSelector(selectLoading);
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

  useEffect(() => {
    dispatch(getProductsByCurrentCategory({ categoryGroupId, categoryId }));
  }, [categoryGroupId, categoryId, dispatch]);

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
    window.scrollTo({
      top: document.querySelector(".productsGrid").offsetTop,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({
      top: document.querySelector(".productsGrid").offsetTop,
      behavior: "smooth",
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({
      top: document.querySelector(".productsGrid").offsetTop,
      behavior: "smooth",
    });
  };
  // =======================================================================================

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
            filteredProducts={filteredProducts}
          />
        )}

        <div className="buttonsPagination">
          {currentPage == 1 ? (
            <button type="button" className="buttonPrevNextDisabled" disabled>
              <IconPrev />
            </button>
          ) : (
            <button
              type="button"
              className="buttonPrevNext"
              onClick={handlePrevPage}
            >
              <IconPrev />
            </button>
          )}

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          {currentProduct.length === productsPerPage &&
          currentPage * productsPerPage < filteredProducts.length ? (
            <button
              type="button"
              className="buttonPrevNext"
              onClick={handleNextPage}
            >
              <IconNext />
            </button>
          ) : (
            <button type="button" className="buttonPrevNextDisabled" disabled>
              <IconNext />
            </button>
          )}
        </div>
      </div>
    </StyledCatalogPage>
  );
};

export default CatalogPage;
