import CategoriesSection from "src/components/CategoriesSection/CategoriesSection";
import Hero from "src/components/Hero/Hero";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";
import Subscribe from "src/components/Subscribe/Subscribe";

const HomePage = () => {
  return (
    <>
       <Hero/>
      <CategoriesSection />
      <RecommendationSection />
      <Subscribe/>
    </>
  );
};

export default HomePage;
