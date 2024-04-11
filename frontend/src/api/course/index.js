import axios from "axios";

const useCourse = () => {
  const getCatalogCourses = async () => {
    try {
      const { data } = await axios(
        "https://s14-11-m-java.onrender.com/api/v1/catalog/allcatalog"
      );
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const coursesByUser = async () => {
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(
        "https://s14-11-m-java.onrender.com/api/v1/enrollments/students",
        config
      );
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const courseById = async (id) => {
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios(
        `https://s14-11-m-java.onrender.com/api/v1/mycourses/mycourses/${id}`,
        config
      );
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getCatalogCourses, coursesByUser, courseById };
};

export default useCourse;
