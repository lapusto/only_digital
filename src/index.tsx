import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./components/home/home";
import "./index.css";
import "./utils/swiper-imports"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
