import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing";
import App from "./pages/App";
import Info from "./pages/Info";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <div>Error, seems like you're lost!</div>,
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <div>Error, seems like you're lost!</div>,
  },
  {
    path: "/info",
    element: <Info />,
    errorElement: <div>Error, seems like you're lost!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
