import cards from "../../cards.json";
import CursoCard from "../CursoCard/CursoCard";

const CourseCardContainer = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.length > 0 ? (
        cards.map((card) => (
          <CursoCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))
      ) : (
        <div>
          <h1>No te has inscripto a ningún curso</h1>
        </div>
      )}
    </div>
  );
};

export default CourseCardContainer;
