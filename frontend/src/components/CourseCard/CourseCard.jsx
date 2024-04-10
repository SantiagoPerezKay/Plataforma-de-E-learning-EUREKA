import img from "../../images/images.jpeg";
import PropTypes from "prop-types";

const CourseCard = (props) => {
  return (
    <div>
      <img src={img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>Incribirse</button>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CourseCard;
