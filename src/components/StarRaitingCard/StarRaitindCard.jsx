import { FaStar, FaStarHalf } from "react-icons/fa";
import { WrapperStarsIcons } from "./Styled";

const StarRatingCard = ({ rating }) => {
  
  const fullStars = Math.floor(rating); // Кількість повних зірок
  const hasHalfStar = rating - fullStars >= 0.5; // Перевірка, чи є половинна зірка
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Кількість порожніх зірок

  return (
    <WrapperStarsIcons>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} color="gold" />
        ))}
      {hasHalfStar && <FaStarHalf key="half" color="gold" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`empty-${index}`} color="lightgrey" />
        ))}
    </WrapperStarsIcons>
  );
};

export default StarRatingCard;
