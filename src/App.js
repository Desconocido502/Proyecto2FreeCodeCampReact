import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import React, { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    console.log("Click");
  };

  const reiniciarContador = () => {
    setNumClics(0);
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className="freecodecamp-log-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
