import CardProductCatalog from "../CardProductCatalog/CardProductCatalog";
import { StyledSection } from "./Styled";

const RecommendationSectionMobile = ({ recommendedProducts, colors }) => {
  return (
    <StyledSection>
      <h2 className="titleRecommendation">
        Товари, які можуть Вам сподобатись
      </h2>
      <ul className="listCards">
        {recommendedProducts.map((product, index) => (
          <CardProductCatalog
            key={product.id}
            product={product}
            index={index}
            borderColor={colors}
          />
        ))}
      </ul>
    </StyledSection>
  );
};

export default RecommendationSectionMobile;
