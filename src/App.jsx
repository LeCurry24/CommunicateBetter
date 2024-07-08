import { createBrowserRouter, RouterProvider, Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./components/SignUp";
import Layout from "./pages/Layout";

const components = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/signUp",
        element: <SignUp/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider components={components} />;
}

export default App
