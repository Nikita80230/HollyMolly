import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesSwiper from "src/components/CategoriesSwiper/CategoriesSwiper";
import Hero from "src/components/Hero/Hero";

import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import { fetchCategories } from "src/redux/categories/operations";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <CategoriesSwiper />
      <RecommendationSection />
    </>
  );
};

export default HomePage;
