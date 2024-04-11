import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import RobotoRegularTtf from "../fonts/Roboto-Regular.ttf";
import RobotoRegularWoff from "../fonts/Roboto-Regular.woff";
import NunitoRegularTtf from "../fonts/Nunito-Regular.ttf";
import NunitoRegularWoff from "../fonts/Nunito-Regular.woff";
import NunitoSemiBoldTtf from "../fonts/Nunito-SemiBold.ttf";
import NunitoSemiBoldWoff from "../fonts/Nunito-SemiBold.woff";
import CroissantOneRegularTtf from "../fonts/CroissantOne-Regular.ttf";
import CroissantOneRegularWoff from "../fonts/CroissantOne-Regular.woff";

export const GlobalStyle = createGlobalStyle`

:root{
--family-nunito:"Nunito"
--family-roboto:"Roboto"
--family-croissantOne:"CroissantOne"
}

@font-face {
   font-family: 'Roboto', sans-serif;
 src: local('Roboto-Regular'), url(${RobotoRegularTtf}) format('ttf'), url(${RobotoRegularWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face{
  font-family: 'Nunito', sans-serif;
 src: local('Nunito-Regular'), url(${NunitoRegularTtf}) format('ttf'), url(${NunitoRegularWoff}) format('woff');
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

@font-face{
  font-family: 'Nunito', sans-serif;
   src: local('Nunito-SemiBold'), url(${NunitoSemiBoldTtf}) format('ttf'), url(${NunitoSemiBoldWoff}) format('woff');
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

@font-face{
  font-family: 'CroissantOne', sans-serif;
  src: local('CroissantOne-Regular'), url(${CroissantOneRegularTtf}) format('ttf'), url(${CroissantOneRegularWoff}) format('woff');
}

body {
 font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  min-width: 100%;
  
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
  cursor:pointer;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}
button{
    cursor:pointer;
}

.icon {
  display: block;
}

`;
