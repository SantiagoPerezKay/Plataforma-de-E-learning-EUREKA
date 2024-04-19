import starLine from "./star-line.svg";
import starFill from "./star-fill.svg";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import useCourse from "../../api/course/index";

const CursoCard = (props) => {
  const location = useLocation();
  const [subscribed, setSubscribed] = useState(false);
  const userCourses = useSelector((state) => state.auth.userCourses);

  const { postEnrollment } = useCourse();

  const handleChange = async (event) => {
    const value = event.target.value;
    await postEnrollment(value);
    setSubscribed(true);
  };

  return (
    <>
      {location.pathname.includes("inscripcion-cursos") ? (
        <div className="w-full h-full card-container flex flex-col items-center justify-between border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden mb-4">
          <img src={props.image} className="w-full" alt="Course" />
          <div className="stars flex my-2">
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starLine} width="32" alt="Empty Star" />
          </div>
          <h3 className="font-bold text-center">{props.title}</h3>
          <div>
            {!subscribed &&
            !userCourses.some((course) => course.id === props.id) ? (
              <button
                value={props.id}
                onClick={handleChange}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-2"
              >
                Inscribirse
              </button>
            ) : (
              <h3 className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 mb-2">
                Inscrito
              </h3>
            )}
          </div>
        </div>
      ) : (
        <Link
          to={`/dashboard/curso/${props.id}/1/1`}
          className="w-full h-full card-container flex flex-col items-center justify-between border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden mb-4"
        >
          <img src={props.image} className="w-full" alt="Course" />
          <div className="stars flex my-2">
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starLine} width="32" alt="Empty Star" />
          </div>
          <h3 className="font-bold text-center">{props.title}</h3>
        </Link>
      )}
    </>
  );
};

CursoCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CursoCard;
