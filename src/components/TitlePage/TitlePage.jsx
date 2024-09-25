import { StyledTitle } from "./Styled";

const TitlePage = ({ title, width, height }) => {
  return (
    <StyledTitle width={width} height={height}>
      {title}
    </StyledTitle>
  );
};

export default TitlePage;
