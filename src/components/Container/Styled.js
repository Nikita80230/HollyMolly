import styled from "styled-components";

export const StyledContainer = styled.div`
  /* Гумова верстка від 320px */
  width: 100%;
  /* max-width: 100%; */
  padding: 0 20px;
  margin: 0 auto;

  /* Адаптивна верстка з 565px */
  @media (max-width: 565px) {
    max-width: 565px;
  }

  /* Tablet: з 768px до 1024px */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 1024px;
    padding: 0 64px;
  }

  /* Laptop: з 1280px */
  /* @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 64px;
  } */

  /* Desktop: до 1440px */
  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 0 64px;
  }
`;
