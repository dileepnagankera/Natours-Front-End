import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/Login/LoginComponent";
import SignUpPage from "./components/Signup/SignUpComponent";
import ToursComponent from "./components/Tours/ToursComponent";
import ToutDetailsComponent from "./components/Tours/TourDetailsComponent"


function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/Tours",
          element: <ToursComponent />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/tour/:id",
          element: <ToutDetailsComponent />,
        },
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
