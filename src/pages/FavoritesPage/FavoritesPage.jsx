import { useSelector } from "react-redux";
import CardProductCatalog from "src/components/CardProductCatalog/CardProductCatalog";
import { selectFavoriteProducts } from "src/redux/products/productsSlice";
import { WrapperFavoritesPage } from "./Styled";

const FavoritesPage = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts);

  return (
    <WrapperFavoritesPage>
      {!favoriteProducts.length ? (
        <h1>Додайте ваші улюблені товари</h1>
      ) : (
        <ul className="gridFavorites">
          {favoriteProducts.map((product) => (
            <CardProductCatalog key={product.id} product={product} />
          ))}
        </ul>
      )}
    </WrapperFavoritesPage>
  );
};

export default FavoritesPage;
