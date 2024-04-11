import { Link } from "react-router-dom";
import communityIcon from "./svg/community.svg";
import subscribeIcon from "./svg/subscribe.svg";
import myCoursesIcon from "./svg/my-courses.svg";
import contactIcon from "./svg/contact.svg";
import chatIcon from "./svg/chat.svg";

function SideBarEjemplo() {
  return (
    <div className="bg-white text-gray-800 h-screen w-64 flex flex-col justify-between">
      <div className="p-4">
        <Link to="mis-cursos" className="sidebar-item block mb-6">
          <div className="flex items-center">
            <img
              src={myCoursesIcon}
              alt="Mis Cursos"
              className="w-6 h-6 mr-2"
            />
            <p className="text-lg">Mis Cursos</p>
          </div>
        </Link>
        <Link to="inscripcion-cursos" className="sidebar-item block mb-6">
          <div className="flex items-center">
            <img
              src={subscribeIcon}
              alt="Inscripción a Cursos"
              className="w-6 h-6 mr-2"
            />
            <p className="text-lg">Inscripción a Cursos</p>
          </div>
        </Link>
        <div className="flex items-center mb-6">
          <img src={communityIcon} alt="Comunidad" className="w-6 h-6 mr-2" />
          <p className="text-lg">Comunidad</p>
        </div>
        <div className="flex items-center mb-6">
          <img src={chatIcon} alt="Chat" className="w-6 h-6 mr-2" />
          <p className="text-lg">Chat</p>
        </div>
        <div className="flex items-center mb-6">
          <img src={contactIcon} alt="Contacto" className="w-6 h-6 mr-2" />
          <p className="text-lg">Contacto</p>
        </div>
      </div>
      <div className="p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Convertirse en Profesor
        </button>
      </div>
    </div>
  );
}

export default SideBarEjemplo;
