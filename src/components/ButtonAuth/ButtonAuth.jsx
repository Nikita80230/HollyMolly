import { StyledButton } from "./Styled";

const ButtonAuth = ({ title, width, disabled }) => {
  return (
    <StyledButton type="submit" width={width} disabled={disabled}>
      {title}
    </StyledButton>
  );
};

export default ButtonAuth;
