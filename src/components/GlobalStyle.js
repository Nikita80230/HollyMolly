import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "Pacifico", cursive;
	src: local("Pacifico-Regular"),  url("/fonts/Pacifico-Regular.ttf") format("ttf"),
         url("/fonts/Pacifico-Regular.woff") format("woff"),
         url("/fonts/Pacifico-Regular.woff2") format("woff2");
	 font-weight: 400;
  font-style: normal;
} 

@font-face {
	font-family: "EB Garamond", serif;
	src: local("EBGaramond-Variable"), url("/fonts/EBGaramond-VariableFont_wght.ttf") format("ttf"),
         url("/fonts/EBGaramond-Regular.woff") format("woff"),
         url("/fonts/EBGaramond-Regular.woff2") format("woff2");
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
} 

@font-face {
    font-family: "Didact Gothic";
    src: local("DidactGothic"),
         url("/fonts/DidactGothic-Regular.ttf") format("truetype"),
         url("/fonts/DidactGothic-Regular.otf") format("opentype"),
         url("/fonts/DidactGothic-Regular.woff") format("woff"),
         url("/fonts/DidactGothic-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

body {
  font-family: ${({ theme }) => theme.fonts.familyGaramond};
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
  top: 35%;
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
  background:rgba(76, 76, 77, 0.5);
}
.custom-toast {
    padding: 74px 24px;
    font-family: ${({ theme }) => theme.fonts.familyGaramond};
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
