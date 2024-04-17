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
  const [oldPostedCourses, setOldPostedCourses] = useState([]);
  const newPostedCourses = useSelector((state) => state.auth.userCourses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await coursesByUser();
        const data = response.map(({ course }) => course);
        setOldPostedCourses(data);

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

  const postedCourses = oldPostedCourses
    .concat(newPostedCourses)
    .filter(
      (course, index, self) =>
        index ===
        self.findIndex(
          (c) =>
            c.id === course.id &&
            c.title === course.title &&
            c.image === course.image
        )
    );
  console.log(postedCourses);
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
          ) : postedCourses &&
            Array.isArray(postedCourses) &&
            postedCourses.length > 0 ? (
            postedCourses.map((data) => (
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
