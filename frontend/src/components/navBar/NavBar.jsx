import { useEffect, useState, useRef } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import iconUser from "./img/user-circle_.svg";
import iconHamburger from "./img/hamburger.svg";
import iconCross from "./img/cross.svg";
import logo from "./img/logo.webp";
import negocios from "./img/building.svg";
import finanzas from "./img/diagram-up.svg";
import it from "./img/laptop.svg";
import diseno from "./img/gallery-edit.svg";
import marketing from "./img/bag-smile.svg";
import team from "./img/hand-shake.svg";
import home from "./img/home.svg";
import { useNavigate, Link } from "react-router-dom";

import useCourse from "../../api/course";

const NavBar = () => {
  
  // menu en desktop
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const outsideMenuRef = useRef();
  
  // manejo de token
  const [isLogued, setIsLogued] = useState(false);
  const navigate = useNavigate();
  
  // se fija si está logueado cuando monta por primera vez el componente
  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    if(token){
      setIsLogued(true)
    }
  },[])
  
  // genera un estado al local storage para futuros cambios
  useEffect(() => {
    const handleTokenChange = () => {
      const token = localStorage.getItem('jwt');
      setIsLogued(!!token);
      setRol(token);
    };
    window.addEventListener('storage', handleTokenChange);
    
    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, []); 
  
    // conexión con la BBDD
    // defino variables y traigo funciones
    const [cursos,setCursos]=useState([])
    const { coursesByUser } =useCourse()

    // llama a la API y conecta con lista
    const fetchData = async () => {
      try {
          const catalogCourses = await coursesByUser();
          setCursos(catalogCourses);
        
      } catch (error) {
          console.error("Error fetching courses:", error);
      }
    };
    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
          fetchData();
          setRol(token);
        }
    },[]);
  
  // menu hamburguesa
  const [openSideBar, setOpenSideBar] = useState(false);

    // determina si es estudiante o profesor
    const [myRol, setMyRol] = useState("")
    function setRol(token){
        const payload = token.split(".")[1];
        const data = JSON.parse(atob(payload));
        const role = data.role.authority

        if(role.includes('STUDENT')){
          setMyRol('STUDENT')
        }else if(role.includes('TEACHER')){
          setMyRol('TEACHER')
        }else {
          setMyRol('')
        }
    }

  // hace click en cualquier lado para cerrar el dropdown
  useEffect(() => {
    // Función para cerrar el menú cuando se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (outsideMenuRef.current && !outsideMenuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
  return (
    <>
      <div className={`${!openSideBar && "hidden"
          } navbar-sidebar z-30`}>
        <div
          className={`${!openSideBar && "hidden"
          } sidebar-bg bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
          onClick={() => setOpenSideBar(false)}
        ></div>

        <div
          className={`${openSideBar ? "w-80" : "w-0"
          } sidebar-body ${myRol == 'STUDENT' ? 'bg-blue-100' : (myRol == 'TEACHER' ? 'bg-red-100' : 'bg-white')} min-h-screen fixed top-0 left-0 transition-all duration-300`}
        >
          <div className={`${!openSideBar && "hidden"} flex flex-col align-middle pt-1 relative`}>
            <button className="absolute top-0 -right-4 h-16 w-16 "
                    onClick={() => setOpenSideBar(false)}
            >
              <img src={iconCross} alt="" width='22' />
            </button>

            <div className="sidebar-category-container mx-auto">
              <div className="flex mt-8 align-middle">
                <img
                  src={iconUser}
                  alt="Icono Usuario"
                  width="60"
                  // debería cerrar el menu cuando da click ${myRol == 'STUDENT' ? 'bg-blue-100' : (myRol == 'TEACHER' ? 'bg-red-100' : 'bg-white')}
                   onClick={()=>{myRol == 'STUDENT' ? window.location.href=("/dashboard/student") : (myRol == 'TEACHER' ? window.location.href=("/dashboard/profesor") : window.location.href=("/login"))}}
                  />
              </div>
              {isLogued && <div className="my-4">Mi perfil</div>}
              {!isLogued && <div className="my-4">Ingresar</div>}

            </div>
            <div className="h-0.5 w-4/5 bg-gray-400 mx-auto"></div>
            {isLogued && 
            // falta que cierre el menu
              <div className="my-4 mx-auto">
                <i className="font-thin font mb-6">Mis cursos {myRol == 'STUDENT' ? 'inscritos:' : (myRol == 'TEACHER' ? 'creados:' : ':')}</i>
                <ul>
                  {
                    cursos.length !== 0 ?
                      cursos?.map((item)=>{
                        return <li className="my-2 py-2 w-60 text-center rounded border border-slate-400" key={item.course.title} >{item.course.title}</li>
                      })
                    : <p className="p-4 text-center">No {myRol == 'STUDENT' ? 'estás inscrito' : (myRol == 'TEACHER' ? 'ha creado' : '')} en ningún curso</p>
                  }
                </ul>
              </div>
            }
            <div className="h-0.5 w-4/5 bg-gray-400 mx-auto"></div>
            <div className="w-60 mx-auto">
              <p className="my-4 flex justify-center gap-4"><img width='30' src={home} />Inicio</p>
              <p><i className="font-thin text-left mb-6">Cursos:</i></p>
              <ul>
                <li className="flex justify-center gap-4 my-4"><img width='30' src={negocios} />Negocios</li>
                <li className="flex justify-center gap-4 my-4"><img width='30' src={finanzas} />Finanzas</li>
                <li className="flex justify-center gap-4 my-4"><img width='30' src={it} />IT</li>
                <li className="flex justify-center gap-4 my-4"><img width='30' src={marketing} />Marketing</li>
                <li className="flex justify-center gap-4 my-4"><img width='30' src={diseno} />Diseño</li>
              </ul>
    
            </div>
            <div className="h-0.5 w-4/5 bg-gray-400 mx-auto my-4"></div>
            <div className="w-60 flex justify-center gap-4 mx-auto font-semibold text-center"
                  onClick={() =>window.location.href = "/equipo"}
            ><img src={team} width='30'/>
              Equipo de EUREKA
            </div>
          </div>
        </div>
      </div>
    <div className="navbar flex flex-wrap justify-between max-md:justify-evenly max-lg:justify-normal items-center py-4 lg:px-12 w-full 2xl:w-3/4 2xl:mx-auto">
      <div className="hamburger  max-sm:m-0 max-md:-ml-4 mx-8 lg:hidden">
        <img src={iconHamburger} 
            alt="Menú Desplegable" 
            width='30' 
            onClick={()=>setOpenSideBar(true)}
        />
      </div>



      <div className="logo w-80 max-lg:w-52">
        <Link to={'/'}>
          <img src={logo} alt="Logo Eureka" width='200' />
        </Link>
      </div>
      
      <div className="navbar-center max-lg:hidden">
      {/* en caso de no estar logueado muestra un tipo de menu */}
      {!isLogued && (
      <div className="navbar-menu relative">
        <ul className="flex">
          <li className="mx-8 cursor-pointer relative group select-none"
              onClick={() => navigate("/")}

          >
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              Inicio
          </li>
          <li className="mx-8 cursor-pointer relative group flex gap-2 select-none"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              Cursos
              <svg className={`-mr-1 mt-1.5 h-5 w-5 text-gray-400 transition-all ${isSubMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
          </li>
          <li className="mx-8 cursor-pointer relative group select-none"
              onClick={() => navigate("/equipo")}
          >
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              Equipo
          </li>
        </ul>
        {isSubMenuOpen && (
          <div ref={outsideMenuRef} className="submenu absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg shadow-1 shadow-gray-500 shadow-opacity-25">
            <ul className="py-1">
              <li className="text-gray-700 block px-4 py-2 flex gap-4 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none">
                  <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                  <img width='20' src={negocios} />Negocios
                  <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
              </li>
              <li className="text-gray-700 block px-4 py-2 flex gap-4 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none">
                  <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                  <img width='20' src={finanzas} />Finanzas
                  <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
              </li>
              <li className="text-gray-700 block px-4 py-2 flex gap-4 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none">
                  <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                  <img width='20' src={it} />IT
                  <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
              </li>
              <li className="text-gray-700 block px-4 py-2 flex gap-4 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none">
                  <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                  <img width='20' src={marketing} />Marketing
                  <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
              </li>
              <li className="text-gray-700 block px-4 py-2 flex gap-4 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none">
                  <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                  <img width='20' src={diseno} />Diseño
                  <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
              </li>
            </ul>
          </div>
        )}
      </div>
       )}
      
      {/* en caso de estar logueado muestra otro tipo de menu */}
      {isLogued && (
      <div className="navbar-menu relative">
        <ul className="flex">
          <li className="mx-8 cursor-pointer relative group flex gap-2 select-none"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>
              Mis Cursos
              <svg className={`-mr-1 mt-1.5 h-5 w-5 text-gray-500 transition-all ${isSubMenuOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
          </li>
        </ul>
        {/* carga los cursos que trae de la bbdd */}
        {isSubMenuOpen && (
          <div className="submenu absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg shadow-1 shadow-gray-500 shadow-opacity-25">
            <ul className="py-1">
              {
                cursos.length !== 0 ?
                  cursos?.map((item)=>(
                      <li className="text-gray-700 block px-4 py-2 text-sm cursor-pointer relative group hover:font-bold hover:bg-gray-200 transition-all select-none"
                          onClick={() => {
                            navigate(`/dashboard/curso/${item.course.id}`);
                          }}
                          key={item.course.id}
                      >
                        <span className="absolute w-0.5 h-0 bg-blue-600 left-0 group-hover:h-1/2 group-hover:transition-all"></span>
                        {item.course.title}
                        <span className="absolute w-0.5 h-0 bg-blue-600 right-0 group-hover:h-1/2 group-hover:transition-all"></span>
                      </li>
                  ))
                :
                <p className="p-4 text-center">No {myRol == 'STUDENT' ? 'estás inscrito en' : (myRol == 'TEACHER' ? 'ha creado' : '')} ningún curso</p>
              }
            </ul>
          </div>
        )}
      </div>
       )}
      </div>

      <div className="navbar-user w-80 max-lg:hidden">
        {!isLogued && (
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="register text-white h-12 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            >
              REGISTRATE
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="login flex h-12 justify-center items-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 border border-blue-500 hover:text-blue-500 text-white shadow-sm hover:bg-transparent bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              INICIAR SESION
            </button>
          </div>
        )}
        {isLogued && (
          <div className="flex justify-end items-center gap-4">
            <div className="h-8">
            <LogOutButton changeState={()=> setIsLogued(false)} />
            </div>
            <img src={iconUser}
                  width="60" 
                  className="cursor-pointer"
                  onClick={()=>navigate('/dashboard/student')}
            />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default NavBar;