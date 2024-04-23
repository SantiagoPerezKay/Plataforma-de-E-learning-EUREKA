import { useEffect, useState } from "react";
import iconDownRow from "../components/navBar/img/down-row.svg";
import iconUpRow from "../components/navBar/img/up-row.svg";

import { 
    NavBar
} from "../index";

import { Outlet } from "react-router";

function DashboardPattern({
  SideBarComponent,
  type='azul'
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

  const colorBg ={
    'azul':'bg-pictonBlue',
    'pink':'bg-[#FBD6C4]'
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar/>
      <div className="w-full md:h-screen flex flex-col md:flex-row md:overflow-auto">
        <div className="relative w-full flex flex-col items-end md:w-[35%] lg:w-[30%] border md:overflow-y-scroll bg-white z-10">
          <div className="md:hidden">
            {
              open ? 
              <button onClick={()=>setOpen(false)}><img className="w-8" src={iconDownRow} alt='icono x' /></button> 
              : 
              <button onClick={()=>setOpen(true)}><img className="w-8" src={iconUpRow} alt='icono hamburguesa'/></button>
            }
          </div>
          { !open && 
            <div className={`w-full h-screen ${colorBg[type]}`}>
              <SideBarComponent/>
            </div>
          }
        </div>
        <div className="w-full md:w-[65%] lg:w-[70%] border px-10 py-2 md:overflow-y-scroll">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default DashboardPattern;