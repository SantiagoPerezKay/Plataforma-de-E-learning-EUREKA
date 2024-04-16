import axios from "axios";
import {
  BASE_URL,
  CATALOG,
  COURSES_BY_USER,
  COURSE_BY_ID
} from '../constantes'

const useCourse = () => {
  const getCatalogCourses = async () => {
    const RUTA = `${BASE_URL}${CATALOG}`
    try {
      const { data } = await axios(RUTA);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const coursesByUser = async () => {
    const RUTA = `${BASE_URL}${COURSES_BY_USER}`
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(RUTA,config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const courseById = async (id) => {
    const RUTA = `${BASE_URL}${COURSE_BY_ID}/${id}`
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(RUTA,config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getCatalogCourses, coursesByUser, courseById };
};

export default useCourse;
