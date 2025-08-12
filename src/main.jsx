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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
