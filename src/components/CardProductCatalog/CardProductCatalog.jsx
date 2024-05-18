import { useSelector } from "react-redux";
import { selectProductsByCurrentCategory } from "../../redux/products/productsSlice";
import { WrapperCard } from "./Styled";
import Feedback from "src/assets/images/feedback.svg?react";
import HeartIcon from "src/assets/images/heartBlue.svg?react";
import BasketIcon from "src/assets/images/basketBlue.svg?react";
import { Link } from "react-router-dom";

const CardProductCatalog = () => {
  const products = useSelector(selectProductsByCurrentCategory);
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <WrapperCard key={product.id}>
          <img className="productPhoto" width={278} height={393} />
          <h4 className="title">{product.name}</h4>

          {product.productsInstances[0].percentageDiscount > 0 && (
            <span className="styledSpanDiscount">
              {product.productsInstances[0].percentageDiscount}%
            </span>
          )}
          {product.productsInstances[0].isNewCollection && (
            <span className="styledSpan">Новинка</span>
          )}
          <div className="wrapperColorsFeedbackHeart">
            <div className="buttonsFeedback">
              <button
                className="buttonColor"
                style={{ backgroundColor: product.productsInstances[0].color }}
              ></button>
              <Link>
                <div className="wrapperFeedback">
                  <Feedback />
                  <span className="spanFeedback">Залишити відгук</span>
                </div>
              </Link>{" "}
            </div>
            <HeartIcon className="iconHeart" />
          </div>

          <div className="wrapperPriceIcon">
            <div>
              {product.productsInstances[0].price >
                product.productsInstances[0].priceAfterDiscount && (
                <p className="price">{product.productsInstances[0].price}₴</p>
              )}
              <p className="priceAfterDiscount">
                {product.productsInstances[0].priceAfterDiscount}₴
              </p>
            </div>
            <BasketIcon className="iconBasket" />
          </div>
        </WrapperCard>
      ))}
    </>
  );
};

export default CardProductCatalog;
