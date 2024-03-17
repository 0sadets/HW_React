import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ItemProvider } from "./contexts/item-context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ItemProvider>
  </React.StrictMode>
);
