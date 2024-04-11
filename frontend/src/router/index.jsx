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
  Equipo,
  CourseCardContainer,
  SidebarCourse,
  Course,
} from "../index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
        element: <Equipo />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <RutaProtegida />,
    children: [
      {
        path: "student",
        element: <DashboardPattern SideBarComponent={SideBarEjemplo} />,
        children: [
          {
            path: "mis-cursos",
            element: <CourseCardContainer />,
          },
          {
            path: "inscripcion-cursos",
            element: <CourseCardContainer />,
          },
          {
            path: "cursos",
            element: <h1>Cursos disponibles</h1>,
          },
        ],
      },
      {
        path: "curso/:id-curso",
        element: <DashboardPattern SideBarComponent={SidebarCourse} />,
        children: [
          {
            path: ":moduloid",
            element: <Course />,
          },
        ],
      },
    ],
  },
]);

export default router;
