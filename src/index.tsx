import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContextProvider";
import PDthemeProvider from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <PDthemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PDthemeProvider>
    </AppContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
