import Card from "../Card/Card";
import "../../styles/layout/cardSection.scss";

const CardsSection = () => {
  const cards = [
    {
      title: "Tienda online",
      description:
        "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida.",
    },
    {
      title: "Administración pública",
      description:
        "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida.",

    },
    {
      title: "Fabricamos a medida",
      description:
        "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida.",

    },
    {
      title: "Digitalización accesible",
      description:
        "Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida.",

    },
  ];

  return (
    <section className="cards-section">
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;