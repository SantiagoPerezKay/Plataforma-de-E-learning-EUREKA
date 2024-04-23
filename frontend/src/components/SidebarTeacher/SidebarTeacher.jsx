import { NavLink } from "react-router-dom";
import IconSidebarTeacher from "../iconsSidebarTeacher/IconDashboard";
import IconCrearCursoTeacher from "../iconsSidebarTeacher/IconCrearCursoTeacher"
import IconNotificacionesTeacher from "../iconsSidebarTeacher/IconNotificacionesTeacher"
import IconEditarCursoTeacher from "../iconsSidebarTeacher/IconEditarCursoTeacher"
import IconEliminarCursoTeacher from "../iconsSidebarTeacher/IconEliminarCursoTeacher"
import IconAyudaTeacher from "../iconsSidebarTeacher/IconAyudaTeacher"


export default function SidebarTeacher() {
    const styles = 'flex items-center font-[600] m-2 gap-4 hover:text-[#404040]'
    return (
        <>
            <div className="w-full h-screen bg-[#FBD6C4]">
                <div className="p-10">
                    <NavLink to="mis-cursos">
                        <div className={styles}>
                            <IconSidebarTeacher/>
                            <label className="cursor-pointer">Dashboard</label>
                        </div>
                    </NavLink>

                    <NavLink to='crear-curso'>
                        <div className={styles}>
                            <IconCrearCursoTeacher/>
                            <label className="cursor-pointer">Crear curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className={styles}>
                            <IconNotificacionesTeacher/>
                            <label>Notificaciones</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className={styles}>
                            <IconEditarCursoTeacher />
                            <label>Editar curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className={styles}>
                            <IconEliminarCursoTeacher />
                            <label>Eliminar curso</label>
                        </div>
                    </NavLink>

                    <NavLink>
                        <div className={styles}>
                            <IconAyudaTeacher />
                            <label>Ayuda</label>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}