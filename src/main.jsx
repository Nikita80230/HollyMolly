import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { App } from "./App.jsx";
import { GlobalStyle } from "./components/GlobalStyle.js";
import { persistor, store } from "./redux/store.js";
import { theme } from "./styles/theme.js";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
