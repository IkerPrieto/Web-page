import { useRef, useEffect, useState } from "react";
import "../../styles/layout/newsSection.scss";

const NewsSection = ({
  title = "Conoce las últimas novedades de Puntodis",
  items = [],
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 Detecta qué card está centrada
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = null;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const children = Array.from(el.children);
        const containerRect = el.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestIdx = 0;
        let closestDist = Infinity;

        children.forEach((child, idx) => {
          const r = child.getBoundingClientRect();
          const childCenter = r.left + r.width / 2;
          const dist = Math.abs(childCenter - containerCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });

        setActiveIndex((curr) => (curr !== closestIdx ? closestIdx : curr));
      });
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // 🔹 Scroll horizontal solo con click y arrastre
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      if (e.button !== 0) return; // solo botón izquierdo
      isDragging = true;
      el.classList.add("dragging");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("dragging");
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("dragging");
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault(); // evita seleccionar texto
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.2; // velocidad del arrastre
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <section className="news-section">
      {title && <h2 className="news-section__title">{title}</h2>}

      <div className="news-section__viewport">
        <div ref={containerRef} className="news-section__grid" role="list">
          {items.map((item, idx) => (
            <article
              key={item.id || idx}
              className={`news-card ${idx === activeIndex ? "is-active" : ""}`}
              role="listitem"
            >
              <div className="news-card__inner">
                <img
                  src={item.image}
                  alt={item.title || `Elemento ${item.id || idx}`}
                  className="news-card__image"
                />
                {item.title && (
                  <div className="news-card__content">
                    {item.category && (
                      <span className="news-card__category">
                        {item.category}
                      </span>
                    )}
                    <h3 className="news-card__title">{item.title}</h3>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;