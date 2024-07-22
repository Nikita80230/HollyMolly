import { useSelector } from "react-redux";
import CardProductCatalog from "src/components/CardProductCatalog/CardProductCatalog";
import Container from "src/components/Container/Container";
import { selectFavoriteProducts } from "src/redux/products/productsSlice";
import { WrapperFavoritesPage } from "./Styled";

const FavoritesPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);

  return (
    <Container>
      <WrapperFavoritesPage>
        {!favoriteProducts.length ? (
          <h1 className="titleFavorites">Додайте ваші улюблені товари</h1>
        ) : (
          <ul className="gridFavorites">
            {favoriteProducts.map((product) => (
              <CardProductCatalog
                key={product.id}
                product={product}
                borderColor={product.borderColor}
              />
            ))}
          </ul>
        )}
      </WrapperFavoritesPage>
    </Container>
  );
};

export default FavoritesPage;
