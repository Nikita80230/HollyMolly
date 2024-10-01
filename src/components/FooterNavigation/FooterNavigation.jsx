import {
  FooterNavigationList,
  SocialLink,
  StyledLink,
  WrapperFooterNavigation,
  WrapperSocialLink,
} from "./Styled";
import Instagram from "../../assets/images/instagram.svg?react";
import Facebook from "../../assets/images/facebook.svg?react";
import Telegram from "../../assets/images/telegram.svg?react";
import { routes } from "src/routes";
import { selectCategories } from "src/redux/categories/selectors";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import SupportForm from "../SupportForm/SupportForm";

const FooterNavigation = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const categories = useSelector(selectCategories);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <WrapperFooterNavigation>
      <FooterNavigationList>
        <li className="footer-items">
          <h3 className="footer-title">Допомога</h3>
          <StyledLink to={routes.SIZE_GUIDE}>Довідник розмірів</StyledLink>
          <StyledLink to={routes.FAQ}>FAQ</StyledLink>
        </li>
        <li className="footer-items">
          <h3 className="footer-title">Про нас</h3>

          <StyledLink to={routes.ABOUT_US}>Про нас</StyledLink>

          <span className="styledSpan" onClick={openModal}>
            Зворотній зв'язок
          </span>
        </li>

        <li className="footer-items">
          <h3 className="footer-title">Каталог</h3>

          {categories.map((category) => {
            if (category.id <= 4) {
              return (
                <StyledLink
                  to={`${routes.CATALOG_PAGE}/${category.id}`}
                  key={category.id}
                  onClick={handleLinkClick}
                >
                  {category.name}
                </StyledLink>
              );
            }
            return null;
          })}
        </li>
        <li className="footer-items">
          <h3 className="footer-title">Контакти</h3>

          <WrapperSocialLink>
            <SocialLink
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="icon" />
              HollyMolly_Store
            </SocialLink>
          </WrapperSocialLink>
          <WrapperSocialLink>
            <SocialLink
              to="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="icon" />
              Holly Molly Store
            </SocialLink>
          </WrapperSocialLink>
          <WrapperSocialLink>
            <SocialLink
              to="https://t.me/yourstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className="icon" />
              Your Store_
            </SocialLink>
          </WrapperSocialLink>
        </li>
      </FooterNavigationList>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal-content-support"
        overlayClassName="modal-overlay-light"
        contentLabel="Modal Support"
      >
        <SupportForm onClose={closeModal} />
      </Modal>
    </WrapperFooterNavigation>
  );
};
export default FooterNavigation;
