import { createGlobalStyle } from "styled-components";
import "modern-normalize";

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
  font-family: ${({ theme }) => theme.fonts.familyNunito};

  margin: 0 auto;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
   color: ${({ theme }) => theme.colors.primaryTxtColor};
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

.modal-content {
  position: absolute;
  top: 45%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
}
.modal-overlay {
  position: fixed;
  z-index:102;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:rgba(0, 1, 5, 0.6);
}
.custom-toast {
    padding: 74px 24px;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    background-color: #FFFFFF;
    color: #323234;
    border-radius: 23px;
    text-align: center;
    max-width: 500px;
    height: 200px;
    margin: 0 auto;
    position: fixed;
    top: 400px;
    left: 53%;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }
`;
