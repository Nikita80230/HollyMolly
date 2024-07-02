import { FaStar, FaStarHalf } from "react-icons/fa";
import { ContainerFeedbacks } from "./Styled";
import StarFull from "src/assets/images/starRed.svg?react";
import Star from "src/assets/images/star.svg?react";

const StarRatingCard = ({ rating, feedbacks }) => {
  const fullStars = Math.floor(rating); // Кількість повних зірок
  const hasHalfStar = rating - fullStars >= 0.5; // Перевірка, чи є половинна зірка
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Кількість порожніх зірок

  return (
    <ContainerFeedbacks>
      <div className="starsWrapper">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            // <FaStar key={`full-${index}`} color="gold" />
            <StarFull key={`full-${index}`} className="iconStar" />
          ))}
        {hasHalfStar && <FaStarHalf key="half" color="gold" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            // <FaStar key={`empty-${index}`} color="lightgrey" />
            <Star key={`empty-${index}`} className="iconStar" />
          ))}
      </div>
      <div className="wrapperFeedback">
        {/* <Feedback /> */}
        {feedbacks === 0 ? (
          <span className="spanFeedback">Ще немає відгуків</span>
        ) : (
          <span className="spanFeedback">{feedbacks} відгуків</span>
        )}
      </div>
    </ContainerFeedbacks>
  );
};

export default StarRatingCard;
