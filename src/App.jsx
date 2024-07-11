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
import Contractors from "./users/Contractors"
import ConProfile from "./users/ConProfile"
import ConRoadList from "./users/ConRoadList"
import { AuthProvider } from "./components/AuthContext";



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
      },
      {
        path: "/contractor",
        element: <Contractors/>
      },
      {
        path: "/con_profile",
        element: <ConProfile/>
      },
      {
        path: "/con_road_list",
        element: <ConRoadList/>
      }
    ]
  }
]);

function App() {
  return <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
}

export default App
