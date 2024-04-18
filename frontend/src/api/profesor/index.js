import axios from "axios";

const useProfesor = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
  const CARGAR_IMAGEN = import.meta.env.VITE_REACT_APP_CARGAR_IMAGEN;
  const CREAR_CURSO = import.meta.env.VITE_REACT_APP_CREAR_CURSO;

  const subirImagen = async (file) => {
    const RUTA = `${BASE_URL}${CARGAR_IMAGEN}`
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        'Content-Type':"multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const {data} = await axios.post(RUTA,file,config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const crearCursoData = async (dataCurso) => {
    const RUTA = `${BASE_URL}${CREAR_CURSO}`
    const token = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const {data} = await axios.post(RUTA,dataCurso,config);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return { 
    subirImagen,
    crearCursoData
  };
};

export default useProfesor;