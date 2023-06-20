import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import Applications from "./routes/Applications.jsx";
import { AppProvider } from "./context.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

function Application() {
  return null;
}

function MonkApplications() {
  return null;
}

function MonkApplication() {
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/application/:id",
        element: <Application />,
      },
      {
        path: "/monk-applications",
        element: <MonkApplications />,
      },
      {
        path: "/monk-applications/:id",
        element: <MonkApplication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
