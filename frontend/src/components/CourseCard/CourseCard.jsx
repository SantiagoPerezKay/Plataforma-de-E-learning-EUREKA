import starLine from "../CursoCard/star-line.svg"
import starFill from "../CursoCard/star-fill.svg";


const CourseCard = ({title,image}) => {
  return (
    <div
      className="w-full h-full card-container flex flex-col items-center justify-between border border-gray-300 rounded-xl shadow-xl shadow-slate-300 hover:shadow-slate-400  cursor-pointer overflow-hidden mb-4"
    >
          <div className="w-full h-48 overflow-hidden flex items-center">
            <img src={image} className="w-full" alt="Course" />
          </div>
          <div className="stars flex my-2">
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starFill} width="32" alt="Filled Star" />
            <img src={starLine} width="32" alt="Empty Star" />
          </div>
          <h3 className="font-bold text-center">{title}</h3>
    </div>
  )
 
};

export default CourseCard;
