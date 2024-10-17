import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLoading,
  selectCurrentProduct,
  selectFavoriteProducts,
  toggleFavoriteProducts,
} from "src/redux/products/productsSlice";
import { addProductsToBasket } from "src/redux/basket/basketSlice";
import StarRatingCard from "../StarRatingCard/StarRatindCard";
import { StyledSectionProduct } from "./Styled";
import Loader from "../Loader/Loader";
import ListSizes from "../ListSizes/ListSizes";
import { useEffect, useState } from "react";
import ListColorsButtons from "../ListColorsButtons/ListColorsButtons";
import FavoriteIcon from "../../assets/images/like.svg?react";
import Counter from "../Counter/Counter";
import ListProductPhotos from "../ListProductPhotos/ListProductPhotos";
import { getFeedbackWord } from "src/utils/getFeedbackWord";
import { useAuth } from "src/hooks";
import PhotoSwiper from "../PhotoSwiper/PhotoSwiper";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import colorTranslations from "src/utils/colorTranslations";

const ProductOnPage = ({ instanceId, borderColor }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const isLoading = useSelector(selectCurrentLoading);
  const favoriteProducts = useSelector(selectFavoriteProducts);

  const [selectedProductInstance, setSelectedProductInstance] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [activeSizeId, setActiveSizeId] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeColorId, setActiveColorId] = useState(null);
  const [price, setPrice] = useState(null);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(null);
  const [photoProduct, setPhotoProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);

  const isProductInFavorite = favoriteProducts?.some(
    (favoriteProduct) => favoriteProduct && favoriteProduct.id === product?.id
  );

  const handleAddToFavorite = () => {
    dispatch(toggleFavoriteProducts({ ...product, borderColor }));
  };

  const setSizesForColor = (color) => {
    const cleanedColor = color.trim().toLowerCase();
    const selectedProductInstances = product.productsInstances.filter(
      (productInstance) =>
        productInstance.color.trim().toLowerCase() === cleanedColor
    );

    const sizes = [
      ...new Set(
        selectedProductInstances
          .map((productInstance) => productInstance.size)
          .filter((size) => size !== null)
      ),
    ];

    setAvailableSizes(sizes);
  };

  const findInstanceId = (color, size) => {
    let cleanedColor = color.trim().toLowerCase();
    cleanedColor = colorTranslations[cleanedColor] ?? cleanedColor; // якщо колір є в словнику, то використовуємо переклад
    const cleanedSize = size.trim().toLowerCase();
    const foundInstance = product.productsInstances.find((instance) => {
      let instanceColor = instance.color.trim().toLowerCase();
      instanceColor = colorTranslations[instanceColor] ?? instanceColor; // якщо колір є в словнику, то використовуємо переклад
      return (
        instanceColor === cleanedColor && // порівнюємо переклади кольорів
        instance.size.trim().toLowerCase() === cleanedSize
      );
    });

    return foundInstance ? foundInstance.id : null;
  };

  const handleClickSize = (color, size) => {
    const instanceId = findInstanceId(color, size);

    if (instanceId) {
      const foundInstance = product.productsInstances.find(
        (instance) => instance.id === instanceId
      );

      if (foundInstance) {
        setSelectedProductInstance(foundInstance);

        setActiveSize(size);
        setActiveColor(color);
        setActiveSizeId(instanceId);
        setPrice(foundInstance.price);
        setPriceAfterDiscount(foundInstance.priceAfterDiscount);
        setStockQuantity(foundInstance.stockQuantity);
        setPhotoProduct(instanceId);
      } else {
        console.error("Не знайдено інстанс за ID:", instanceId);
      }
    } else {
      console.error("Не знайдено інстанс для вибраного кольору та розміру");
    }
  };

  const handleClickColors = (id, color, size) => {
    setActiveColor(color);
    setActiveSize(size);

    const selectedProductInstance = product.productsInstances.find(
      (productInstance) => productInstance.id === id
    );

    if (selectedProductInstance) {
      setActiveColorId(id);
      setSelectedProductInstance(selectedProductInstance);
      setPrice(selectedProductInstance.price);
      setPriceAfterDiscount(selectedProductInstance.priceAfterDiscount);
      setActiveSize(selectedProductInstance.size);
      setStockQuantity(selectedProductInstance.stockQuantity);
      setPhotoProduct(selectedProductInstance.id);
    } else {
      console.log("Selected product instance not found by color id.");
    }
  };

  const handleAddToBasket = () => {
    if (selectedProductInstance && activeColorId) {
      dispatch(
        addProductsToBasket({
          productId: product.id,
          productName: product.name,
          productImage: selectedProductInstance.images[0]?.link || defaultPhoto,
          productInstanceId: selectedProductInstance.id,
          priceAfterDiscount: selectedProductInstance.priceAfterDiscount,
          size: activeSize,
          color: selectedProductInstance.color,
          quantity,
          stockQuantity: selectedProductInstance.stockQuantity,
          colorBorder: borderColor,
        })
      );
    }
  };

  useEffect(() => {
    if (activeColorId) {
      const color = product.productsInstances.find(
        (instance) => instance.id === activeColorId
      )?.color;
      if (color) {
        setSizesForColor(color);
      }
    }
  }, [activeColorId, product]);

  useEffect(() => {
    setSelectedProductInstance(null);
    setActiveSize(null);
    setActiveColor(null);
    setPrice(null);
    setPriceAfterDiscount(null);
    setAvailableSizes([]);
    setStockQuantity(null);
    setActiveColorId(null);
    setActiveSizeId(null);

    if (product?.productsInstances && product.productsInstances.length > 0) {
      const initialProductInstance = product.productsInstances.find(
        (productInstance) => productInstance.id === Number(instanceId)
      );

      if (initialProductInstance) {
        setSelectedProductInstance(initialProductInstance);
        setPrice(initialProductInstance.price);
        setPriceAfterDiscount(initialProductInstance.priceAfterDiscount);
        setActiveSize(initialProductInstance.size);
        setActiveColor(initialProductInstance.color);
        setActiveColorId(initialProductInstance.id);
        setSizesForColor(initialProductInstance.color);
        setStockQuantity(initialProductInstance.stockQuantity);
        setActiveSizeId(initialProductInstance.id);
      }
    }
  }, [product, instanceId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 564);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLoading || !product || !product.productsInstances ? (
        <Loader />
      ) : (
        <StyledSectionProduct>
          <div className="sectionProduct">
            {!isMobile ? (
              <ListProductPhotos
                images={selectedProductInstance?.images || []}
                border={borderColor}
              />
            ) : (
              <PhotoSwiper
                images={selectedProductInstance?.images || []}
                border={borderColor}
                idInstance={photoProduct}
                instance={selectedProductInstance}
              />
            )}
            <div className="containerContent">
              <h3 className="titleProduct">{product?.name}</h3>
              <span className="styledSpan">ID {product.id}</span>
              <div className="wrapperRating">
                <StarRatingCard rating={product?.rating} />
                <div className="wrapperFeedback">
                  {!product?.feedbacks.length ? (
                    <span className="spanFeedback">Ще немає відгуків</span>
                  ) : (
                    <span className="spanFeedback">
                      {product?.feedbacks.length}{" "}
                      {getFeedbackWord(product?.feedbacks.length)}
                    </span>
                  )}
                </div>
              </div>
              <p className="description">{product?.description}</p>
              <div>
                <div className="wrapperListSpan">
                  <span className="styledListSpan">Розмір:</span>
                  <ListSizes
                    sizes={availableSizes}
                    activeColor={activeColor}
                    handleClickSize={handleClickSize}
                    activeSize={activeSize}
                  />
                </div>
                <div className="wrapperListSpan">
                  <span className="styledListSpan">Матеріал:</span>
                  <span className="styledListSpan">
                    {selectedProductInstance?.material}
                  </span>
                </div>
                <div className="wrapperListSpan">
                  <span className="styledListSpan">Колір:</span>
                  <ListColorsButtons
                    colors={product.productsInstances}
                    handleClick={handleClickColors}
                    activeColorId={activeColorId}
                    size={activeSize}
                  />
                </div>
              </div>
              <div className="containerCounterPrices">
                <Counter
                  quantity={quantity}
                  setQuantity={setQuantity}
                  stockQuantity={stockQuantity}
                />
                {stockQuantity === 0 ? (
                  <span className="styledListSpan">Товар відсутній</span>
                ) : (
                  <div className="containerPrices">
                    <p className="priceAfterDiscount">
                      {priceAfterDiscount ? `${priceAfterDiscount}₴` : ""}
                    </p>
                    {price > priceAfterDiscount && (
                      <p className="price">{price ? `${price}₴` : ""}</p>
                    )}
                  </div>
                )}
              </div>
              <div className="containerButtons">
                <button
                  type="submit"
                  className="buttonAddBasket"
                  onClick={handleAddToBasket}
                  disabled={stockQuantity === 0}
                >
                  Додати в кошик
                </button>
                {isLoggedIn && (
                  <button
                    type="button"
                    className="buttonFavorites"
                    onClick={handleAddToFavorite}
                  >
                    <FavoriteIcon
                      className={`iconHeart ${
                        isProductInFavorite ? "added" : ""
                      } `}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </StyledSectionProduct>
      )}
    </>
  );
};

export default ProductOnPage;
