import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import Container from "src/components/Container/Container";
import Loader from "src/components/Loader/Loader";
import ProductOnPage from "src/components/ProductOnPage/ProductOnPage";
import ProductReviews from "src/components/ProductReviews/ProductReviews";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import RecommendationSectionMobile from "src/components/RecommendationSevtionMobile/RecommendationSectionMobile";
import { selectCategories } from "src/redux/categories/selectors";
import {
  getProductById,
  getProductsByCurrentCategory,
} from "src/redux/products/operations";
import {
  selectCategoryColors,
  selectCurrentProduct,
  selectLoading,
  selectProductsByCurrentCategory,
} from "src/redux/products/productsSlice";
import { routes } from "src/routes";
import { getFeedbacks } from "src/services/getFeedbacks";
import { StyledProductPage } from "./Styled";

const ProductPage = () => {
  const { productId, productInstanceId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);

  const currentProduct = useSelector(selectCurrentProduct);
  const recommendedProducts = useSelector(selectProductsByCurrentCategory);
  const allCategories = useSelector(selectCategories);
  const categoryColors = useSelector(selectCategoryColors);
  const loading = useSelector(selectLoading);
  const categoryId = currentProduct?.categoryId;

  const mainCategory = allCategories.find((category) => {
    return category?.categories.find((subCategory) => {
      return subCategory?.id === categoryId;
    });
  });

  const categoryGroupId = mainCategory?.id;

  const subCategory = mainCategory?.categories.find(
    (subCategory) => subCategory?.id === categoryId
  );

  // console.log("allCategories-->", allCategories);
  // console.log("productSubCategoryId-->", categoryId);
  // console.log("currentProduct-->", currentProduct);
  // console.log("mainCategory-->", mainCategory);
  // console.log("mainCategoryId-->", categoryGroupId);
  // console.log("subCategory-->", subCategory);
  // console.log("recommendedProducts-->", recommendedProducts);

  const structure = [
    { url: routes.HOME, text: "Головна" },
    {
      url: `${routes.CATALOG_PAGE}/${categoryGroupId}`,
      text: mainCategory?.name,
    },
    {
      url: `${routes.CATALOG_PAGE}/${categoryGroupId}/${categoryId}`,
      text: subCategory?.name,
    },
    {
      url: `${routes.PRODUCT_PAGE}/${productId}/${productInstanceId}`,
      text: currentProduct?.name,
    },
  ];

  const dispatch = useDispatch();

  const colors = categoryColors[`category${categoryGroupId}`] || [
    "#fff6e7",
    "#e2edf4",
    "#eff9f1",
    "#f9eff5",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentProduct]);

  useEffect(() => {
    dispatch(getProductById(productId));
    if (categoryGroupId && categoryId) {
      dispatch(
        getProductsByCurrentCategory({
          categoryGroupId,
          categoryId,
        })
      );
    }
  }, [dispatch, productId, categoryGroupId, categoryId]);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 564);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <StyledProductPage>
      <Container>
        <Breadcrumb structure={structure} />
        <ProductOnPage instanceId={productInstanceId} borderColor={colors} />
        <ProductReviews reviews={reviews} productId={productId} />
        {!isMobile ? (
          <RecommendationSection
            className="productPageRecommendation"
            recommendedProducts={recommendedProducts}
            colors={colors}
            title="Товари які можуть Вам сподобатись"
            isHomePage={false}
          />
        ) : (
          <RecommendationSectionMobile
            recommendedProducts={recommendedProducts}
            colors={colors}
          />
        )}
      </Container>
    </StyledProductPage>
  );
};
export default ProductPage;
