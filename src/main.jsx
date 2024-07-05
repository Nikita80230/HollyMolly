import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import Modal from 'react-modal';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { App } from "./App.jsx";
import AuthCheck from "./components/AuthCheck.jsx";
import { GlobalStyle } from "./components/GlobalStyle.js";
import { persistor, store } from "./redux/store.js";
import { theme } from "./styles/theme.js";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <AuthCheck />
          <App />
          <GlobalStyle />
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
