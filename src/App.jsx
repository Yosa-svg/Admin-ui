import "./App.css";
import SignInPage from "./Pages/Signin";
import SignUpPage from "./Pages/Signup";
import DashboardPage from "./Pages/Dashboard";
import BalancePage from "./Pages/Balance";
import ErrorPage from "./Pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
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