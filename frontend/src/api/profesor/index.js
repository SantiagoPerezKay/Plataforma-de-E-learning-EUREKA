import axios from "axios";

import {
  BASE_URL,
  CARGAR_IMAGEN
} from '../constantes'

const useProfesor = () => {

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

  return { 
    subirImagen
  };
};

export default useProfesor;