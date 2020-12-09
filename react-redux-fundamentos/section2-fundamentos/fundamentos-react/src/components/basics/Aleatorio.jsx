import React from 'react';

export default function Aleatorio(props) {
  //const min = props.min;
  //const max = props.max;

  //destructuring
  const { min, max } = props;
  const numAleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong> {min} </p>
      <p><strong>Valor Máximo: </strong> {max} </p>
      <p><strong>Valor Escolhido: </strong> {numAleatorio} </p>
    </div>
  );
}