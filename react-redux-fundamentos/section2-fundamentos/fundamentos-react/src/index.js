import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

/*
const el = document.getElementById('root');
ReactDOM.render('Olá React World!', el );
ou ---- melhorando o codigo

ReactDOM.render(
  <div>
    <strong>Olá React World, Bro!!!</strong>
  </div>,
  document.getElementById('root')
);

======================= modificando o código

*/
const tag = <strong>Olá React World!!!</strong>;
ReactDOM.render(
  <div>
    { tag }
  </div>,
  document.getElementById('root')
);


