import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PDthemeProvider from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <PDthemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PDthemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
