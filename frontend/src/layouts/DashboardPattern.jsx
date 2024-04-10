import { useEffect, useState } from "react";
import iconHamburger from "../components/navBar/img/cross.svg";
import iconCross from "../components/navBar/img/hamburger.svg";

import { 
    NavBar
} from "../index";

import { Outlet} from "react-router";

function DashboardPattern({
  SideBarComponent
}){

  const [open,setOpen]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const pixelThreshold = 768; // Cambia esto al ancho en píxeles que desees

      if (screenWidth >= pixelThreshold) {
        setOpen(false);
      }else{
        setOpen(true)
      }
    };

    // Agrega un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar/>
      <div className="w-full md:h-screen flex flex-col md:flex-row md:overflow-auto">
        <div className="relative w-full px-5 py-2 flex flex-col items-end md:w-[35%] lg:w-[30%] border md:overflow-y-scroll bg-white z-10">
          <div className="w-8 md:hidden">
            {
              open ? 
              <button onClick={()=>setOpen(false)}><img src={iconHamburger} alt='icono x' /></button> 
              : 
              <button onClick={()=>setOpen(true)}><img src={iconCross} alt='icono hamburguesa'/></button>
            }
          </div>
          { !open && 
            <div className="w-full">
              <SideBarComponent/>
            </div>
          }
        </div>
        <div className="w-full md:w-[65%] lg:w-[60%] border px-10 py-2 md:overflow-y-scroll">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPattern;
