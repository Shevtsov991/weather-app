import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CityProvider } from "./provider/cityProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <CityProvider>
            <App />
          </CityProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
