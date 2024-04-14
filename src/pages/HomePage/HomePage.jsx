import CategoriesSwiper from "src/components/CategoriesSwiper/CategoriesSwiper";
import Hero from "src/components/Hero/Hero";

import RecommendationSection from "src/components/RecommendationSection/RecommendationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSwiper />
      <RecommendationSection />
    </>
  );
}
