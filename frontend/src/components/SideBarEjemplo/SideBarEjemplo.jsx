import { NavLink } from "react-router-dom";
import IconSidebarTeacher from "../iconsSidebarTeacher/IconDashboard";
import IconCrearCursoTeacher from "../iconsSidebarTeacher/IconCrearCursoTeacher"
import IconNotificacionesTeacher from "../iconsSidebarTeacher/IconNotificacionesTeacher"
import IconEditarCursoTeacher from "../iconsSidebarTeacher/IconEditarCursoTeacher"
import IconEliminarCursoTeacher from "../iconsSidebarTeacher/IconEliminarCursoTeacher"
import IconAyudaTeacher from "../iconsSidebarTeacher/IconAyudaTeacher"


export default function SidebarTeacher() {
    return (
        <>
            <div className="w-full h-full bg-[#FBD6C4]">
                <div className="p-10">
                    <NavLink to="mis-cursos">
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconSidebarTeacher/>
                            <label className="cursor-pointer">Dashboard</label>
                        </div>
                    </NavLink>

                    <NavLink to='crear-curso'>
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconCrearCursoTeacher/>
                            <label>Crear curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconNotificacionesTeacher/>
                            <label>Notificaciones</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconEditarCursoTeacher />
                            <label>Editar curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconEliminarCursoTeacher />
                            <label>Eliminar curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className="cursor-pointer flex items-center font-[600] m-2">
                            <IconAyudaTeacher />
                            <label>Ayuda</label>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
