import { createBrowserRouter } from "react-router-dom";

//pages
import { 
  Login, 
  Register, 
  Home, 
  LandingPage,
  RutaProtegida,
  NavBar 
} from "../index";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },
  {
    path:'dashboard',
    element:<RutaProtegida/>,
    children:[
      {
        path: "student",
        element: <NavBar/>,
      }
    ]
  }
]);

export default router;
