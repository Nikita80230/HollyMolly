import Modal from "react-modal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "src/assets/images/like.svg?react";
import BasketIcon from "src/assets/images/shopping-bag.svg?react";
import UserIcon from "src/assets/images/account.svg?react";
import UserIconLoggedIn from "src/assets/images/userLoggedIn.svg?react";
import { routes } from "src/routes";
import { ContainerEmptyBasket, StyledUserPanel } from "./Styled";
import { useAuth } from "src/hooks";
import { useSelector } from "react-redux";
import { selectBasket } from "src/redux/basket/selectors";
import { useEffect, useState } from "react";
import ModalBasket from "../ModalBasket/ModalBasket";
import IconClose from "src/assets/images/close.svg?react";
import { toast } from "react-hot-toast";

const UserPanel = () => {
  const { isLoggedIn } = useAuth();
  const basket = useSelector(selectBasket);
  const location = useLocation();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 564);
  const isAuthPage =
    location.pathname === routes.LOGIN ||
    location.pathname === routes.FORGOT_PASSWORD ||
    location.pathname === routes.RESET_PASSWORD ||
    location.pathname === routes.CONFIRM_EMAIL;

  function openModal() {
    if (basket.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      toast.custom(
        <div className="custom-toast">
          <ContainerEmptyBasket>
            <IconClose className="iconClose" />
            <p className="textBasket">Ваш кошик порожній</p>
          </ContainerEmptyBasket>
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

  const handleClickMobile = () => {
    if (basket.length > 0) {
      navigate(routes.BASKET);
    } else {
      toast.custom(
        <div className="custom-toast">
          <ContainerEmptyBasket>
            <IconClose className="iconClose" />
            <p className="textBasket">Ваш кошик порожній</p>
          </ContainerEmptyBasket>
        </div>,
        {
          duration: 1000,
        }
      );
    }
  };

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
    <StyledUserPanel>
      {isLoggedIn && (
        <NavLink className="userPanelLink" to={routes.FAVORITES}>
          <button className="buttonIcon">
            <FavoriteIcon className="icon" />
          </button>
        </NavLink>
      )}

      {isLoggedIn ? (
        <NavLink
          className={`userPanelLink ${isAuthPage ? "active" : ""}`}
          to={routes.PROFILE}
        >
          <button className="buttonIcon">
            <UserIconLoggedIn className="icon" />
          </button>
        </NavLink>
      ) : (
        <NavLink
          className={`userPanelLink ${isAuthPage ? "active" : ""}`}
          to={routes.REGISTER}
        >
          <button className="buttonIcon">
            <UserIcon className="icon" />
          </button>
        </NavLink>
      )}
      {!isMobile ? (
        <button className="buttonIconBasket" onClick={openModal}>
          <BasketIcon
            className={`iconBasket ${
              location.pathname === routes.BASKET ? "active" : ""
            }`}
          />
          {basket.length > 0 && (
            <div className="containerProducts">
              <span className="styledSpan">{basket.length}</span>
            </div>
          )}
        </button>
      ) : (
        // <NavLink to={routes.BASKET}>
        //   {" "}
        <button className="buttonIconBasket" onClick={handleClickMobile}>
          <BasketIcon
            className={`iconBasket ${
              location.pathname === routes.BASKET ? "active" : ""
            }`}
          />
          {basket.length > 0 && (
            <div className="containerProducts">
              <span className="styledSpan">{basket.length}</span>
            </div>
          )}
        </button>
        // </NavLink>
      )}

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
