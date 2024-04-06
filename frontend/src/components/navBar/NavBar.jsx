import { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import userCircle from "./img/user-circle.svg";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const [isLogued, setIsLogued] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    if(token){
      setIsLogued(true)
    }
  },[])

  return (
    <div className="navbar flex flex-wrap justify-around items-center my-4 w-full overflow-hidden">
      <Link
        to={'/'}
      >
        <div className="navbar-logo py-4 px-12 border border-gray-400">
          Logo EUREKA!
        </div>
      </Link>
      <div className="navbar-menu">
        <ul className="flex">
          <li className="mx-4">Inicio</li>
          <li className="mx-4">Cursos</li>
          <li className="mx-4">Equipo</li>
        </ul>
      </div>
      <div className="navbar-user max-md:hidden">
        {!isLogued && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="register text-white h-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              REGISTRATE
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="login flex h-12 justify-center items-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"
            >
              INICIAR SESION
            </button>
          </div>
        )}
        {isLogued && (
          <div className="flex gap-4">
            <LogOutButton 
              changeState={()=> setIsLogued(false)}
            />
            <img src={userCircle} width="60" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
