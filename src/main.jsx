import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as appsLoader } from "./routes/Applications.jsx";
import { loader as appLoader } from "./routes/ApplicationDetails.jsx";
import "normalize.css";
import "./index.css";
import { AppProvider } from "./context.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Applications from "./routes/Applications.jsx";
import ApplicationDetails from "./routes/ApplicationDetails.jsx";
import Root from "./routes/Root.jsx";
import EditApplication from "./routes/EditApplication.jsx";

function DeleteApplication() {
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/applications",
        element: <Applications />,
        loader: appsLoader,
      },
      {
        path: "/application/:id",
        element: <ApplicationDetails />,
        loader: appLoader,
      },
      {
        path: "/application/:id/edit",
        element: <EditApplication />,
        loader: appLoader,
      },
      {
        path: "/application/:id/delete",
        element: <DeleteApplication />,
        loader: appLoader,
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
