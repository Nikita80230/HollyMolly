import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import { routes } from "./routes";
import Loader from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.REGISTER,
    element: (
      //  <RestrictedRoute>
      <RegisterPage />
      //  </RestrictedRoute>
    ),
  },
  {
    path: routes.LOGIN,
    element: (
      // <RestrictedRoute>
        <LoginPage />
      // </RestrictedRoute>
    ),
  },
  {
    path: routes.PROFILE,
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <PageLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </Suspense>
    </PageLayout>
  );
};
