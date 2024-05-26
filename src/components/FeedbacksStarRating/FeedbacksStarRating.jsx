import { FaStar } from "react-icons/fa";
import { WrapperStar } from "./Styled";

const FeedbacksStarRating = ({ value, hoverItem, setHoverItem, onChange }) => {
  const stars = Array(5).fill(0);

  const handleClick = (rating) => {
    onChange(rating + 1);
  };

  return (
    <WrapperStar>
      {stars.map((_, index) => {
        const color =
          index < (hoverItem !== null ? hoverItem + 1 : value)
            ? "gold"
            : "lightgrey";
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => setHoverItem(index)}
            onMouseOut={() => setHoverItem(null)}
            style={{ color }}
          >
            <FaStar />
          </div>
        );
      })}
    </WrapperStar>
  );
};

export default FeedbacksStarRating;
