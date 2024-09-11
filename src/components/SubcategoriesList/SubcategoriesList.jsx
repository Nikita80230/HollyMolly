import { Link } from "react-router-dom";
import { routes } from "src/routes";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { colorSchemes } from "src/utils/colorsScheme";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y, Pagination } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import { StyledSubcategoriesList } from "./Styled";
import { useMediaQuery } from "react-responsive";

const SubcategoriesList = ({
  allCategories,
  categoryGroupId,
  onImageClick,
}) => {
  const colors = colorSchemes[categoryGroupId] || [
    "#fff6e7",
    "#e2edf4",
    "#eff9f1",
    "#f9eff5",
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and  (max-width: 1239px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1240px)" });

  if (allCategories.length === 0) return;

  let subCategoriesToRender = [];

  allCategories.find((category) => {
    if (category.id === Number(categoryGroupId))
      subCategoriesToRender = [...category.categories];
  });

  return (
    <StyledSubcategoriesList>
      <h2 className="title">Підкатегорії</h2>
      {isMobile && (
        <Swiper
          className="swiperSubcategoriesList"
          spaceBetween={10}
          slidesPerView={2}
        >
          {subCategoriesToRender.map((subCategory, index) => {
            return (
              <SwiperSlide key={subCategory.id}>
                <li
                  className="subCategoryItem"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <Link
                    className="subCategoryLink"
                    to={`${routes.CATALOG_PAGE}/${subCategory.categoryGroupId}/${subCategory.id}`}
                  >
                    {/* <div className="subCategoryContent"> */}
                    <img
                      className="subCategoryImg"
                      src={subCategory.link || defaultPhoto}
                      alt="Category image"
                      onClick={onImageClick}
                    />
                    {/* <div className="titleOverlay"> */}
                    <p className="subCategoryTitle">{subCategory.name}</p>
                    {/* </div> */}
                    {/* </div> */}
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {isDesktop && (
        <ul className="subcategoriesList">
          {subCategoriesToRender.map((subCategory, index) => {
            return (
              <li
                className="subCategoryItem"
                key={subCategory.id}
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <Link
                  className="subCategoryLink"
                  to={`${routes.CATALOG_PAGE}/${subCategory.categoryGroupId}/${subCategory.id}`}
                >
                  {/* <div className="subCategoryContent"> */}
                  <img
                    className="subCategoryImg"
                    src={subCategory.link || defaultPhoto}
                    alt="Category image"
                    onClick={onImageClick}
                  />
                  {/* <div className="titleOverlay"> */}
                  <p className="subCategoryTitle">{subCategory.name}</p>
                  {/* </div> */}
                  {/* </div> */}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </StyledSubcategoriesList>
  );
};

export default SubcategoriesList;

// if (allCategories.length === 0) return;
// const mainCategoryObj = allCategories.find(
//     (categoryObj) => categoryObj.name === category
//   );

//   if (mainCategoryObj !== undefined) {
//     renderData.push(...mainCategoryObj.categories);
//   } else {
//     const subCategoryObj = allCategories.find((categoryObj) =>
//       categoryObj.categories.some((c) => c.name === category)
//     );
//     renderData.push(...subCategoryObj.categories);
//   }
