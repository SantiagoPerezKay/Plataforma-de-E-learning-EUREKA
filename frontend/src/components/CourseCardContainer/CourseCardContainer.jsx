import cards from "../../cards.json";
import CourseCard from "../CourseCard/CourseCard";

const CourseCardContainer = () => {
  return (
    <div>
      {cards.length > 0 ? (
        cards.map((card) => (
          <CourseCard
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
