import { Navigate } from "react-router-dom";
import { useAuth } from "src/hooks";
import { routes } from "src/routes";

const RestrictedRoute = ({ children, redirectTo = routes.PROFILE }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};
export default RestrictedRoute;
