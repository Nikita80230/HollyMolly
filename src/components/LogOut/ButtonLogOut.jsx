import { useDispatch } from "react-redux";
import { logOut } from "src/redux/auth/operations";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </>
  );
};

export default ButtonLogOut;
