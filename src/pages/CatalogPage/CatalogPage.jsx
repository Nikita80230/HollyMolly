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
  selectLoading,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import Loader from "src/components/Loader/Loader";
import Pagination from "src/components/Pagination/Pagination";
// import { selectAllProducts } from "src/redux/products/productsSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const productsByCurrentCategory = useSelector(
    selectProductsByCurrentCategory
  );

  const { categoryGroupId, categoryId } = useParams();

  const allCategories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);

  const mainCategory = allCategories?.find(
    (mainCategory) => mainCategory.id === Number(categoryGroupId)
  );

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

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = productsByCurrentCategory.slice(
    firstProductIndex,
    lastProductIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // $('html, body').animate({ scrollTop: $('.custom-category').offset().top }, 'slow');
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    };

  useEffect(() => {
    dispatch(getProductsByCurrentCategory({ categoryGroupId, categoryId }));
  }, [categoryGroupId, categoryId, dispatch]);

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
        <SortingPanel className="sorting" />
        <FiltersPanel className="filters" />
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsGrid
            className="productsGrid"
            filters={filters}
            // productsByCurrentCategory={productsByCurrentCategory}
            productsByCurrentCategory={currentProduct}
          />
        )}
        <div className="buttonsPagination">
        <button className ="prevButton" onClick={handlePrevPage} >Prev</button>
        <Pagination
          className="pagination"
          productsPerPage={productsPerPage}
          totalProducts={productsByCurrentCategory.length}
          paginate={paginate}
        />
          <button className="nextButton" onClick={handleNextPage}>Next</button>
          </div>
      </div>
    </StyledCatalogPage>
  );
};

export default CatalogPage;
