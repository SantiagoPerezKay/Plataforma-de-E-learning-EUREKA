import { Link } from "react-router-dom";

function SideBarEjemplo() {
  return (
    <div className="sidebar">
      <Link to="mis-cursos" className="sidebar-item">
        <p className="text-lg">Mis Cursos</p>
      </Link>
      <Link to="inscripcion-cursos" className="sidebar-item">
        <p className="text-lg">Inscripción a Cursos</p>
      </Link>
      <p className="text-lg">Comunidad</p>
      <p className="text-lg">Chat</p>
      <p className="text-lg">Contacto</p>
      <p className="text-lg">Botón Convertirse en Profesor</p>
    </div>
  );
}

export default SideBarEjemplo;
