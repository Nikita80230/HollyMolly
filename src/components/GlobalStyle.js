import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

:root{

}

@font-face {
	font-family: 'Roboto';
	font-display: swap;
	src: local("Roboto-Regular"), url("/fonts/Roboto-Regular.woff2") format("woff2"), 
			url("/fonts/Roboto-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	font-display: swap;
	src: local("Roboto-Bolt"), url("/fonts/Roboto-Bolt.woff2") format("woff2"), 
			url("/fonts/Roboto-Bolt.ttf") format("truetype");
	font-weight: 700;
	font-style: normal;
}


@font-face {
	font-family: 'Nunito';
	font-display: swap;
	src: local("Nunito-Regular"), url("/fonts/Nunito-Regular.woff2") format("woff2"), 
			url("/fonts/Nunito-Regular.ttf") format("truetype");
	font-weight: 400;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	font-display: swap;
	src: local("Nunito-Medium"), url("/fonts/Nunito-Medium.woff2") format("woff2"), 
			url("/fonts/Nunito-Medium.ttf") format("truetype");
	font-weight: 500;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	font-display: swap;
	src: local("Nunito-SemiBold"), url("/fonts/Nunito-SemiBold.woff2") format("woff2"), 
			url("/fonts/Nunito-SemiBold.ttf") format("truetype");
	font-weight: 600;
	font-style: normal;
}




body {
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  
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
