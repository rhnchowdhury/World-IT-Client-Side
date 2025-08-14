import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/providers/auth/AuthProvider.jsx";
import App from "./App.jsx";
import Home from "./components/pages/Home/Home.jsx";
import ErrorPage from "./components/pages/errors/ErrorPage.jsx";
import SignIn from "./components/pages/Signup/Signin/SignIn.jsx";
import Login from "./components/pages/Signup/Login/Login.jsx";
import DashboardLayouts from "./components/layouts/DashboardLayouts.jsx";
import Admin from "./components/Dashboard/Admin/Admin.jsx";
import Client from "./components/Dashboard/Client/Client.jsx";
import Developer from "./components/Dashboard/Dev/Developer.jsx";
import Moderator from "./components/Dashboard/Moderator/Moderator.jsx";
import { ToastContainer } from "react-toastify";
import AllUsers from "./components/Dashboard/users/AllUsers.jsx";
import DevShow from "./components/Dashboard/Dev/DevShow.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sign",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts></DashboardLayouts>,
    children: [
      {
        path: "/dashboard/admin",
        element: <Admin />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/client",
        element: <Client />,
      },
      {
        path: "/dashboard/dev",
        element: <DevShow />,
      },
      {
        path: "/dashboard/developer/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/users/developer/${params.email}`),
        element: <Developer />,
      },
      {
        path: "/dashboard/moderator/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/users/moderator/${params.email}`),
        element: <Moderator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={1000} />
    </AuthProvider>
  </StrictMode>
);
