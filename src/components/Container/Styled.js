import styled from "styled-components";

export const StyledContainer = styled.div`
  /* Гумова верстка від 320px */

  /* Адаптивна верстка з 565px */
  /* @media (max-width: 565px) {
    max-width: 565px;
  } */

  /* Tablet: з 768px до 1024px */
  /* @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 50px;
    margin: 0 auto;
  } */

  /* Laptop: з 1280px  */
  /* @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 64px;
  } */

  /* Desktop: до 1440px */
  /* @media (min-width: 1024px) {
    max-width: 1440px;
    padding: 0 51px;
  } */
  /* =========================================================================================== */

  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    max-width: 1280px;
    padding: 0 64px;
  }

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 564px) {
    max-width: 564px;
    padding: 0 20px;
  }
`;
