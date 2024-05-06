// import Container from "src/components/Container/Container";
import { StyledCatalogPage } from "./Styled";
import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import { routes } from "src/routes";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import SubcategoriesList from "src/components/SubcategoriesList/SubcategoriesList";
import SortingPanel from "src/components/SortingPanel/SortingPanel";
import FiltersPanel from "src/components/FiltersPanel/FiltersPanel";
import ProductsGrid from "src/components/ProductsGrid/ProductsGrid";
// import { selectAllProducts } from "src/redux/products/productsSlice";

const CatalogPage = () => {
  const { category } = useParams();

  const allCategories = useSelector(selectCategories);
  // const allProducts = useSelector(selectAllProducts);

  // const productsByCurrent =

  const structure = [
    { url: routes.HOME, text: "Головна" },
    { url: `${routes.CATALOG_PAGE}/${category}`, text: category },
  ];

  return (
    <StyledCatalogPage>
      <div className="navigation">
        <Breadcrumb structure={structure} />
        <SubcategoriesList
          allCategories={allCategories}
          currentCategory={category}
        />
      </div>
      <div className="layout">
        <SortingPanel className="sorting" />
        <FiltersPanel className="filters" />
        <ProductsGrid className="productsGrid" />
      </div>
    </StyledCatalogPage>
  );
};

export default CatalogPage;
