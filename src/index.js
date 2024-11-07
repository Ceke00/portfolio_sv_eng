import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="...is Loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
