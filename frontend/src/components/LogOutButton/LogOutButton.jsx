import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/login");
  };
  return (
    <button
      onClick={logOutHandler}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
