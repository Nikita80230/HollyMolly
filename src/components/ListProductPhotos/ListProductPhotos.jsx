import { useEffect, useState } from "react";
import Modal from "react-modal";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";
import { ContainerModalPhoto, PhotoContainer } from "./Styled";

const ListProductPhotos = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(defaultPhoto);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImage(images[index]?.link || defaultPhoto);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const otherImages = images.slice(1, 3);
  while (otherImages.length < 2) {
    otherImages.push({ link: defaultPhoto });
  }

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]?.link || defaultPhoto);
    }
  }, [images]);

  return (
    <>
      {!images || images.length === 0 ? (
        <PhotoContainer>
          <div className="mainPhoto">
            <img
              className="mainImage"
              src={defaultPhoto}
              alt="Default product photo"
            />
          </div>
          <div className="otherPhotos">
            {[...Array(2)].map((_, index) => (
              <img
                key={index}
                className="otherImage"
                src={defaultPhoto}
                alt="Default product photo"
              />
            ))}
          </div>
        </PhotoContainer>
      ) : (
        <PhotoContainer>
          <div className="mainPhoto">
            <img
              className="mainImage"
              src={images[0]?.link || defaultPhoto}
              alt="Main product photo"
              onClick={() => openModal(0)}
            />
          </div>
          <div className="otherPhotos">
            {otherImages.map((image, index) => (
              <img
                key={index}
                className="otherImage"
                src={image.link}
                alt={`Product photo ${index + 1}`}
                onClick={() => openModal(index + 1)}
              />
            ))}
          </div>
        </PhotoContainer>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Modal Photo Product"
      >
        <ContainerModalPhoto>
          <img
            className="modalImg"
            src={selectedImage}
            alt="Selected product photo"
            width={500}
          />
        </ContainerModalPhoto>
      </Modal>
    </>
  );
};


        {/* {modalIsOpen && (
          <Swiper
            initialSlide={initialSlideIndex}
            slidesPerView={1}
            effect="fade"
            navigation={true}
            modules={[EffectFade, Navigation]}
            style={{
              "--swiper-navigation-color": "#e85a50",
            }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id} className="swiperSlide">
                <div>
                  <img
                    className="modalImg"
                    src={image.link}
                    alt={`Product photo ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        {/* )} */}
     

export default ListProductPhotos;
