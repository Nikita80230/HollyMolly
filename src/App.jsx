import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "./routes";
import PageLayout from "./components/PageLayout/PageLayout";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import { authGoogle, refreshUser } from "./redux/auth/operations";
import SupportPage from "./pages/SupportPage/SupportPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ForgotPasswordPage from "./pages/FogotPasswortPage/FogotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import SizeGuidePage from "./pages/SizeGuidePage/SizeGuidePage";
import { useAuth } from "./hooks";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import AuthPageLayout from "./components/AuthPageLayout/AuthPageLayout";
import ProfileOrdersPage from "./pages/ProfileOrdersPage/ProfileOrdersPage";
import ProfilePageLayout from "./components/ProfilePageLayout/ProfilePageLayout";
import SubmitOrderPage from "./pages/SubmitOrderPage/SubmitOrderPage";
import ProductPage from "./pages/ProductPage/ProductPage";

import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { getMyOrders } from "./redux/orders/operations";

import ConfirmEmailPage from "./pages/ConfirmEmailPage/ConfirmEmailPage";
import { fetchCategories } from "./redux/categories/operations";
import { getAllProducts } from "./redux/products/operations";
import MobileProfilePage from "./pages/MobileProfilePage/MobileProfilePage";

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
    element: <ConfirmEmailPage />,
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
    path: `${routes.CATALOG_PAGE}/:categoryGroupId/:categoryId?`,
    element: <CatalogPage />,
  },
  {
    path: `${routes.PRODUCT_PAGE}/:productId/:productInstanceId`,
    element: <ProductPage />,
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
    path: routes.SIZE_GUIDE,
    element: <SizeGuidePage />,
  },
  {
    path: routes.FAVORITES,

    element: (
      <PrivateRoute>
        <FavoritesPage />
      </PrivateRoute>
    ),
  },
  {
    path: routes.BASKET,
    element: <BasketPage />,
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
    path: routes.MOBILE_PROFILE,
    element: (
      <PrivateRoute>
        <MobileProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: routes.MY_ORDERS,
    element: (
      <PrivateRoute>
        <ProfileOrdersPage />
      </PrivateRoute>
    ),
  },
  {
    path: routes.SUBMIT_ORDER,
    element: (
      <PrivateRoute>
        <SubmitOrderPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${routes.ORDER_DETAILS}/:id`,
    element: (
      <PrivateRoute>
        <OrderDetailsPage />
      </PrivateRoute>
    ),
  },
  {
    path: `${routes.MOBILE_ORDER_DETAILS}/:id`,
    element: (
      <PrivateRoute>
        <OrderDetailsPage />
      </PrivateRoute>
    ),
  },
];

const authPaths = [
  routes.REGISTER,
  routes.LOGIN,
  routes.FORGOT_PASSWORD,
  routes.RESET_PASSWORD,
  routes.CONFIRM_EMAIL,
];

const profilePaths = [
  routes.PROFILE,
  routes.MY_ORDERS,
  routes.ORDER_DETAILS,
  routes.MOBILE_ORDER_DETAILS,
  routes.MOBILE_PROFILE,
];

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");
  const { isRefreshing } = useAuth();
  const pathname = location.pathname;
  const userId = urlParams.get("userId");

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isLoggedIn) dispatch(getMyOrders());
  // }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (token && !pathname.includes("password-reset") && !userId) {
      dispatch(authGoogle({ token }));
    }
  }, [dispatch, token, pathname, userId]);

  const isAuthPage = authPaths.includes(location.pathname);
  const isProfilePage = profilePaths.some((profilePath) =>
    location.pathname.includes(profilePath)
  );

  if (isRefreshing) {
    return <Loader />;
  }
  if (isAuthPage) {
    return (
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
    );
  }

  if (isProfilePage) {
    return (
      <ProfilePageLayout>
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
      </ProfilePageLayout>
    );
  }

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
