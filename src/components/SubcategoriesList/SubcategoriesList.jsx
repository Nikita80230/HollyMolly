import { Link } from "react-router-dom";
import { StyledSubcategoriesList } from "./Styled";
import { routes } from "src/routes";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const SubcategoriesList = ({ allCategories, categoryGroupId }) => {
  if (allCategories.length === 0) return;

  let subCategoriesToRender = [];

  allCategories.find((category) => {
    if (category.id === Number(categoryGroupId))
      subCategoriesToRender = [...category.categories];
  });

  return (
    <StyledSubcategoriesList>
      <h2 className="title">Підкатегорії</h2>
      <ul className="subcategoriesList">
        {subCategoriesToRender.map((subCategory) => {
          return (
            <li className="subCategoryItem" key={subCategory.id}>
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
