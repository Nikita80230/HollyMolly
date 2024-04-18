import { createGlobalStyle } from "styled-components";
import "modern-normalize";

// import fontRobotoRegular from "src/assets/fonts/Roboto-Regular.ttf";
// import fontRobotoBold from "src/assets/fonts/Roboto-Bold.ttf";
// import fontNunitoRegular from "src/assets/fonts/Nunito-Regular.ttf";
// import fontNunitoMedium from "src/assets/fonts/Nunito-Medium.ttf";
// import fontNunitoSemiBold from "src/assets/fonts/Nunito-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`


 @font-face {
	font-family: 'Roboto';
	/* font-display: swap; */
	src: local("Roboto-Regular"), url('/public/fonts/Roboto-Regular.ttf') format("ttf");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Roboto';
	/* font-display: swap; */
	src: local("Roboto-Bold"), url("/public/fonts/Roboto-Bold.ttf") format("ttf");
	font-weight: 700;
	font-style: normal;
}


@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-Regular"), url("/public/fonts/Nunito-Regular.ttf") format("ttf");
	font-weight: 400;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-Medium"), url("/public/fonts/Nunito-Medium.ttf") format("ttf");
	font-weight: 500;
	font-style: normal;
}



@font-face {
	font-family: 'Nunito';
	/* font-display: swap; */
	src: local("Nunito-SemiBold"), url("/public/fonts/Nunito-SemiBold.ttf") format("ttf");
	font-weight: 600;
	font-style: normal;
} 




body {
  font-family: ${({ theme }) => theme.fonts.familyRoboto};
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
