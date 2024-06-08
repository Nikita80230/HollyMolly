import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "src/redux/auth/authSlice";
import { selectAuth } from "src/redux/auth/selectors";

const AuthCheck = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("isFirstVisit");
    if (!isFirstVisit) {
      if (auth.token && !auth.rememberMe) {
        dispatch(logOut());
        }
        sessionStorage.setItem('isFirstVisit', 'true');
    }
  }, []);

  return null;
};

export default AuthCheck;
