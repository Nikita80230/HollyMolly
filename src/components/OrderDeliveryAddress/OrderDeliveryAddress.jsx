import { StyledOrderDeliveryAddress } from "./Styled";

const OrderDeliveryAddress = ({ currentOrder }) => {
  const customerData = currentOrder?.customer;

  return (
    <StyledOrderDeliveryAddress>
      <h3 className="deliverAddressTitle">Адреса доставки</h3>
      <div className="addressInfoWrapper">
        <span className="addressInfoText">{customerData?.deliveryAddress}</span>
        <span className="addressInfoText">{customerData?.city}</span>
        <span className="addressInfoText">{`${customerData?.lastName} ${customerData?.firstName}`}</span>
        <span className="addressInfoText">{customerData?.phoneNumber}</span>
      </div>
    </StyledOrderDeliveryAddress>
  );
};

export default OrderDeliveryAddress;
