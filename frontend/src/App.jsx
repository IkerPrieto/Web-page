import TheHeader from './components/TheHeader/TheHeader.jsx';
import Main from './components/Main/Main.jsx';
import { cardSectionMock } from './components/Mockups/cardSectionMock.js';
import { serviciosMock } from './components/Mockups/serviciosMock.js';
import CardsSection from './components/CardSection/CardSection.jsx';
import { newsMock } from './components/Mockups/newsMock.js';
import NewsSection from './components/NewsSection/NewsSection.jsx';
import ConsultoresAccesibilidad from './components/ConsultoresAccesibilidad/ConsultoresAccesibilidad.jsx';

function App() {
  return (
    <>
      <TheHeader />
      <Main />
      <CardsSection cards={cardSectionMock} />
      <NewsSection title="Conoce las últimas novedades de Puntodis" items={newsMock} />
      <CardsSection title="Servicios" cards={serviciosMock} />
      <ConsultoresAccesibilidad />
    </>
  )
}

export default App