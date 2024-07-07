import { ContainerFeedbacks } from "./Styled";
import StarFull from "src/assets/images/starRed.svg?react";
import Star from "src/assets/images/star.svg?react";
import HalfStar from "src/assets/images/halfStar.svg?react"

const StarRatingCard = ({ rating }) => {
  const fullStars = Math.floor(rating); // Кількість повних зірок
  const hasHalfStar = rating - fullStars >= 0.5; // Перевірка, чи є половинна зірка
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Кількість порожніх зірок

  return (
    <ContainerFeedbacks>
      <ul className="starsWrapper">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <StarFull key={`full-${index}`} className="iconStar" />
          ))}
        {hasHalfStar && <HalfStar key="half" className="iconStar" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <Star key={`empty-${index}`} className="iconStar" />
          ))}
      </ul>
     
    </ContainerFeedbacks>
  );
};

export default StarRatingCard;
