import { createBrowserRouter } from "react-router-dom";

//pages
import { Login, Register, Home , LandingPage } from "../index";

const router = createBrowserRouter([
  {
    path:'',
    element:<Home/>,
    children:[
      {
        path: "",
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
  }
]);

export default router;
