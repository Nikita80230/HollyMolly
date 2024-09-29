import { useEffect, useState } from "react";
import { ImageContainer, Overlay, RotatingIcon } from "./Styled";
import photo1 from "src/assets/images/animation/animation1-desk-1x.jpg";
import photo2 from "src/assets/images/animation/animation2-desk-1x.jpg";
import photo3 from "src/assets/images/animation/animation3-desk-1x.jpg";
import photo1Retina from "src/assets/images/animation/animation1-desk-2x.jpg";
import photo2Retina from "src/assets/images/animation/animation2-desk-2x.jpg";
import photo3Retina from "src/assets/images/animation/animation3-desk-2x.jpg";
import photo1Mobile from "src/assets/images/animation/animation1-mobile-1x.jpg";
import photo2Mobile from "src/assets/images/animation/animation2-mobile-1x.jpg";
import photo3Mobile from "src/assets/images/animation/animation3-mobile-1x.jpg";
import photo1MobileRetina from "src/assets/images/animation/animation1-mobile-2x.jpg";
import photo2MobileRetina from "src/assets/images/animation/animation2-mobile-2x.jpg";
import photo3MobileRetina from "src/assets/images/animation/animation3-mobile-2x.jpg";

const LoadingAnimation = ({ onComplete }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      default: photo1,
      retina: photo1Retina,
      mobile: photo1Mobile,
      mobileRetina: photo1MobileRetina,
    },
    {
      default: photo2,
      retina: photo2Retina,
      mobile: photo2Mobile,
      mobileRetina: photo2MobileRetina,
    },
    {
      default: photo3,
      retina: photo3Retina,
      mobile: photo3Mobile,
      mobileRetina: photo3MobileRetina,
    },
  ];

  useEffect(() => {
    if (currentImageIndex < images.length) {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentImageIndex, images.length, onComplete]);

  if (currentImageIndex >= images.length) {
    return null;
  }

  const isMobile = window.innerWidth <= 564;
  const currentImage = isMobile
    ? images[currentImageIndex].mobile
    : images[currentImageIndex].default;

  return (
    <ImageContainer
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      <Overlay />
      <RotatingIcon />
    </ImageContainer>
  );
};

export default LoadingAnimation;
