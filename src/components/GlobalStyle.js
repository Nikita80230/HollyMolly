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
  /* font-weight: <weight>; */
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

  margin: 0;
  padding: 0;
  min-width: 100%;

  background-color: ${({ theme }) => theme.colors.primaryBgColor};
   color: ${({ theme }) => theme.colors.primaryTxtColor};
}

img {
    display: block;
    width: 100%;
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
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;
}

.modal-content-order {
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;
     
  @media (max-width: 564px) {
    top:0;
  left: 0;
  transform:unset;
   }
 
}

.modal-content-forgot {
  position: absolute;
  top:75%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;

   @media (max-width: 564px) {
    top:0;
  left: 0;
  transform:unset;
   }
 
}

.modal-content-register {
  position: absolute;
  top:50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;

  @media (max-width: 564px) {
    top:0;
  left: 0;
  transform:unset;
   }
 
}

.content-modal-review{
position: absolute;
  top: 50%;
  left: 80%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;

  max-width: 426px;
  width: 100%;
  height: 517px;

  @media (max-width: 1239px) {
  top: 50%;
  left: 70%;
    
  }

  @media (max-width: 564px) {
    top: 0;
    left: 0;

    transform:unset;

    width: 100vw;
    height: 511px;
  }
}

.content-modal-review-small{
position: absolute;
  top: 50%;
  left: 80%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;

   @media (max-width: 1239px) {
  top:35%;
  left: 70%;
  }

  @media (max-width: 564px) {
  top:18%;
  left: 50%;
  }
}

.modal-content-support{
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;
}

.modal-content-support-notification{
   position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;
  @media (max-width: 564px) {
  top:25%;
  left: 50%;
  }
 
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

.modal-overlay-light {
  position: fixed;
  z-index:102;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background:rgba(0, 0, 0, 0);
}

.modal-content-basket{
  position: absolute;
  top:49%;
  left:82%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: transparent;
  outline: none;

  @media (max-width: 564px) {
    top:0;
  left: 0;
  transform:unset;
   }
}

.custom-toast {
    margin: 0 auto;
    position: fixed;
    top: 130px;
    left: 87%;
    transform: translate(-50%, -50%);
    z-index: 9999;

     @media (max-width: 564px) {
      top:-20px;
      left:-20px;
      transform:unset;
     }
  }
  
`;
