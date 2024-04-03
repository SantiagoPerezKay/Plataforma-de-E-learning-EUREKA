import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/login");
  };
  return (
    <button
      onClick={logOutHandler}
      className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg"
    >
      LOG OUT
    </button>
  );
};

export default LogOutButton;
