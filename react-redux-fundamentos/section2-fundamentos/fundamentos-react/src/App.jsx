import React from 'react';

import Aleatorio from './components/basics/Aleatorio';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';

export default function App(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio min={1} max={60} />
      <br />
      <hr/>
      <Fragmento />
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro Silva" nota={9.3}>
      </ComParametro>
      <Primeiro></Primeiro>
    </div>

  );
}