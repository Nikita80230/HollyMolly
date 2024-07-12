import { useEffect, useState } from "react";
import Modal from "react-modal";
import defaultPhoto from "src/assets/images/defaultImg.webp";
import {PhotoContainer } from "./Styled";
import ModalSwiperPhoto from "../ModalSwiperPhoto/ModalSwiperPhoto";

const ListProductPhotos = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(defaultPhoto);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0); 

  const openModal = (index) => {
    setSelectedImage(images[index]?.link || defaultPhoto);
    setActiveImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
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
        ariaHideApp={false}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Modal Photo Product"
      >
        <ModalSwiperPhoto images={images} activeIndex={activeImageIndex} />
      </Modal>
    </>
  );
};

export default ListProductPhotos;