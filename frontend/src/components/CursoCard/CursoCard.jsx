import starLine from "./star-line.svg";
import starFill from "./star-fill.svg";

const CursoCard = () => {
  return (
    <>
      <div className="card-container flex flex-col items-center w-72 border border-gray-300 rounded-xl shadow-xl shadow-slate-300 cursor-pointer overflow-hidden">
        <img src={cardimg5} className="w-full" />
        <div className="stars flex my-2">
          <img src={starFill} width="32" />
          <img src={starFill} width="32" />
          <img src={starFill} width="32" />
          <img src={starFill} width="32" />
          <img src={starLine} width="32" />
        </div>
        <h3 className="font-bold text-center">Negocios</h3>
        <p className="text-sm w-72 px-8">
          Estos cursos están diseñados para proporcionarte una base sólida en
          diferentes aspectos del mundo empresarial.
        </p>
        <button className="bg-blue-300 font-bold text-sm rounded-2xl my-4 px-4 py-2 border border-blue400 shadow-md shadow-slate-400">
          Inscríbete
        </button>
      </div>
    </>
  );
};

export default CursoCard;