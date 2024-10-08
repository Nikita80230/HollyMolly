import { StyledOrderInstance } from "./Styled";
import defaultPhoto from "src/assets/images/defaultImg.webp";

const OrderInstance = ({
  instance: {
    productInstanceId,
    size,
    color,
    quantity,
    productName,
    image,
    totalCostBeforeDiscount,
    totalCost,
  },
}) => {
  return (
    <StyledOrderInstance>
      <div className="instancePhotoWrapper">
        <img className="instanceImg" src={image || defaultPhoto} alt="photo of product" />
      </div>

      <div className="instanceData">
        <div className="instanceInfo">
          <h3 className="instanceInfoTitle">{productName}</h3>
          <span className="instanceInfoId">ID: {productInstanceId}</span>

          <span className="instanceInfoSize text">
            Розмір: {size ? size : "Універсальний"}
          </span>

          <span className="instanceInfoColor text">Колір: {color}</span>
          <span className="instanceInfoQuantity text">
            Кількість: {quantity}
          </span>
        </div>
        <div className="instancePrice">
          <span className="discountPrice">{totalCost} ₴</span>
          {totalCost < totalCostBeforeDiscount && (
            <span className="price">{totalCostBeforeDiscount} ₴</span>
          )}
        </div>
      </div>
    </StyledOrderInstance>
  );
};

export default OrderInstance;
