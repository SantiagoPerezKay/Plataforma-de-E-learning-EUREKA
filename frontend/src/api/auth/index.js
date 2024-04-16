import axios from "axios";
import { setCredentials, logOut } from "../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  BASE_URL,
  LOGIN,
  REGISTER
} from '../constantes'

const useAuth = () => {
  const dispatch = useDispatch();

  const authLogin = async (dataUser) => {
    const RUTA = `${BASE_URL}${LOGIN}`
    try {
      const { data } = await axios.post(RUTA,dataUser);
      localStorage.setItem("jwt", data.token);
      dispatch(setCredentials(data));
      return data.token
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const authRegistro = async (dataUser) => {
    const RUTA = `${BASE_URL}${REGISTER}`
    try {
      const { data } = await axios.post(RUTA,dataUser);
      localStorage.setItem("jwt", data.token);
      dispatch(setCredentials(data));
      return data.token
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const authLogout = () => {
    try {
      localStorage.removeItem("jwt");
      dispatch(logOut());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { authLogin, authRegistro, authLogout };
};

export default useAuth;
