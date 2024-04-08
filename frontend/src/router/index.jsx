import { createBrowserRouter } from "react-router-dom";

//pages
import { 
  Login, 
  Register, 
  Home, 
  LandingPage,
  RutaProtegida,
  DashboardPattern,
  SideBarEjemplo, 
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
        element: <DashboardPattern SideBarComponent={SideBarEjemplo}/>,
        children:[
          {
            path:"mis-cursos",
            element:<h1>Cursos inscritos</h1>
          },
          {
            path:"cursos",
            element:<h1>Cursos disponibles</h1>
          }
        ]
      }
    ]
  }
]);

export default router;
