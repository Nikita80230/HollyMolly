import { Link } from "react-router-dom";
import { StyledSubcategoriesList } from "./Styled";
import { routes } from "src/routes";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { colorSchemes } from "src/utils/colorsScheme";
import Container from "../Container/Container";

const SubcategoriesList = ({ allCategories, categoryGroupId }) => {
  
  const colors = colorSchemes[categoryGroupId] || [
    "#fff6e7",
    "#e2edf4",
    "#eff9f1",
    "#f9eff5",
  ];

  if (allCategories.length === 0) return;

  let subCategoriesToRender = [];

  allCategories.find((category) => {
    if (category.id === Number(categoryGroupId))
      subCategoriesToRender = [...category.categories];
  });

  return (
    <StyledSubcategoriesList>
      <Container>
      <h2 className="title">Підкатегорії</h2>
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
        </Container>
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
