import Modal from "react-modal";
import { StyledSection, WrapperModal } from "./Styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from "src/assets/images/arrowLeft.svg?react";
import ArrowRight from "src/assets/images/arrowRight.svg?react";
import { useState } from "react";
import LeaveFeedback from "../LeaveFeedback/LeaveFeedback";
import CardReview from "../CardReview/CardReview";
import { useAuth } from "src/hooks";
import { Link } from "react-router-dom";
import { routes } from "src/routes";

const ProductReviews = ({ reviews, productId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <StyledSection>
      <h2 className="titleReviews">Відгуки про продукт</h2>

      {!reviews.length ? (
        <p className="textReviews">Немає відгуків</p>
      ) : (
        <>
          <Swiper
            className="swiperCustom"
            modules={[Navigation, A11y]}
            navigation={{
              nextEl: ".nextProductBtn",
              prevEl: ".prevProductBtn",
            }}
            spaceBetween={50}
            slidesPerView={3}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="swiper-slideCustom">
                <CardReview review={review} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="buttonSwiper">
            <button className="prevProductBtn" type="button">
              <ArrowLeft />
            </button>
            <button className="nextProductBtn" type="button">
              <ArrowRight />
            </button>
          </div>
        </>
      )}
      <button type="button" className="buttonReview" onClick={openModal}>
        Залишити відгук
      </button>
      {isLoggedIn ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="content-modal-review"
          overlayClassName="modal-overlay-light"
          contentLabel="Modal Subscription"
        >
          <LeaveFeedback onClose={closeModal} productId={productId} />
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="content-modal-review"
          overlayClassName="modal-overlay-light"
          contentLabel="Modal Subscription"
          >
            <WrapperModal>
          <h2>
            Щоб залишити відгук <Link to={routes.REGISTER}>авторизуйтесь</Link>
              </h2>
            </WrapperModal>
          
        </Modal>
      )}
    </StyledSection>
  );
};

export default ProductReviews;
