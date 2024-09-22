import { useEffect, useState } from "react";
import { ImageContainer, LoadingImage, RotatingIcon } from "./Styled";
import photo1 from "src/assets/images/hero/backgroundDesktop3x.jpg";
import photo2 from "src/assets/images/subscribe/background-subscribe3x.jpg";

const LoadingAnimation = ({ onComplete }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [photo1, photo2, photo1];

  useEffect(() => {
    if (currentImageIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentImageIndex, images.length, onComplete]);

  return (
    <ImageContainer>
      <LoadingImage
        src={images[currentImageIndex]}
        alt={`Loading ${currentImageIndex + 1}`}
      />
      <RotatingIcon />
    </ImageContainer>
  );
};

export default LoadingAnimation;
