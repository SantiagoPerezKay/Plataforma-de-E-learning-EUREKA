import { createBrowserRouter } from "react-router-dom";

//pages
import { 
  Login, 
  Register, 
  Home, 
  LandingPage,
  RutaProtegida,
  NavBar,
  Equipo 
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
      {
        path: "equipo",
        element: <Equipo/>,
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
