import React from "react";
import ReactDOM from "react-dom/client";

import Index from "./pages/Index";

import "./index.css";
import { ToastProvider } from "./components/Toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <Index />
    </ToastProvider>
  </React.StrictMode>
);
