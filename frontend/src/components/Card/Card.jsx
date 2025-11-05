import "../../styles/layout/card.scss";

const Card = ({ title, description, icon, variant = "default", onClick }) => {
  return (
    <div className={`card card--${variant}`} onClick={onClick}>
      {icon && <div className="card__icon">{icon}</div>}
      <h3 className="card__title">{title}</h3>
      {description && <p className="card__description">{description}</p>}
    </div>
  );
};

export default Card;