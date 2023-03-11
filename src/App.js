import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';

import './App.css';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor => setInput(prevInput => prevInput + valor);

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingresa un valor válido');
    }
  };

  return (
    <div className="App">
    

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          {[1, 2, 3, '+'].map(digito => (
            <Boton key={digito} manejarClic={() => agregarInput(digito)}>
              {digito}
            </Boton>
          ))}
        </div>
        <div className="fila">
          {[4, 5, 6, '-'].map(digito => (
            <Boton key={digito} manejarClic={() => agregarInput(digito)}>
              {digito}
            </Boton>
          ))}
        </div>
        <div className="fila">
          {[7, 8, 9, '*'].map(digito => (
            <Boton key={digito} manejarClic={() => agregarInput(digito)}>
              {digito}
            </Boton>
          ))}
        </div>
        <div className="fila">
          {['=', 0, '.', '/'].map(digito => (
            <Boton key={digito} manejarClic={digito === '=' ? calcularResultado : () => agregarInput(digito)}>
              {digito}
            </Boton>
          ))}
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;