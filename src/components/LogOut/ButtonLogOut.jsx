import { useDispatch } from "react-redux";
import {  logOutAllDevices } from "src/redux/auth/operations";
import { StyledButtonLogOut } from "./Styled";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledButtonLogOut type="button" onClick={() => dispatch(logOutAllDevices())}>
        Вийти
      </StyledButtonLogOut>
    </>
  );
};

export default ButtonLogOut;
