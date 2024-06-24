import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import ProductCard from "../ProductCard/ProductCard";

import { getRecommendedProducts } from "src/redux/products/operations";

import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";

import { StyledRecommendationSection } from "./Styled";
import { selectRecommendedProducts } from "src/redux/products/productsSlice";
import Container from "../Container/Container";

const RecommendationSection = () => {
  const dispatch = useDispatch();
  const recommendedProducts = useSelector(selectRecommendedProducts);

  useEffect(() => {
    dispatch(getRecommendedProducts());
  }, [dispatch]);

  return (
    <StyledRecommendationSection>
      <Container>
      <h2 className="titleRecommendation">Рекомендації</h2>
      <Swiper
        className="swiperCustom"
        modules={[Navigation, A11y, Grid]}
        navigation={{
          nextEl: ".nextProductBtn",
          prevEl: ".prevProductBtn",
        }}
        spaceBetween={10}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        breakpoints={{
          565: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
              rows: 1,
            },
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
            grid: {
              rows: 1,
            },
          },
        }}
      >
        {recommendedProducts.map((product, index) => (
          <SwiperSlide key={product.id} className="swiper-slideCustom">
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="buttonSwiper">
        <button className="prevProductBtn" type="button">
          <ArrowLeft />
        </button>
        <button className="nextProductBtn" type="button">
          <ArrowRight />
        </button>
        </div>
        </Container>
    </StyledRecommendationSection>
  );
};

export default RecommendationSection;
