import "./App.css";
import SignInPage from "./Pages/Signin";
import SignUpPage from "./Pages/Signup";
import DashboardPage from "./Pages/Dashboard";
import ErrorPage from "./Pages/error";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;