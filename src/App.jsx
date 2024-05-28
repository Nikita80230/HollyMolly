import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import { routes } from "./routes";

import PageLayout from "./components/PageLayout/PageLayout";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

import { fetchCategories } from "./redux/categories/operations";
import { getAllProducts } from "./redux/products/operations";

import { authGoogle, refreshUser } from "./redux/auth/operations";
import SupportPage from "./pages/SupportPage/SupportPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ForgotPasswordPage from "./pages/FogotPasswortPage/FogotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ConfirmEmail from "./pages/ConfirmEmailPage/ConfirmEmailPage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";
import SizeGuidePage from "./pages/SizeGuidePage/SizeGuidePage";
import { useAuth } from "./hooks";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import FeedbacksPage from "./pages/FeedbacksPage/FeedbacksPage";
import AuthPageLayout from "./components/AuthPageLayout/AuthPageLayout";

// import ComponentStyle from "styled-components/dist/models/ComponentStyle";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },

  {
    path: routes.REGISTER,
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: routes.CONFIRM_EMAIL,
    element: <ConfirmEmail />,
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
    path: `${routes.CATALOG_PAGE}/:categoryGroupId/:categoryId?`,
    element: (
      // <PrivateRoute>
      <CatalogPage />
      // </PrivateRoute>
    ),
  },
  {
    path: routes.SUPPORT,
    element: <SupportPage />,
  },
  {
    path: routes.ABOUT_US,
    element: <AboutUsPage />,
  },
  {
    path: routes.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
  {
    path: routes.RESET_PASSWORD,
    element: <ResetPasswordPage />,
  },
  {
    path: routes.TRACKING,
    element: <TrackingPage />,
  },
  {
    path: routes.SIZE_GUIDE,
    element: <SizeGuidePage />,
  },
  {
    path: routes.FAVORITES,
    element: <FavoritesPage />,
  },
  {
    path: routes.BASKET,
    element: <BasketPage />,
  },
  {
    path: `${routes.FEEDBACK}/:categoryId/:id`,
    element: <FeedbacksPage />,
  },
];

const authPaths = [
  "/register",
  "/login",
  "/forgot-password",
  "/reset-password",
  
];

export const App = () => {
  const dispatch = useDispatch();
   const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());

    dispatch(fetchCategories());
    dispatch(getAllProducts());

    if (token) {
      dispatch(authGoogle({ token }));
    }
  }, [dispatch, isLoggedIn]);

  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : isAuthPage ? (
        <AuthPageLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
            </Routes>
          </Suspense>
        </AuthPageLayout>
      ) : (
        <PageLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
            </Routes>
          </Suspense>
        </PageLayout>
      )}
    </>
  );
};
