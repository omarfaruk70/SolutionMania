import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={routes}>
    </RouterProvider>
   </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
