import useAuth from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LogOutButton = ({changeState}) => {
  const { authLogout } = useAuth();
  const navigate = useNavigate();

  const logOut=()=>{
    authLogout()
    changeState()
    navigate("/");
  }

  return (
    <button
      onClick={logOut}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
    >
      Salir
    </button>
  );
};

export default LogOutButton;
