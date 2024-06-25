import CategoriesSection from "src/components/CategoriesSection/CategoriesSection";
import Hero from "src/components/Hero/Hero";
import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";

const HomePage = () => {
  return (
    <>
       <Hero/>
      <CategoriesSection />
      <RecommendationSection />
    </>
  );
};

export default HomePage;
