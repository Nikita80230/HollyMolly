import { StyledButton } from "./Styled";

const ButtonLight = ({ title, width }) => {
  return (
    <StyledButton type="submit" width={width}>
      {title}
    </StyledButton>
  );
};

export default ButtonLight;
