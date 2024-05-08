import { Routes, Route } from "react-router-dom";
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

import { refreshUser } from "./redux/auth/operations";
import { fetchCategories } from "./redux/categories/operations";
import { getAllProducts } from "./redux/products/operations";

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
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());

    dispatch(fetchCategories());
    dispatch(getAllProducts());
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
