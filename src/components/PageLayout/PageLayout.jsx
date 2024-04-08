import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import Header from "../Header/Header";
import Container from "../Container/Container";

import { StyledPageLayout } from "./Styled";

export const PageLayout = () => {
  return (
    <StyledPageLayout>
      <Header />
      <main className="main">
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </StyledPageLayout>
  );
};
