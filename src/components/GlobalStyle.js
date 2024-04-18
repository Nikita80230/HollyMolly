import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

:root{


}

 @font-face {
	font-family: 'Roboto';
	/* font-display: swap; */
	src: local("Roboto-Regular"), url("/src/assets/fonts/Roboto-Regular.ttf") format("ttf");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	/* font-display: swap; */
	src: local("Roboto-Bolt"), url("/src/assets/fonts/Roboto-Bolt.ttf") format("ttf");
	font-weight: 700;
	font-style: normal;
}


@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-Regular"), url("/src/assets/fonts/Nunito-Regular.ttf") format("ttf");
	font-weight: 400;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-Medium"), url("/src/assets/fonts/Nunito-Medium.ttf") format("ttf");
	font-weight: 500;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-SemiBold"), url("/src/assets/fonts/Nunito-SemiBold.ttf") format("ttf");
	font-weight: 600;
	font-style: normal;
} 




body {
  font-family: "Nunito", "Roboto";
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
