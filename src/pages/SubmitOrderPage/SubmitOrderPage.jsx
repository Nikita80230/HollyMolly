import Container from "src/components/Container/Container";
import Title from "src/components/Title/Title";
import OrderForm from "src/components/OrderForm/OrderForm";
import { WrapperPage } from "./Styled";
import ListBasketLittle from "src/components/ListBasketLittle/ListBasketLittle";
import { useDispatch, useSelector } from "react-redux";
import { selectAmountOrder, selectBasket } from "src/redux/basket/selectors";
import { useEffect, useState } from "react";
import {
  calculateAmountOrder,
  clearBasket,
} from "src/redux/basket/basketSlice";
import { getProfile } from "src/redux/user/operations";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ModalNotification from "src/components/ModalNotification/ModalNotification";
import { routes } from "src/routes";
import { selectOrderId } from "src/redux/orders/selectors";

const SubmitOrderPage = () => {
  const productBasket = useSelector(selectBasket);
  const totalPrice = useSelector(selectAmountOrder);
  const orderId = useSelector(selectOrderId);
  const dispatch = useDispatch();
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("paymentSucceeded");

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
    dispatch(clearBasket());
    navigate(routes.HOME);
  }

  useEffect(() => {
    if (status && status === "true") {
      openModal();
    } else if (status && status === "false") {
      openModal();
    }
  }, [location]);

  useEffect(() => {
    dispatch(calculateAmountOrder());
  }, [productBasket, dispatch]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Container>
      <WrapperPage>
        <Title title={"Особисті дані"} />
        <div className="wrapperFormList">
          <OrderForm />
          <div className="basketContainer">
            <div className="containerList">
              <ListBasketLittle productBasket={productBasket} />
            </div>
            <div className="containerSpan">
              <div className="wrapperSpan">
                <span className="spanText">Ціна товарів</span>
                <span className="spanPrice">{totalPrice}₴</span>
              </div>
              <div className="wrapperSpan">
                <span className="spanText">Доставка</span>
                <span className="spanPrice">100₴</span>
              </div>
              <div className="wrapperSpan">
                <span className="spanText">Загальна сума</span>
                <span className="totalPrice">{totalPrice + 100}₴</span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal Payment"
        >
          {status === "true" && (
            <ModalNotification
              message={[
                "Ваше замовлення сплачено.",
                `Номер замовлення № ${orderId}.`,
              ]}
              closeModal={closeModal}
            />
           )} 
          {status === "false" && (
            <ModalNotification
              message={[
                "На жаль, замовлення не сплачено.",
                "Спробуйте сплатити замовлення ще раз, або зверніться в службу підтримки.",
              ]}
              closeModal={closeModal}
            />
          )} 
        </Modal>
      </WrapperPage>
    </Container>
  );
};

export default SubmitOrderPage;
