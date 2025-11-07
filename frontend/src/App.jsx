import TheHeader from './components/TheHeader/TheHeader.jsx';
import Main from './components/Main/Main.jsx';
import { cardSectionMock } from './components/Mockups/cardSectionMock.js';
import { serviciosMock } from './components/Mockups/serviciosMock.js';
import { productosMock } from './components/Mockups/productosMock.js';
import CardsSection from './components/CardSection/CardSection.jsx';
import { newsMock } from './components/Mockups/newsMock.js';
import NewsSection from './components/NewsSection/NewsSection.jsx';
import ConsultoresAccesibilidad from './components/ConsultoresAccesibilidad/ConsultoresAccesibilidad.jsx';
import Productos from './components/Productos/Productos.jsx';
import { accesibilidadMock } from './components/Mockups/accesibilidadMock.js';

function App() {
  return (
    <>
      <TheHeader />
      <Main />
      <CardsSection cards={cardSectionMock} />
      <NewsSection title="Conoce las últimas novedades de Puntodis" items={newsMock} />
      <CardsSection title="Servicios" cards={serviciosMock} />
      <ConsultoresAccesibilidad />
      <Productos title="Productos" cards={productosMock} />
      <NewsSection title="Productos de accesibilidad universal" items={accesibilidadMock} />
    </>
  )
}

export default App