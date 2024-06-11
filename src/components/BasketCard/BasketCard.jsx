import { useSelector } from "react-redux";
import { selectBasketProducts } from "src/redux/products/productsSlice";
import { BasketItem } from "./Styled";
// import { selectBasketProducts } from "src/redux/products/productsSlice";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const BasketCard = ({ product }) => {
  console.log(product);
  const {
    productInstanceId,
    productName,
    sku,
    color,
    images,
    price,
    priceAfterDiscount,
  } = product;

  return (
    <BasketItem key={productInstanceId}>
      <div className="wrapperCardBasket">
        <div className="wrapperPhoto">
          <img src={defaultPhoto} alt={productName} width={200} height={200} />
        </div>
        <div className="wrapperBox">
          <div className="boxNameDelete">
            <h3>{productName}</h3>
            <button>remove</button>
          </div>
          <span>SKU: {sku}</span>
                  <span className="spanColor">Колір: {color}</span>

           <div className="wrapperCountPrice">       
          <div className="wrapperCounter">
            <button> - </button>
            <span>1</span>
            <button>+</button>
          </div>
<div>
                  <span>{price}</span>
                  
          <p>{priceAfterDiscount}</p></div>
                  </div>
                  </div>
      </div>
    </BasketItem>
  );
};

export default BasketCard;
