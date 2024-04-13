import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import { routes } from "./routes";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },
];

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {appRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Route>
    </Routes>
  );
};
