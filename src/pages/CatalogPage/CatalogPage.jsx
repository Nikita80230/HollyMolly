// import Container from "src/components/Container/Container";
import { StyledCatalogPage } from "./Styled";
import { useLocation, useParams } from "react-router-dom";
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
import { selectFilters, toggleFilter } from "src/redux/filters/filtersSlice";
import {
  selectLoading,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import Loader from "src/components/Loader/Loader";
import PaginationContainer from "src/components/PaginationContainer/PaginationContainer";
import {
  getFilteredProducts,
  getSortedFilteredProducts,
} from "src/utils/sortAndFilterFunctions";
import SelectedFiltersList from "src/components/SelectedFiltersList/SelectedFiltersList";
import Container from "src/components/Container/Container";

const CatalogPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { categoryGroupId, categoryId } = useParams();
  const [sortType, setSortType] = useState({ value: "", label: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
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
    setSortType((prevState) => {
      setCurrentPage(1);
      return prevState.value === option.value
        ? { value: "", label: "" }
        : option;
    });
  };

  const handlePaginationReset = () => {
    setCurrentPage(1); 
  };

  const filteredProducts = useMemo(
    () => getFilteredProducts(filters, productsByCurrentCategory),
    [filters, productsByCurrentCategory]
  );

  const sortedFilteredProducts = useMemo(
    () => getSortedFilteredProducts(filteredProducts, sortType.value),
    [filteredProducts, sortType?.value]
  );

  const categoryName = mainCategory?.name;

  const subCategoryName = mainCategory?.categories?.find(
    (subCat) => subCat.id === Number(categoryId)
  )?.name;

  // const structure = [
  //   { url: routes.HOME, text: "Головна" },
  //   {
  //     url: categoryId
  //       ? `${routes.CATALOG_PAGE}/${categoryGroupId}/${categoryId}`
  //       : `${routes.CATALOG_PAGE}/${categoryGroupId}`,
  //     text: categoryId ? subCategoryName : categoryName,
  //   },
  // ];

  const structure = subCategoryName
    ? [
        { url: routes.HOME, text: "Головна" },
        {
          url: `${routes.CATALOG_PAGE}/${categoryGroupId}`,
          text: categoryName,
        },
        {
          url: `${routes.CATALOG_PAGE}/${categoryGroupId}/${categoryId}`,
          text: subCategoryName,
        },
      ]
    : [
        { url: routes.HOME, text: "Головна" },
        {
          url: `${routes.CATALOG_PAGE}/${categoryGroupId}`,
          text: categoryName,
        },
      ];

  useEffect(() => {
    dispatch(getProductsByCurrentCategory({ categoryGroupId, categoryId }));
    setCurrentPage(1);
  }, [categoryGroupId, categoryId, dispatch]);

  // ==============================================================================================

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct =
    sortType.value.length > 0
      ? sortedFilteredProducts.slice(firstProductIndex, lastProductIndex)
      : filteredProducts.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.querySelector(".navigation").offsetTop,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

   useEffect(() => {
    setCurrentPage(1); 
  }, [location]);

  // =======================================================================================

  return (
    <StyledCatalogPage>
      <Container>
      <div className="navigation">
        <Breadcrumb structure={structure} />
        <SubcategoriesList
          allCategories={allCategories}
          categoryGroupId={categoryGroupId}
        />
      </div>
      <div className="layout">
        <SelectedFiltersList selectedFilters={filters} />
        <SortingPanel
          className="sorting"
          handleSorting={handleSorting}
          sortType={sortType}
        />
        <FiltersPanel className="filters" onPaginationReset={handlePaginationReset}/>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsGrid
            className="productsGrid"
            filters={filters}
            filteredProducts={currentProduct}
            sortType={sortType}
          />
        )}

        <PaginationContainer
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
          currentProduct={currentProduct}
          filteredProducts={filteredProducts}
          sortedFilteredProducts={sortedFilteredProducts}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        </div>
        </Container>
    </StyledCatalogPage>
  );
};

export default CatalogPage;
