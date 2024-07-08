import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import Container from "src/components/Container/Container";
import ProductOnPage from "src/components/ProductOnPage/ProductOnPage";
import ProductReviews from "src/components/ProductReviews/ProductReviews";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import { selectCategories } from "src/redux/categories/selectors";
import {
  getProductById,
  getProductsByCurrentCategory,
} from "src/redux/products/operations";
import {
  selectCurrentProduct,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import { routes } from "src/routes";
import { getFeedbacks } from "src/services/getFeedbacks";
import { StyledProductPage } from "./Styled";

const ProductPage = () => {
  const { productId, productInstanceId } = useParams();
  const [reviews, setReviews] = useState([]);

  const currentProduct = useSelector(selectCurrentProduct);
  const recommendedProducts = useSelector(selectProductsByCurrentCategory);
  const allCategories = useSelector(selectCategories);

  const productSubCategoryId = currentProduct?.categoryId;

  const mainCategory = allCategories.find((category) => {
    return category?.categories.find((subCategory) => {
      return subCategory?.id === productSubCategoryId;
    });
  });

  const mainCategoryId = mainCategory?.id;

  const subCategory = mainCategory?.categories.find(
    (subCategory) => subCategory?.id === productSubCategoryId
  );

  console.log("allCategories-->", allCategories);
  console.log("productSubCategoryId-->", productSubCategoryId);
  console.log("currentProduct-->", currentProduct);
  console.log("mainCategory-->", mainCategory);
  console.log("mainCategoryId-->", mainCategoryId);
  console.log("subCategory-->", subCategory);
  console.log("recommendedProducts-->", recommendedProducts);

  const structure = [
    { url: routes.HOME, text: "Головна" },
    {
      url: `${routes.CATALOG_PAGE}/${mainCategoryId}`,
      text: mainCategory?.name,
    },
    {
      url: `${routes.CATALOG_PAGE}/${mainCategoryId}/${productSubCategoryId}`,
      text: subCategory?.name,
    },
    {
      url: `${routes.PRODUCT_PAGE}/${productId}/${productInstanceId}`,
      text: currentProduct?.name,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(
      getProductsByCurrentCategory({ mainCategoryId, productSubCategoryId })
    );
  }, [dispatch, productId, mainCategoryId, productSubCategoryId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedbacks(productId);

        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  const colors = ["#fff6e7", "#e2edf4", "#eff9f1", "#f9eff5"];

  return (
    <StyledProductPage>
      <Breadcrumb structure={structure} />
      <ProductOnPage instanceId={productInstanceId} />
      <ProductReviews reviews={reviews} productId={productId} />
      <RecommendationSection
        className="productPageRecommendation"
        recommendedProducts={recommendedProducts}
        colors={colors}
        title="Товари які можуть Вам сподобатись"
      />
    </StyledProductPage>
  );
};
export default ProductPage;
