import { useEffect, useState } from "react";
import CursoCard from "../CursoCard/CursoCard";
import { useLocation } from "react-router-dom";
import useCourse from "../../api/course/index";

const CourseCardContainer = () => {
  const location = useLocation();
  const { coursesByUser, getCatalogCourses } = useCourse();
  const [userData, setUserData] = useState([]);
  const [catalogData, setCatalogData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCourses = await coursesByUser();
        setUserData(userCourses);

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
                  title={data.title}
                  image={data.image}
                  id={data.id}
                />
              ))
            ) : (
              <h1 className="text-center text-2xl text-red-500">
                No hay cursos disponibles en este momento
              </h1>
            )
          ) : userData && Array.isArray(userData) && userData.length > 0 ? (
            userData.map((data) => (
              <CursoCard
                key={data.course.id}
                title={data.course.title}
                image={data.course.image}
                id={data.course.id}
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
