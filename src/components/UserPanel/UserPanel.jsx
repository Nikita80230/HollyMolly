import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "../../assets/images/like.svg?react";
import BasketIcon from "../../assets/images/shopping-bag.svg?react";
import UserIcon from "../../assets/images/account.svg?react";
import { routes } from "../../routes";
import { ContainerEmptyBasket, StyledUserPanel } from "./Styled";
import { useAuth } from "src/hooks";
import { useSelector } from "react-redux";
import { selectBasket } from "src/redux/basket/selectors";
import { useState } from "react";
import ModalBasket from "../ModalBasket/ModalBasket";
import IconClose from "src/assets/images/close.svg?react";
import { toast } from "react-hot-toast";


const UserPanel = () => {
  const { isLoggedIn } = useAuth();
  const basket = useSelector(selectBasket);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if(basket.length >0){
    setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
       toast.custom(
         <div className="custom-toast">
            <ContainerEmptyBasket>
            <IconClose className="iconClose" />
          <p className="textBasket">Ваш кошик порожній</p></ContainerEmptyBasket>
          </div>,
          {
            duration: 1000,
          }
        );
    }
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <StyledUserPanel>
      {isLoggedIn &&
        <NavLink className="userPanelLink" to={routes.FAVORITES}>
          <button className="buttonIcon">
            <FavoriteIcon className="icon" />
          </button>
        </NavLink>}

      {isLoggedIn ? (
        <NavLink className="userPanelLink" to={routes.PROFILE}>
          <button className="buttonIcon">
            <UserIcon className="icon" />
          </button>
        </NavLink>
      ) : (
        <NavLink className="userPanelLink" to={routes.REGISTER}>
          <button className="buttonIcon">
            <UserIcon className="icon" />
          </button>
        </NavLink>
      )}
      <button className="buttonIconBasket" onClick={openModal}>
        <BasketIcon className="iconBasket" />
        {basket.length > 0 && (
          <div className="containerProducts">
            <span className="styledSpan">{basket.length}</span>
          </div>
        )}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content-basket"
        overlayClassName="modal-overlay-light"
        contentLabel="Modal Basket"
      >
     <ModalBasket closeModal={closeModal} />
      </Modal>
    </StyledUserPanel>
  );
};

export default UserPanel;
