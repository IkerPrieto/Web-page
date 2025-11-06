import Card from "../Card/Card";
import "../../styles/layout/cardSection.scss";

const CardsSection = ({ cards = [], className = "" }) => {
  return (
    <section className={`cards-section ${className}`}>
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
