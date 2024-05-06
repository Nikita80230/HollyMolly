import { Routes, Route, useParams } from "react-router-dom";
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
import SupportPage from "./pages/SupportPage/SupportPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ForgotPasswordPage from "./pages/FogotPasswortPage/FogotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ConfirmEmail from "./pages/ConfirmEmailPage/ConfirmEmailPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },

  {
    path: routes.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: routes.CONFIRMEMAIL,
    element:<ConfirmEmail/>,
  },
  {
    path: routes.LOGIN,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
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
  {
    path: routes.SUPPORT,
    element: <SupportPage />,
  },
  {
    path: routes.ABOUT,
    element: <AboutUsPage />,
  },
  {
    path: routes.FORGOTPASSWORD,
    element: <ForgotPasswordPage />,
  },
  {
    path: routes.RESETPASSWORD,
    element: <ResetPasswordPage />,
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
