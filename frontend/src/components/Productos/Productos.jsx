import "../../styles/layout/products.scss";

const Productos = ({ title = "", cards = [], className = "" }) => {
  return (
    <section className={`products__section ${className}`}>
      {title && <h2 className="products__title">{title}</h2>}
      <div className="products__grid">
        {cards.map((card, index) => (
          <div key={index} className="products__item">
            <div className="product__image-wrapper">
              <img
                src={card.icon}
                alt={card.description || `Producto ${index + 1}`}
                className="product__image"
              />
            </div>
            <p className="product__description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;