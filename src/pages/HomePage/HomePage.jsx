import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import CategoriesSection from "src/components/CategoriesSection/CategoriesSection";
import Container from "src/components/Container/Container";
import Hero from "src/components/Hero/Hero";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import Subscribe from "src/components/Subscribe/Subscribe";
import { getRecommendedProducts } from "src/redux/products/operations";
import { selectRecommendedProducts } from "src/redux/products/productsSlice";

const HomePage = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 564px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 565px) and (max-width: 1239px)",
  });
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1240px)",
  // });

  const dispatch = useDispatch();
  const recommendedProducts = useSelector(selectRecommendedProducts);
  const colors = ["#fff6e7", "#e2edf4", "#eff9f1", "#f9eff5"];

  useEffect(() => {
    dispatch(getRecommendedProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Container>
        <CategoriesSection colors={colors} isTablet={isTablet} />
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
