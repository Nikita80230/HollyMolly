// import Container from "src/components/Container/Container";
import { StyledCatalogPage } from "./Styled";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import { routes } from "src/routes";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import SubcategoriesList from "src/components/SubcategoriesList/SubcategoriesList";
import SortingPanel from "src/components/SortingPanel/SortingPanel";
import FiltersPanel from "src/components/FiltersPanel/FiltersPanel";
import ProductsGrid from "src/components/ProductsGrid/ProductsGrid";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getAllProducts,
  getProductsByCurrentCategory,
} from "src/redux/products/operations";
import { selectFilters, toggleFilter } from "src/redux/filters/filtersSlice";
import {
  selectCategoryColors,
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
import { colorSchemes } from "src/utils/colorsScheme";

const CatalogPage = () => {
  const location = useLocation();
  // const prevLocation = useRef((prevLocation.current = location.pathname));
  const dispatch = useDispatch();
  const { categoryGroupId, categoryId } = useParams();
  const [sortType, setSortType] = useState({ value: "", label: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const isLoading = useSelector(selectLoading);
  const categoryColors = useSelector(selectCategoryColors);

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

  const colors = categoryColors[`category${categoryGroupId}`] || [
    "#fff6e7",
    "#e2edf4",
    "#eff9f1",
    "#f9eff5",
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  // ========================================z===============================================

  // useEffect(() => {
  //       dispatch(getAllProducts());
  //  },[dispatch])

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
          <FiltersPanel
            className="filters"
            onPaginationReset={handlePaginationReset}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <ProductsGrid
              className="productsGrid"
              filters={filters}
              filteredProducts={currentProduct}
              sortType={sortType}
              colors={colors}
            />
          )}

          <PaginationContainer
            className="buttonsPagination"
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
            currentProduct={currentProduct}
            filteredProducts={filteredProducts}
            sortedFilteredProducts={sortedFilteredProducts}
          />
        </div>
      </Container>
    </StyledCatalogPage>
  );
};

export default CatalogPage;
