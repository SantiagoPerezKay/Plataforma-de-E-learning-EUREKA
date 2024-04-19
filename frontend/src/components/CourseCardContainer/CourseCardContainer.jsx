import { useEffect, useState } from "react";
import CursoCard from "../CursoCard/CursoCard";
import { useLocation } from "react-router-dom";
import useCourse from "../../api/course/index";
import { useSelector } from "react-redux";

const CourseCardContainer = () => {
  const location = useLocation();
  const { coursesByUser, getCatalogCourses } = useCourse();
  const [catalogData, setCatalogData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const userCourses = useSelector((state) => state.auth.userCourses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await coursesByUser();

        const catalogCourses = await getCatalogCourses();
        setCatalogData(catalogCourses);

        // Ambos conjuntos de datos se han cargado correctamente
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {dataLoaded ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {location.pathname.includes("inscripcion-cursos") ? (
            catalogData &&
            Array.isArray(catalogData) &&
            catalogData.length > 0 ? (
              catalogData.map((data) => (
                <CursoCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.image}
                />
              ))
            ) : (
              <h1 className="text-center text-2xl text-red-500">
                No hay cursos disponibles en este momento
              </h1>
            )
          ) : userCourses &&
            Array.isArray(userCourses) &&
            userCourses.length > 0 ? (
            userCourses.map((data) => (
              <CursoCard
                key={data.id}
                id={data.id}
                title={data.title}
                image={data.image}
              />
            ))
          ) : (
            <h1 className="text-center text-2xl text-blue-500">
              No está inscripto en ningún curso
            </h1>
          )}
        </div>
      ) : (
        <div>
          {location.pathname.includes("inscripcion-cursos") ? (
            <h1 className="text-center text-2xl text-gray-500">
              Cargando cursos de inscripción...
            </h1>
          ) : (
            <h1 className="text-center text-2xl text-gray-500">
              Cargando cursos del usuario...
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default CourseCardContainer;
