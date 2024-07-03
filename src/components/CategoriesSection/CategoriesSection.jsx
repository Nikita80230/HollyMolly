import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import { StyledCategoriesSection } from "./Styled";
import ArrowLeft from "src/assets/images/arrow-left .svg?react";
import ArrowRight from "src/assets/images/arrow-right.svg?react";
import CardCategories from "../CardCategories/CardCategories";
import { useSelector } from "react-redux";
import { selectCategories } from "src/redux/categories/selectors";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { routes } from "src/routes";

const CategoriesSection = () => {
  const categories = useSelector(selectCategories);
  

  // const categories = data.flatMap((item) => item.categories);
  const colors = ['#fff6e7', '#e2edf4', '#eff9f1', '#f9eff5'];
  

  return (
    <StyledCategoriesSection>
      <Container>
        <h2 className="titleCategories">Категорії</h2>
     
        <ul className="listCategories">
          {categories.map(({ id, link, name }, index)=>
        <li className="wrapperItem" key={id} style={{ backgroundColor: colors[index % colors.length] }}>
          <Link  to={`${routes.CATALOG_PAGE}/${id}`}
                    key={id}>
                <img className="categoriesPhoto" src={link || defaultPhoto} alt={name} />
            <p className="textCard">{name}</p>
          </Link>
        </li>)}
        </ul>
         </Container>
      {/* <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={10}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        breakpoints={{
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide className="swiperSlide" key={category.id}>
            <CardCategories category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="button-swiper">
        <button className="swiper-button-next" type="button">
          <ArrowRight />
        </button>
        <button className="swiper-button-prev" type="button">
          <ArrowLeft />
        </button>
      </div> */}
    </StyledCategoriesSection>
  );
};

export default CategoriesSection;
