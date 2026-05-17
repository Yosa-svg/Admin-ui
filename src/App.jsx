import "./App.css";
import SignInPage from "./Pages/Signin";
import SignUpPage from "./Pages/Signup";
import ErrorPage from "./Pages/error";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;