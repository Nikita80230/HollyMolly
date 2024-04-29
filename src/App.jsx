import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import { routes } from "./routes";
import Loader from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.REGISTER,
    element:<RegisterPage/>,
  },
  {
    path: routes.LOGIN,
    element:<LoginPage/>,
  },
];

export const App = () => {
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
