import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventoComponente } from './EventoComponente';

function App() {
  const fichaMedica = {
    altura: "160 cm",
    grupo: "A+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo React
        </p>
        {/*Cargar mi componente*/}
        <div className='componentes'>
        <hr />
          <EventoComponente/>
          <hr />
          <hr />
          <TercerComponente
            ficha={fichaMedica} />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div >
  );
}

export default App;
