import starLine from "./star-line.svg";
import starFill from "./star-fill.svg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const CursoCard = (props) => {
  return (
    <>
      <Link to={"/dashboard/curso/1/4"}>
        <div className="w-full card-container flex flex-col items-center border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden">
          <img src={props.image} className="w-full" />
          <div className="stars flex my-2">
            <img src={starFill} width="32" />
            <img src={starFill} width="32" />
            <img src={starFill} width="32" />
            <img src={starFill} width="32" />
            <img src={starLine} width="32" />
          </div>
          <h3 className="font-bold text-center">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};
CursoCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CursoCard;
