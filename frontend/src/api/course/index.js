import axios from "axios";

const useCourse = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
  const CATALOG = import.meta.env.VITE_REACT_APP_CATALOG;
  const COURSES_BY_USER = import.meta.env.VITE_REACT_APP_COURSES_BY_USER;
  const COURSE_BY_ID = import.meta.env.VITE_REACT_APP_COURSE_BY_ID;

  const getCatalogCourses = async () => {
    const RUTA = `${BASE_URL}${CATALOG}`;
    try {
      const { data } = await axios(RUTA);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const coursesByUser = async () => {
    const RUTA = `${BASE_URL}${COURSES_BY_USER}`;
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(RUTA, config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const courseById = async (id) => {
    const RUTA = `${BASE_URL}${COURSE_BY_ID}/${id}`;
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(RUTA, config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getCatalogCourses, coursesByUser, courseById };
};

export default useCourse;
