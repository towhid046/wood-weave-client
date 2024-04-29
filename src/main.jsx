import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routers/Routers";
import ContextProvider from "./providers/ContextProvider/ContextProvider";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <RouterProvider router={routers} />
      </ContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
