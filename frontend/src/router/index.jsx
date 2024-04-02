import { createBrowserRouter } from "react-router-dom";

//pages
import { Login, Register, Home } from "../index";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "/",
    element: <h1>Coming soon..</h1>,
  },
]);

export default router;
