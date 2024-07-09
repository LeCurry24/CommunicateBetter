import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import Layout from "./pages/Layout";
import RoadMaster from "./users/RoadMaster";
import Profile from "./users/Profile";
import RoadList from "./users/RoadList";



const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/sign_in",
        element: <SignIn/>
      },
      {
        path: "/sign_up",
        element: <SignUp/>
      },
      {
        path: "/sign_out",
        element: <SignOut/>
      },
      {
        path: "/road_master",
        element: <RoadMaster/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/road_list",
        element: <RoadList/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
