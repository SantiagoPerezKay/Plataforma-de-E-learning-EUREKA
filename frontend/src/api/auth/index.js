import axios from "axios";
import { setCredentials, logOut } from "../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authLogin = async (dataUser) => {
    try {
      const { data } = await axios.post("URL_LOGIN_BACKEND", dataUser);
      localStorage.setItem("jwt", data.token);
      dispatch(setCredentials(data));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const authRegistro = async (dataUser) => {
    try {
      const { data } = await axios.post("URL_REGISTER_BACKEND", dataUser);
      localStorage.setItem("jwt", data.token);
      dispatch(setCredentials(data));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const authLogout = async () => {
    try {
      localStorage.removeItem("jwt");

      await dispatch(logOut());

      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { authLogin, authRegistro, authLogout };
};

export default useAuth;
