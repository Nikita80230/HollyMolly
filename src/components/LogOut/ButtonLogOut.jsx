import { useDispatch } from "react-redux";
import { logOut } from "src/redux/auth/operations";
import { StyledButtonLogOut } from "./Styled";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </StyledButtonLogOut>
    </>
  );
};

export default ButtonLogOut;
