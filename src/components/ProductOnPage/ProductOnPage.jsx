import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLoading,
  selectCurrentProduct,
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

const ProductOnPage = ({ instanceId }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const isLoading = useSelector(selectCurrentLoading);
console.log(product)
  const [selectedProductInstance, setSelectedProductInstance] = useState(null);
  const [activeSizeId, setActiveSizeId] = useState(null);
  const [activeColorId, setActiveColorId] = useState(null);
  const [price, setPrice] = useState(null);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);
  const [percentageDiscount, setPercentageDiscount] = useState(null);
  const [isNewCollection, setIsNewCollection] = useState(false);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(null); // новий state

  const setSizesForColor = (color) => {
    const cleanedColor = color.trim().toLowerCase();
    const selectedProductInstances = product?.productsInstances.filter(
      (productInstance) => productInstance.color.trim().toLowerCase() === cleanedColor
    );

    const sizes = [
      ...new Set(
        selectedProductInstances.map((productInstance) => productInstance.size)
      ),
    ];

    setAvailableSizes(sizes);
  };

  const handleClickColors = (id, color) => {
    setSizesForColor(color);

    const selectedProductInstance = product?.productsInstances.find(
      (productInstance) => productInstance.id === id
    );

    if (selectedProductInstance) {
      setActiveColorId(id);
      setSelectedProductInstance(selectedProductInstance);
      setPrice(selectedProductInstance.price);
      setPriceAfterDiscount(selectedProductInstance.priceAfterDiscount);
      setPercentageDiscount(selectedProductInstance.percentageDiscount || null);
      setIsNewCollection(selectedProductInstance.isNewCollection);
      setActiveSizeId(selectedProductInstance.size);
      setStockQuantity(selectedProductInstance.stockQuantity); // оновлення stockQuantity
    }
  };

  const handleAddToBasket = () => {
    if (selectedProductInstance && activeColorId) {
      dispatch(
        addProductsToBasket({
          productId: product.id,
          productName: product.name,
          productImage: selectedProductInstance.images[0].link,
          productInstanceId: selectedProductInstance.id,
          priceAfterDiscount: selectedProductInstance.priceAfterDiscount,
          size: activeSizeId,
          color: selectedProductInstance.color,
          quantity,
          stockQuantity: selectedProductInstance.stockQuantity,
        })
      );
    }
  };

  useEffect(() => {
    setSelectedProductInstance(null);
    setActiveSizeId(null);
    setActiveColorId(null);
    setPrice(null);
    setPriceAfterDiscount(null);
    setPercentageDiscount(null);
    setIsNewCollection(false);
    setAvailableSizes([]);
    setStockQuantity(null); 

    if (product?.productsInstances && product.productsInstances.length > 0) {
      const initialProductInstance = product.productsInstances.find(
        (productInstance) => productInstance.id === Number(instanceId)
      );

      if (initialProductInstance) {
        setSelectedProductInstance(initialProductInstance);
        setPrice(initialProductInstance.price);
        setPriceAfterDiscount(initialProductInstance.priceAfterDiscount);
        setPercentageDiscount(initialProductInstance.percentageDiscount || null);
        setIsNewCollection(initialProductInstance.isNewCollection);
        setActiveSizeId(initialProductInstance.size);
        setActiveColorId(initialProductInstance.id);
        setSizesForColor(initialProductInstance.color);
        setStockQuantity(initialProductInstance.stockQuantity);
      }
    }
  }, [product, instanceId]);

  return (
    <>
      {isLoading || !product || !product.productsInstances ? (
        <Loader />
      ) : (
        <StyledSectionProduct>
          <div className="sectionProduct">
            <ListProductPhotos images={selectedProductInstance?.images || []} />
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
                    activeSizeId={activeSizeId}
                    setActiveSizeId={setActiveSizeId}
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
                  />
                </div>
              </div>
              <div className="containerCounterPrices">
                <Counter quantity={quantity} setQuantity={setQuantity} stockQuantity={stockQuantity} />
                <div className="containerPrices">
                  <p className="priceAfterDiscount">
                    {priceAfterDiscount ? `${priceAfterDiscount}₴` : ""}
                  </p>
                  {price > priceAfterDiscount && (
                    <p className="price">{price ? `${price}₴` : ""}</p>
                  )}
                </div>
              </div>
              <div className="containerButtons">
                <button
                  type="submit"
                  className="buttonAddBasket"
                  onClick={handleAddToBasket}
                >
                  Додати в кошик
                </button>
                <button type="button" className="buttonFavorites">
                  <FavoriteIcon />
                </button>
              </div>
            </div>
          </div>
        </StyledSectionProduct>
      )}
    </>
  );
};

export default ProductOnPage;
