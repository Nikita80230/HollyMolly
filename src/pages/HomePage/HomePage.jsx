import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CategoriesSection from "src/components/CategoriesSection/CategoriesSection";
import Container from "src/components/Container/Container";
import Hero from "src/components/Hero/Hero";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import Subscribe from "src/components/Subscribe/Subscribe";
import { useAuth } from "src/hooks";
import { authGoogle } from "src/redux/auth/operations";
import { fetchCategories } from "src/redux/categories/operations";
import { getRecommendedProducts } from "src/redux/products/operations";
import { selectRecommendedProducts } from "src/redux/products/productsSlice";

const HomePage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  const pathname = location.pathname;
  const userId = urlParams.get("userId");
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const dispatch = useDispatch();
  const recommendedProducts = useSelector(selectRecommendedProducts);
  const colors = ["#fff6e7", "#e2edf4", "#eff9f1", "#f9eff5"];
 

  useEffect(() => {
    dispatch(getRecommendedProducts());
     dispatch(fetchCategories());
  }, [dispatch]);

   useEffect(() => {
    if (token && !pathname.includes("password-reset") && !userId) {
      dispatch(authGoogle({ token }));
    }
   }, [dispatch, token, pathname, userId]);
  
  return (
    <>
      <Hero />
      <Container>
        <CategoriesSection />
        <RecommendationSection
          recommendedProducts={recommendedProducts}
          colors={colors}
          title="Рекомендації"
           isHomePage={true}
        />
      </Container>
      <Subscribe />
    </>
  );
};

export default HomePage;
