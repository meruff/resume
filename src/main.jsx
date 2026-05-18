import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "boxicons/css/boxicons.min.css";
import "./index.css";
import App from "./App.jsx";
import { initThemeFromStorage } from "./lib/theme.js";

initThemeFromStorage();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
