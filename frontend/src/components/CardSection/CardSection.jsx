import Card from "../Card/Card";
import "../../styles/layout/cardSection.scss";

const CardsSection = ({ title = "",cards = [], className = "" }) => {
  return (
    <section className={`cards-section ${className}`}>
      {title && <h2 className="cards-section__title">{title}</h2>}
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
