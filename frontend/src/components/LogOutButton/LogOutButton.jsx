import useAuth from "../../api/auth";

const LogOutButton = () => {
  const { authLogout } = useAuth();

  return (
    <button
      onClick={authLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
