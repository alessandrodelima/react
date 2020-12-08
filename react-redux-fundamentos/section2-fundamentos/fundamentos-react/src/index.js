import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';


ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
        titulo="Situação do Aluno"
        aluno="Pedro Silva" nota={9.3}>
    </ComParametro>

    <ComParametro 
        titulo="Situação do Aluno"
        aluno="Maria" nota={6.8}>
    </ComParametro>

  </div>,
  document.getElementById('root')
);
