import React from 'react';
export default function ComParametro(props) {
  //const sub = props.subtitulo;
  const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
  //const notaInt = Math.ceil(props.nota)
  console.log(props);
  return (
    <div>
      <h2>{ props.titulo }</h2>
      {/* <h3>{ props.subtitulo }</h3> */}
      {/* { sub } */}
      <p>
        <strong> 
          { props.aluno } </strong> 
          tem nota 
          <strong> { props.nota } </strong>
           {/* <strong> { props.notaInt } </strong> */}
          e foi 
          <strong> { status }</strong>!
      </p>
    </div>
  )

}