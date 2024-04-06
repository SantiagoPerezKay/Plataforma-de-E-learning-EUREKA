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
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
