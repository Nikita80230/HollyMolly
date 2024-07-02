import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentLoading,
  selectCurrentProduct,
} from "src/redux/products/productsSlice";
import { addProductsToBasket } from "src/redux/basket/basketSlice";
import StarRatingCard from "../StarRaitingCard/StarRaitindCard";
import { StyledSectionProduct } from "./Styled";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import Loader from "../Loader/Loader";
import ListSizes from "../ListSizes/ListSizes";
import { useEffect, useState } from "react";
import ListColorsButtons from "../ListColorsButtons/ListColorsButtons";
import FavoriteIcon from "../../assets/images/like.svg?react";
import Counter from "../Counter/Counter";

const ProductOnPage = ({ instanceId }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);
  const isLoading = useSelector(selectCurrentLoading);

  const [selectedProductInstance, setSelectedProductInstance] = useState(null);
  const [activeSizeId, setActiveSizeId] = useState(null);
  const [activeColorId, setActiveColorId] = useState(null);
  const [pictureProduct, setPictureProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);
  const [percentageDiscount, setPercentageDiscount] = useState(null);
  const [isNewCollection, setIsNewCollection] = useState(false);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const setSizesForColor = (color) => {
    const selectedProductInstances = product?.productsInstances.filter(
      (productInstance) => productInstance.color === color
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

    const selectedProductInstances = product?.productsInstances.filter(
      (productInstance) => productInstance.color === color
    );

    const selectedProductInstance = selectedProductInstances.find(
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
      if (
        selectedProductInstance.images &&
        selectedProductInstance.images.length > 0
      ) {
        setPictureProduct(selectedProductInstance.images[0].link);
      }
    }
  };

  const handleAddToBasket = () => {
  if (selectedProductInstance && activeSizeId && activeColorId) {
    dispatch(addProductsToBasket({
      productInstanceId: selectedProductInstance.id,
      priceAfterDiscount: selectedProductInstance.priceAfterDiscount,
      size: activeSizeId,
      color: activeColorId,
      quantity,
    }));
  }
};


  useEffect(() => {
    setSelectedProductInstance(null);
    setActiveSizeId(null);
    setActiveColorId(null);
    setPictureProduct(null);
    setPrice(null);
    setPriceAfterDiscount(null);
    setPercentageDiscount(null);
    setIsNewCollection(false);
    setAvailableSizes([]);

    if (product?.productsInstances && product.productsInstances.length > 0) {
      const initialProductInstance = product.productsInstances.find(
        (productInstance) => productInstance.id === Number(instanceId)
      );

      if (initialProductInstance) {
        setSelectedProductInstance(initialProductInstance);
        setPrice(initialProductInstance.price);
        setPriceAfterDiscount(initialProductInstance.priceAfterDiscount);
        setPercentageDiscount(
          initialProductInstance.percentageDiscount || null
        );
        setIsNewCollection(initialProductInstance.isNewCollection);
        setActiveSizeId(initialProductInstance.size);
        setActiveColorId(initialProductInstance.id);

        setSizesForColor(initialProductInstance.color);
        if (
          initialProductInstance.images &&
          initialProductInstance.images.length > 0
        ) {
          setPictureProduct(initialProductInstance.images[0].link);
        }
      } else {
        const firstProductInstance = product.productsInstances[0];
        setSelectedProductInstance(firstProductInstance);
        setPrice(firstProductInstance.price);
        setPriceAfterDiscount(firstProductInstance.priceAfterDiscount);
        setPercentageDiscount(firstProductInstance.percentageDiscount || null);
        setIsNewCollection(firstProductInstance.isNewCollection);
        setActiveSizeId(firstProductInstance.size);
        setActiveColorId(firstProductInstance.id);
        setSizesForColor(firstProductInstance.color);
        if (
          firstProductInstance.images &&
          firstProductInstance.images.length > 0
        ) {
          setPictureProduct(firstProductInstance.images[0].link);
        }
      }
    }
  }, [product, instanceId]);

  if (isLoading || !product || !product.productsInstances) {
    return <Loader />;
  }

  return (
    <StyledSectionProduct>
      <div className="wrapperProduct">
        <div>
          <div className="containerMainPhoto">
            <img
              className="styledImg"
              src={pictureProduct || defaultPhoto}
              alt={product.name || "product picture"}
              width={599}
              height={374}
            />
          </div>
          <div className="wrapperPictures">
            <img
              className="styledImg"
              src={pictureProduct || defaultPhoto}
              alt={product.name || "product picture"}
              width={295}
              height={200}
            />
            <img
              className="styledImg"
              src={pictureProduct || defaultPhoto}
              alt={product.name || "product picture"}
              width={295}
              height={200}
            />
          </div>
        </div>
        <div className="containerContent">
          <h3 className="titleProduct">{product?.name}</h3>
          <span className="styledSpan">ID {product.id}</span>
          <StarRatingCard
            rating={product?.rating}
            feedbacks={product?.feedbacks.length}
          />
          <p className="description">{product?.description}</p>
          <div>
            {availableSizes.length > 0 && activeSizeId !== null && (
              <div className="wrapperListSpan">
                <span className="styledListSpan">Розмір:</span>
                <ListSizes
                  sizes={availableSizes}
                  activeSizeId={activeSizeId}
                  setActiveSizeId={setActiveSizeId}
                />
              </div>
            )}
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
            <Counter quantity={quantity} setQuantity={setQuantity} />
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
  );
};

export default ProductOnPage;
