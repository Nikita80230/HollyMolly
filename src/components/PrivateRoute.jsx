import { Navigate } from "react-router-dom";
import { useAuth } from "src/hooks";
import { routes } from "src/routes";

const PrivateRoute = ({
  component: Component,
  redirectTo = routes.REGISTER,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
